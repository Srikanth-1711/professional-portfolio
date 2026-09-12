import { CAPABILITIES } from "@/constants";

export const Encryption = () => (
  <section className="section-shell capability-section">
    <div className="section-heading"><p className="eyebrow">What I build</p><h2>AI-first products, engineered end to end.</h2></div>
    <div className="capability-grid">{CAPABILITIES.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
  </section>
);
