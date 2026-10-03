export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span className="accent">{number}</span><span className="eyebrow-line" />{label}</p><h2>{title}</h2></div>{children && <div className="heading-aside">{children}</div>}</div>;
}
