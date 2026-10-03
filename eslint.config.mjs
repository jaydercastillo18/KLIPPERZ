import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
export default defineConfig([
  globalIgnores([".next/**", ".tools/**", "artifacts/**", "next-env.d.ts"]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["src/**/*.{ts,tsx}"], ...reactHooks.configs.flat.recommended },
  { files: ["scripts/**/*.mjs"], languageOptions: { globals: { console: "readonly", process: "readonly", document: "readonly", window: "readonly", HTMLElement: "readonly" } } },
]);
