export const myProjects = [
  {
    id: 1,
    title: "AI Research Framework",
    description:
      "Designed a cooperative network of autonomous AI agents with distinct roles and independent LLM configurations to parallelize research tasks.",
    subDescription: [
      "Built a stateful task pipeline separating web discovery, content synthesis, and report generation.",
      "Exposed agent tools via a decorator-based system with built-in error handling.",
      "Shipped an interactive Streamlit dashboard with deterministic management using the uv package engine."
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
      "Engineered a multimodal pipeline that ingests raw video, extracts audio, and generates clean transcripts for downstream querying.",
    subDescription: [
      "Implemented a RAG workflow using Mistral AI with transcript chunking.",
      "Achieved precise, context-aware answers without overloading the LLM’s context window.",
      "Integrated audio extraction and processing scripts for seamless pipeline execution."
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
      "Built an agentic LangGraph pipeline with a multi-node workflow and a human-in-the-loop feedback node.",
    subDescription: [
      "Implemented JD parsing, requirement extraction, RAG-based resume search, and candidate ranking.",
      "Used Mistral embeddings and ChromaDB for semantic matching.",
      "Built an evaluation harness measuring retrieval quality, achieving 0.92 recall@3 and 0.90 nDCG@3 across test queries."
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
    title: "Bachelor of Technology in ECE",
    job: "University of Petroleum and Energy Studies",
    date: "2025 - 2029",
    contents: [
      "Pursuing B.Tech in Electronics and Communication Engineering.",
      "CGPA: 7.85",
      "Focused on Retrieval-Augmented Generation, Agentic Workflows, Neural Networks, Deep Learning, and NLP."
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
