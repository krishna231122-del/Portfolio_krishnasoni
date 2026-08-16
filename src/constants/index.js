export const myProjects = [
  {
    id: 1,
    title: "AI Research Framework",
    description:
      "Designed a cooperative multi-agent system with independent LLM configs and a stateful pipeline separating web discovery, synthesis, and report generation.",
    subDescription: [
      "Exposed agent tools via a decorator-based system with error handling.",
      "Exposed core agent pipeline functionality via a FastAPI REST API, decoupling backend logic from the Streamlit frontend for independent testing and reuse.",
      "Shipped an interactive Streamlit dashboard with deterministic dependency management using the uv package engine, and implemented Streamlit-native authentication with bcrypt and SQLAlchemy."
    ],
    href: "https://github.com/krishna231122-del/Research_agent",
    logo: "",
    image: "/assets/projects/researchflow.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      }
    ],
  },
  {
    id: 2,
    title: "AI Video Assistant with RAG Pipeline",
    description:
      "Engineered a multimodal pipeline that ingests raw video, extracts audio, and generates transcripts.",
    subDescription: [
      "Answers queries via a RAG workflow using Mistral AI with transcript chunking to stay within context window limits."
    ],
    href: "https://github.com/krishna231122-del/AI-VIDEO-ASSISTANT-RAG-",
    logo: "",
    image: "/assets/projects/videoassistant.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "PyTorch",
        path: "/assets/logos/pytorch.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      }
    ],
  },
  {
    id: 3,
    title: "AI Recruiting Matching Agent",
    description:
      "Designed the system architecture for an agentic LangGraph pipeline — multi-node workflow plus a human-in-the-loop feedback node.",
    subDescription: [
      "Implemented JD parsing, requirement extraction, hybrid RAG resume search via ChromaDB dense + BM25 sparse retrieval with Mistral embeddings, and multi-round candidate ranking.",
      "Built an evaluation harness measuring retrieval quality against hand-labeled ground truth, achieving 0.92 recall@3 and 0.90 nDCG@3 across 6 test queries spanning in-domain and out-of-domain resumes."
    ],
    href: "https://github.com/krishna231122-del/Agentic-Profile-Matching",
    logo: "",
    image: "/assets/projects/recruitingagent.jpg",
    tags: [
      {
        id: 1,
        name: "LangGraph",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      }
    ],
  }
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/krishna231122-del",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/krishna-soni-806b78382",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/SoniCodes/",
    icon: "/assets/logos/leetcode.svg",
  },
];

export const experiences = [
  {
    title: "Technical Skills",
    job: "Languages, Databases, Infrastructure & AI Frameworks",
    date: "Core Competencies",
    contents: [
      "Languages & Frameworks: Python (FastAPI), C++, Go, JavaScript, TypeScript (Node.js)",
      "Databases & Caching: PostgreSQL, MySQL, MongoDB, Redis, ChromaDB, Qdrant (Vector DBs)",
      "Infrastructure & DevOps: Docker, AWS (EC2/S3), Git, CI/CD, MCP (Model Context Protocol), Streamlit Cloud",
      "Concepts: Retrieval-Augmented Generation (RAG), Hybrid Search, Low-Level Design (LLD), System Design, Agentic Workflows, Neural Networks, Supervised/Unsupervised Learning, Fine-Tuning, Feature Engineering, Evaluation Metrics",
      "AI/ML Frameworks: PyTorch, TensorFlow, LangChain (AI Agents), LangGraph, Scikit-learn, Deep Learning, NLP"
    ],
  },
  {
    title: "Bachelor of Technology in ECE",
    job: "University of Petroleum and Energy Studies",
    date: "Aug 2025 - May 2029",
    contents: [
      "Pursuing B.Tech in Electronics and Communication Engineering.",
      "CGPA: 7.85",
      "Focused on Retrieval-Augmented Generation, Agentic Workflows, Neural Networks, Deep Learning, and NLP."
    ],
  },
  {
    title: "Open Source Contributor",
    job: "Mem0 (Memory layer for LLMs)",
    date: "GitHub Open Source",
    contents: [
      "Contributed a merged pull request to Mem0, an open-source memory layer for LLM applications.",
      "Improved the project's codebase through the GitHub review process with project maintainers."
    ],
  },
  {
    title: "AI/ML & Software Certifications",
    job: "Stanford & DeepLearning.AI",
    date: "Credentials",
    contents: [
      "✅ Supervised Machine Learning: Regression and Classification – Issued by DeepLearning.AI & Stanford University on Coursera",
      "✅ Software Engineer Intern Certification – Verified by HackerRank",
      "✅ Advanced Learning Algorithms – DeepLearning.AI & Stanford University",
      "✅ HackerRank Certificates — SQL (Advanced)"
    ],
  },
];

export const reviews = [
  {
    name: "Recruiter A",
    username: "@recruiter_a",
    body: "Krishna's recruiting agent pipeline achieves outstanding metrics, highly impressed by the evaluation harness.",
    img: "https://robohash.org/recruiter_a",
  },
  {
    name: "Collaborator B",
    username: "@collab_b",
    body: "The multi-agent research framework parallelized our workflows seamlessly. Excellent engineering quality.",
    img: "https://robohash.org/collab_b",
  },
];
