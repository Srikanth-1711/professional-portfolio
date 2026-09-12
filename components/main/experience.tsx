import Image from "next/image";
import { EXPERIENCE } from "@/constants";

export const Experience = () => (
  <section id="experience" className="section-shell experience-section">
    <div className="section-heading">
      <p className="eyebrow">Career & Education</p>
      <h2>From engineering mathematics into enterprise AI systems.</h2>
    </div>
    <div className="timeline">
      {EXPERIENCE.map((exp) => (
        <article key={exp.period + exp.title} className="flex gap-4 items-start">
          <div className="rounded-lg bg-[#12072b] border border-[#7042f840] p-2 flex-shrink-0 flex items-center justify-center gap-2">
            {"logos" in exp && Array.isArray((exp as { logos?: readonly string[] }).logos) && (exp as { logos: readonly string[] }).logos.length > 1 ? (
              (exp as { logos: readonly string[] }).logos.map((l: string, i: number) => (
                <div key={i} className="w-10 h-10 flex items-center justify-center">
                  <Image src={l} alt={exp.company} width={40} height={40} className="w-full h-full object-contain" />
                </div>
              ))
            ) : (
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src={exp.logo} alt={exp.company} width={48} height={48} className="w-full h-full object-contain" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#7042f830] text-[#c4a9ff] border border-[#7042f855]">
                {exp.tag}
              </span>
              <span className="text-xs text-gray-400">📍 {exp.location}</span>
            </div>
            <p className="text-sm text-[#b49bff] font-semibold">{exp.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">
              {exp.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">· {exp.company}</span>
            </h3>
            {exp.description && <p className="text-gray-300 text-sm mt-2 leading-relaxed">{exp.description}</p>}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-0.5 rounded bg-[#160b35] text-gray-300 border border-[#7042f833]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
