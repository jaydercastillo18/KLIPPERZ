import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";

const baseURL = process.env.QA_BASE_URL || "http://localhost:3000";
const bookingURL = "https://www.fresha.com/es/a/klipperz-barbershop-lima-avenida-angamos-2268-gijej2dq";
const output = new URL("../artifacts/", import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  for (const width of [375, 390, 430, 768, 1024, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 960 }, reducedMotion: "reduce", deviceScaleFactor: 1 });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error" && !message.text().includes("maps.google")) errors.push(message.text()); });
    const response = await page.goto(baseURL, { waitUntil: "networkidle", timeout: 90000 });
    assert.equal(response.status(), 200);
    assert.match(response.headers()["x-robots-tag"], /noindex, nofollow/);
    await page.locator("h1").waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("h1").count(), 1);
    assert.match(await page.locator('meta[name="robots"]').getAttribute("content"), /noindex, nofollow/);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    assert.equal(overflow, false, `Horizontal overflow at ${width}`);
    const invalidAnchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute("href")).filter(href => href === "#" || !document.getElementById(href.slice(1))));
    assert.deepEqual(invalidAnchors, []);
    assert.equal(await page.locator('a[href*="instagram.com"], a[href*="wa.me"]').count(), 0);
    const bookingLinks = page.locator('a[href*="fresha.com"]');
    for (const link of await bookingLinks.all()) {
      assert.equal(await link.getAttribute("href"), bookingURL);
      assert.equal(await link.getAttribute("target"), "_blank");
      assert.match(await link.getAttribute("rel"), /noopener/);
    }
    await page.getByRole("button", { name: "Barba", exact: true }).click();
    assert.equal(await page.locator(".service-card").count(), 1);
    assert.equal(await page.locator(".service-card h3").innerText(), "Premium shave");
    await page.getByRole("button", { name: "Todos", exact: true }).click();
    assert.equal(await page.locator(".service-card").count(), 6);
    const range = page.locator('input[type="range"]').first();
    await range.focus();
    await range.press("ArrowRight");
    assert.equal(await range.inputValue(), "51");
    await range.press("Home");
    assert.equal(await range.inputValue(), "0");
    await range.press("End");
    assert.equal(await range.inputValue(), "100");
    await range.fill("50");
    const galleryButton = page.getByRole("button", { name: /Ampliar Textured crop/ });
    await galleryButton.click();
    assert.equal(await page.locator("dialog").evaluate(el => el.open), true);
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("dialog").evaluate(el => el.open), false);
    assert.equal(await galleryButton.evaluate(el => el === document.activeElement), true);
    if (width < 901) {
      await page.evaluate(() => window.scrollTo(0, 0));
      const toggle = page.getByRole("button", { name: "Abrir menú" });
      await toggle.click();
      assert.equal(await toggle.getAttribute("aria-expanded"), "true");
      await page.keyboard.press("Escape");
      assert.equal(await toggle.getAttribute("aria-expanded"), "false");
      await toggle.click();
      await page.locator("#mobile-menu").getByRole("link", { name: /Ubicación/ }).click();
      assert.equal(await page.locator("#mobile-menu").count(), 0);
    }
    for (const section of await page.locator("main > section").all()) await section.scrollIntoViewIfNeeded();
    await page.locator("footer").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => Array.from(document.images).filter(img => img.closest("dialog") === null).every(img => img.complete && img.naturalWidth > 0));
    const images = await page.locator("img").evaluateAll(imgs => imgs.filter(img => !img.closest("dialog")).map(img => ({ src: img.currentSrc, loaded: img.complete && img.naturalWidth > 0, alt: img.alt })));
    assert.ok(images.every(img => img.loaded && img.alt));
    const a11y = await new AxeBuilder({ page }).exclude("iframe").withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    const violations = a11y.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) }));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: fileURLToPath(new URL(`viewport-${width}.png`, output)) });
    if (width === 390 || width === 1440) await page.screenshot({ path: fileURLToPath(new URL(`full-${width}.png`, output)), fullPage: true });
    results.push({ width, status: response.status(), overflow, imageCount: images.length, bookingLinks: await bookingLinks.count(), violations, errors });
    console.log(JSON.stringify(results.at(-1)));
    await context.close();
  }
  await writeFile(new URL("qa-results.json", output), JSON.stringify(results, null, 2));
  assert.ok(results.every(result => result.errors.length === 0), "Browser errors found");
  assert.ok(results.every(result => result.violations.length === 0), "Accessibility violations found");
  console.log("PASS: six viewports, booking links, images, filters, comparisons, gallery, menu, robots and accessibility.");
} finally { await browser.close(); }
