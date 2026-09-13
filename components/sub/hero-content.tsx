"use client";

import { ArrowDownIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { LINKS } from "@/constants";
import { getAssetPath } from "@/utils/path";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HeroContent = () => (
  <section id="about" className="hero-shell section-shell">
    <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="hero-copy">
      <motion.p variants={fadeUp} className="eyebrow">AI &amp; ML Engineer · MLOps · LLMOps · Deep Learning · Agentic AIOps</motion.p>
      <motion.h1 variants={fadeUp}>
        Lakshmi Srikanth<br />
        <span>Polavarapu.</span>
      </motion.h1>
      <motion.p variants={fadeUp} className="hero-lede">
        I build end-to-end AI &amp; Machine Learning systems — integrating Deep Learning Engineering, MLOps, LLMOps, AIOps, and AgentOps. Production AI at scale is 60–70% core software engineering and robust system design, and 30–40% the AI layer itself: from token-level linear algebra to high-throughput inference clusters and autonomous multi-agent loops.
      </motion.p>
      <motion.div variants={fadeUp} className="hero-actions">
        <a className="button button-primary" href="#work">
          Explore my work <ArrowDownIcon aria-hidden="true" />
        </a>
        <a className="button button-secondary" href={getAssetPath("/resume.pdf")} target="_blank" rel="noreferrer">
          Resume <ArrowTopRightOnSquareIcon aria-hidden="true" />
        </a>
        <a className="button button-secondary" href={LINKS.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn <ArrowTopRightOnSquareIcon aria-hidden="true" />
        </a>
      </motion.div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }} className="hero-system" aria-label="AI engineering capability map">
      <div className="system-kicker">System capability map</div>
      <div className="system-core">AI</div>
      <div className="system-node node-top">LLMs · RAG</div>
      <div className="system-node node-left">Agents · MCP</div>
      <div className="system-node node-right">APIs · Full stack</div>
      <div className="system-node node-bottom">Linux · GPU serving</div>
    </motion.div>
  </section>
);
