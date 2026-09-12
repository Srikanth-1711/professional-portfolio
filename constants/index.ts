import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

export const NAV_LINKS = [
  { title: "About", link: "#about" },
  { title: "Work", link: "#work" },
  { title: "Stack", link: "#stack" },
  { title: "Experience", link: "#experience" },
  { title: "Contact", link: "#contact" },
] as const;

export const LINKS = {
  github: "https://github.com/Srikanth-1711",
  linkedIn: "https://www.linkedin.com/in/lakshmi-srikanth-/",
  email: "mailto:lakshmisrikanthpolavarapu@gmail.com",
  shipAi: "https://github.com/Srikanth-1711/shipai",
  resume: "https://drive.google.com/file/d/1byedPQ9S-5z_g4Pz6BnRlGe45JcDUoc6/view?usp=sharing",
  resumePdf: "/resume.pdf",
} as const;

export const SOCIALS = [
  { name: "GitHub", icon: RxGithubLogo, link: LINKS.github },
  { name: "LinkedIn", icon: RxLinkedinLogo, link: LINKS.linkedIn },
  { name: "Email", icon: RxEnvelopeClosed, link: LINKS.email },
] as const;

export const CAPABILITIES = [
  {
    number: "01",
    title: "Deep Learning & ML Engineering",
    description:
      "Mathematical modeling, custom neural architectures, PyTorch, loss convergence, and fine-tuning pipelines. Production AI is 60–70% core software engineering and robust system design, and 30–40% the mathematical tensor core.",
  },
  {
    number: "02",
    title: "MLOps & LLMOps at Scale",
    description:
      "Distributed GPU model serving (vLLM, SGLang, LiteLLM), KV-cache optimization, latency benchmarking, automated model evaluation, and continuous integration/deployment for models.",
  },
  {
    number: "03",
    title: "AgentOps & Autonomous Workflows",
    description:
      "Autonomous tool-using agents, Model Context Protocol (MCP), multi-agent DAG coordination (Aure, Ultron), state tracing, loop resilience, and code execution sandboxes.",
  },
  {
    number: "04",
    title: "AIOps, Security & Cisco CCNA",
    description:
      "Enterprise telemetry diagnostics (syslog, SNMP, gNMI), regression log anomaly detection for enterprise routers, and Cisco CCNA certified network & systems security.",
  },
] as const;

export type Project = {
  title: string;
  description: string;
  status: "Internal" | "In progress" | "Nearly complete" | "Building";
  tags: readonly string[];
  link?: string;
};

export const PROJECTS: readonly Project[] = [
  {
    title: "AI Diagnostic & Log Analysis Platform",
    description:
      "Internal AI system for the SAO (Systems and Optics) and QUAD (Quality and Diagnostics) organizations — enables engineers to explore diagnostic and regression-log data through retrieval-augmented workflows for enterprise router software.",
    status: "Internal",
    tags: ["RAG", "LLMs", "Milvus", "FastAPI", "Python"],
  },
  {
    title: "MCP Schematic Analysis Tool",
    description:
      "Internal MCP server supporting engineers with schematic analysis and AI-assisted engineering workflows across cross-functional hardware and firmware teams.",
    status: "Internal",
    tags: ["MCP", "Tool use", "Python", "Engineering AI"],
  },
  {
    title: "LLM Inference & Serving",
    description:
      "Hands-on model-serving work for GPU-backed AI applications across server environments and API gateways — powering internal AI tools at scale.",
    status: "Internal",
    tags: ["vLLM", "SGLang", "LiteLLM", "Linux", "GPU inference"],
  },
  {
    title: "Aure",
    description:
      "Autonomous Python agent runtime for iterative tool and code-execution workflows, informed by open-source agent research and built with deep system design principles.",
    status: "In progress",
    tags: ["Autonomous agent", "Runtime", "Tool execution"],
  },
  {
    title: "Ultron",
    description:
      "Agentic system for orchestrating domain-specific fine-tuning workflows on engineering log datasets using NVIDIA NeMo — a standalone project focused on custom model intelligence.",
    status: "In progress",
    tags: ["Fine-tuning", "NeMo", "Log data", "Agents"],
  },
  {
    title: "Fan Plot Curve Automation",
    description:
      "AI-based automation for a traditionally manual fan-plot-curve workflow in thermal engineering — built for cross-functional teams and designed to extend to future engineering automation projects.",
    status: "Nearly complete",
    tags: ["Automation", "Thermal engineering", "Log processing"],
  },
  {
    title: "Autonomous Workflow Agents",
    description:
      "Internal agents being built to automate and orchestrate repetitive engineering-team workflows across SAO, QUAD, and cross-functional hardware/firmware organizations.",
    status: "In progress",
    tags: ["Agentic AI", "Automation", "Internal tools"],
  },
  {
    title: "ShipAI",
    description:
      "Personal AI engineering platform exploring local models, agents, MCP, context optimization, and multi-agent systems — an ongoing sandbox for end-to-end AI application building.",
    status: "Building",
    tags: ["Local AI", "Agents", "MCP", "Platform"],
    link: LINKS.shipAi,
  },
];

export const SKILL_LOGOS: readonly { name: string; file: string }[] = [
  // Core AI & ML
  { name: "Python", file: "/skills/python.svg" },
  { name: "PyTorch", file: "/skills/pytorch.svg" },
  { name: "TensorFlow", file: "/skills/tensorflow.svg" },
  { name: "Hugging Face", file: "/skills/huggingface.svg" },
  { name: "Transformers", file: "/skills/transformers.svg" },
  { name: "NVIDIA NeMo", file: "/skills/nemo.svg" },
  { name: "NumPy", file: "/skills/numpy.svg" },
  { name: "Pandas", file: "/skills/pandas.svg" },
  { name: "scikit-learn", file: "/skills/sklearn.svg" },
  { name: "OpenCV", file: "/skills/opencv.svg" },
  { name: "Matplotlib", file: "/skills/matplotlib.svg" },
  { name: "Jupyter", file: "/skills/jupyter.svg" },
  { name: "IPython", file: "/skills/ipython.png" },

  // LLMs & GenAI
  { name: "LangChain", file: "/skills/langchain.svg" },
  { name: "LangGraph", file: "/skills/langgraph.svg" },
  { name: "OpenAI", file: "/skills/openai.svg" },
  { name: "Google Gemini", file: "/skills/gemini.svg" },
  { name: "Meta Llama", file: "/skills/llama.svg" },
  { name: "Ollama", file: "/skills/ollama.svg" },
  { name: "MCP", file: "/skills/mcp.svg" },
  { name: "RAG", file: "/skills/rag.svg" },
  { name: "Embeddings", file: "/skills/embeddings.svg" },

  // Inference, Serving & Vector DBs
  { name: "vLLM", file: "/skills/vllm.png" },
  { name: "SGLang", file: "/skills/sglang.svg" },
  { name: "LiteLLM", file: "/skills/litellm.png" },
  { name: "FastAPI", file: "/skills/fastapi.svg" },
  { name: "Milvus", file: "/skills/milvus.svg" },
  { name: "ChromaDB", file: "/skills/chromadb.svg" },
  { name: "FAISS", file: "/skills/faiss.svg" },
  { name: "PostgreSQL", file: "/skills/postgresql.svg" },
  { name: "MySQL", file: "/skills/mysql.svg" },
  { name: "Redis", file: "/skills/redis.svg" },

  // Systems & Languages
  { name: "C", file: "/skills/c.svg" },
  { name: "C++", file: "/skills/cplusplus.svg" },
  { name: "Linux", file: "/skills/linux.svg" },
  { name: "Docker", file: "/skills/docker.svg" },
  { name: "Kubernetes", file: "/skills/kubernetes.svg" },
  { name: "Nginx", file: "/skills/nginx.svg" },
  { name: "Bash", file: "/skills/bash.svg" },
  { name: "Git", file: "/skills/git.svg" },
  { name: "TypeScript", file: "/skills/typescript.svg" },
  { name: "React", file: "/skills/react.svg" },
  { name: "Next.js", file: "/skills/nextjs.svg" },
  { name: "VS Code", file: "/skills/vscode.svg" },
];

export const STACK_GROUPS = [
  {
    title: "Deep Learning & ML Core",
    items: ["Python", "PyTorch", "TensorFlow", "Hugging Face", "Transformers", "NumPy", "Pandas", "scikit-learn", "OpenCV", "Linear Algebra"],
  },
  {
    title: "MLOps & LLMOps",
    items: ["vLLM", "SGLang", "LiteLLM", "NVIDIA NeMo", "Model Serving", "KV Cache", "Milvus", "ChromaDB", "FAISS", "GPU Clusters"],
  },
  {
    title: "AgentOps & Autonomous AI",
    items: ["MCP", "Agentic AI", "Multi-Agent DAGs", "Aure Runtime", "Tool Calling", "Loop Resilience", "IPython", "LangChain", "LangGraph"],
  },
  {
    title: "AIOps & Core Infrastructure",
    items: ["Cisco Telemetry", "Router Diagnostics", "Linux", "Docker", "Kubernetes", "C", "C++", "FastAPI", "Nginx", "Redis", "PostgreSQL", "MySQL", "CCNA Security"],
  },
] as const;

export const EXPERIENCE = [
  {
    period: "Dec 2025 — Present",
    title: "AI Engineer",
    company: "Cisco (via Adecco)",
    location: "Bengaluru, India",
    logo: "/companies/cisco.svg",
    logos: ["/companies/cisco.svg", "/companies/adecco.svg"],
    tag: "Current Role",
    skills: ["vLLM", "SGLang", "FastAPI", "Python", "C Embedded", "Agent Systems", "RAG"],
    description:
      "Building AI-powered engineering applications, autonomous agent systems, and inference infrastructure within the SAO (Systems and Optics) org. Working closely with QUAD (Quality and Diagnostics) software teams on enterprise router diagnostics. Deep cross-functional collaboration with C embedded firmware, PCB, EAC, mechanical, thermal, FPGA, chip testing, EDVGT, MDT, ODVT, and SI teams.",
  },
  {
    period: "Nov 2024 — Nov 2025",
    title: "AI Engineering Apprentice",
    company: "Cisco",
    location: "Bengaluru, India",
    logo: "/companies/cisco.svg",
    tag: "1-Year Apprenticeship",
    skills: ["Python", "C", "Enterprise Diagnostics", "Linux", "Telemetry Analysis", "System Design"],
    description:
      "Completed a rigorous 1-year full-time technical apprenticeship within Cisco's SAO & QUAD organizations. Focused on diagnostic software for enterprise networking routers, integrating AI/ML workflows into regression-log analysis, hardware validation automation, and embedded system debugging.",
  },
  {
    period: "Sept 2024 — Nov 2024",
    title: "Junior Web Developer (Intern)",
    company: "Beedata Technologies",
    location: "Visakhapatnam (Remote / US Startup Client)",
    logo: "/companies/beedata.svg",
    tag: "Startup Experience",
    skills: ["React", "JavaScript", "Node.js", "MySQL", "Full-Stack Dev", "REST APIs"],
    description:
      "Worked as a junior full-stack developer under senior contingent leads for US-based startup clients. Designed and implemented dynamic user interfaces in React, developed backend services in Node.js, and maintained relational databases using MySQL.",
  },
  {
    period: "2020 — 2024",
    title: "B.Tech, Electrical & Electronics Engineering",
    company: "Raghu Engineering College",
    location: "Visakhapatnam, India",
    logo: "/companies/raghu.svg",
    tag: "Graduated 2024",
    skills: ["Linear Algebra", "Calculus", "Signal Processing", "Mathematics", "Core Engineering"],
    description:
      "Graduated with a strong academic foundation in engineering mathematics, linear algebra, and signal processing — the core mathematical bedrock underpinning modern machine learning, vector spaces, and neural architectures.",
  },
] as const;
