import { content } from "@/data/content";
export function TrustBar() { return <div className="trust-bar" aria-label={content.trust.join(", ")}><div className="trust-track" aria-hidden="true">{[0,1,2,3].map(i => <div className="trust-group" key={i}>{content.trust.map(item => <span key={item}>{item}<span className="trust-star">✳</span></span>)}</div>)}</div></div>; }
