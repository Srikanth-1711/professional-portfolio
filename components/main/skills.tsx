import Image from "next/image";

import { SKILL_LOGOS, STACK_GROUPS } from "@/constants";
import { getAssetPath } from "@/utils/path";

export const Skills = () => (
  <section id="stack" className="section-shell stack-section">
    <div className="section-heading"><p className="eyebrow">Engineering stack</p><h2>From AI orchestration to the infrastructure beneath it.</h2></div>

    {/* Technology logo strip */}
    <div className="logo-strip">
      {SKILL_LOGOS.map((logo) => (
        <div className="logo-item" key={logo.name} title={logo.name}>
          <Image src={getAssetPath(logo.file)} alt={logo.name} width={44} height={44} />
          <span>{logo.name}</span>
        </div>
      ))}
    </div>

    <div className="stack-grid">{STACK_GROUPS.map((group) => <article className="stack-card" key={group.title}><h3>{group.title}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
  </section>
);
