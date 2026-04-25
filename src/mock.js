// Mock data for Viraj Gavade Portfolio

export const personalInfo = {
  name: "VIRAJ GAVADE",
  headline: "ML Engineer | GenAI & Backend Systems | Full Stack MERN Developer",
  tagline: "Building scalable ML systems, secure backend architectures, and full-stack applications",
  description: "AI Solution Architect specializing in production ML systems, backend engineering, high-performance inference pipelines, secure API design, and full-stack MERN development.",
  portfolio: "https://portfolio-viraj-gavades-projects.vercel.app/",
  linkedin: "https://www.linkedin.com/in/viraj-gavade-8877aa30b/",
  github: "https://github.com/viraj-gavade",
  twitter: "https://x.com/viraj_gavade",
  email: "vrajgavade17@gmail.com",
  resumes: {
    ml: "https://drive.google.com/file/d/14ZciY67_Bl874VOAtNvVIfXM0deVXjrX/view?usp=sharing",
    fullstack: "https://drive.google.com/file/d/1mSombCeDRLcZg-_0IAvvmlQq_dELe-6n/view?usp=sharing",
    ai: "https://drive.google.com/file/d/1h0XPVvvoFqMnFxoinpQZG00nQbII-D0K/view?usp=sharing",
    aiml: "https://drive.google.com/file/d/11bGrPk8WNSWPR3GU97VvXgssoZYhm2-K/view?usp=sharing"
  }
};

export const metrics = {
  projects: "50+",
  certifications: "6+",
  githubRepos: "50+",
  contributions: "1.2K+",
  techStack: "20+",
  linesOfCode: "50K+"
};

export const experience = [
  {
    id: 1,
    role: "AIML Intern",
    company: "Labmentix",
    period: "Oct 2025 – Present",
    description: [
      "Engineered deployable computer vision models using MobileNetV2 and custom CNNs with real-time FastAPI and Streamlit inference",
      "Architected end-to-end ML pipelines from preprocessing to inference using PyTorch and scikit-learn",
      "Designed real-time API-based model serving infrastructure",
      "Built recall-optimized fraud detection workflows using large UPI transaction datasets"
    ],
    tech: ["PyTorch", "FastAPI", "Streamlit", "MobileNetV2", "Scikit-learn"]
  }
];

export const timeline = [
  {
    id: 1,
    period: "Feb 2024",
    title: "Web Development Journey Begins",
    description: "Started learning HTML, CSS, and JavaScript fundamentals",
    icon: "🚀",
    skills: ["HTML", "CSS", "JavaScript"],
    projects: [],
    type: "milestone"
  },
  {
    id: 2,
    period: "Aug 2024",
    title: "Backend Development & Tech Stack",
    description: "Learned server-side development with Node.js, Express, and database design",
    icon: "🔧",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    projects: [],
    type: "skill"
  },
  {
    id: 3,
    period: "Nov 2024",
    title: "React & Frontend Mastery",
    description: "Deep dive into React, component design, state management, and responsive UI",
    icon: "⚛️",
    skills: ["React", "JSX", "Hooks", "Tailwind CSS"],
    projects: [],
    type: "skill"
  },
  {
    id: 4,
    period: "Dec 2024",
    title: "Full Stack Development",
    description: "Completed full-stack MERN applications with authentication and cloud deployment",
    icon: "🌐",
    skills: ["MERN Stack", "TypeScript", "AWS S3", "Socket.io"],
    projects: ["StudyShare", "Thriftify", "Secure-Vault"],
    type: "project"
  },
  {
    id: 5,
    period: "Mar 2025",
    title: "Machine Learning Specialization",
    description: "Completed comprehensive ML specialization from DeepLearning.AI",
    icon: "🎓",
    skills: ["PyTorch", "Neural Networks", "Scikit-learn", "TensorFlow"],
    projects: [],
    type: "certification"
  },
  {
    id: 6,
    period: "Aug 2025",
    title: "GenAI Professional Certification",
    description: "Achieved OCI Certified Generative AI Professional certification",
    icon: "🎓",
    skills: ["LangChain", "RAG", "LLMs", "Prompt Engineering"],
    projects: ["Conversational RAG Chatbot"],
    type: "certification"
  },
  {
    id: 7,
    period: "Oct 2025",
    title: "AIML Internship at Labmentix",
    description: "Started internship focusing on computer vision and ML model deployment",
    icon: "💼",
    skills: ["MobileNetV2", "FastAPI", "Computer Vision", "Model Serving"],
    projects: ["Fraud Detection Pipeline"],
    achievements: [
      "Engineered deployable computer vision models with real-time inference",
      "Architected end-to-end ML pipelines from preprocessing to deployment",
      "Built recall-optimized fraud detection for payment systems"
    ],
    type: "internship"
  },
  {
    id: 8,
    period: "Nov 2025",
    title: "MLOps & AWS Deployment",
    description: "Mastered MLOps practices, Docker containerization, and AWS cloud infrastructure",
    icon: "☁️",
    skills: ["Docker", "MLflow", "AWS EC2", "CI/CD Pipelines"],
    projects: ["Network Intrusion Detection", "Heart Disease Prediction"],
    type: "project"
  },
  {
    id: 9,
    period: "Jan 2026",
    title: "AI Automation with N8N",
    description: "Built intelligent automation workflows using N8N and AI agents",
    icon: "🤖",
    skills: ["N8N", "Groq LLM", "API Integration", "Workflow Automation"],
    projects: ["Travel Planner AI Agent", "AI Automation Pipelines"],
    type: "project"
  }
];

export const projects = [
  {
    id: 1,
    title: "Thriftify",
    subtitle: "Scalable E-commerce Platform",
    description: "Real-time commerce backend architecture with WebSocket-based communication layer and media pipeline integration",
    longDescription: "Engineered a production-ready e-commerce platform with real-time features. Built scalable REST API system with Socket.io for live updates. Integrated Cloudinary for optimized media delivery. Implemented secure authentication and authorization flows.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io", "Cloudinary"],
    github: "https://github.com/viraj-gavade/Thriftify",
    demo: "https://thriftify.onrender.com/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Backend",
    highlights: [
      "Real-time WebSocket communication",
      "REST API system design",
      "Cloud media pipeline",
      "Production deployment"
    ]
  },
  {
    id: 2,
    title: "Network Intrusion Detection",
    subtitle: "High-Performance ML System",
    description: "Security-focused ML system with containerized deployment and low-latency inference",
    longDescription: "Designed and deployed a high-performance network intrusion detection system achieving 98% accuracy with 45ms inference latency. Containerized deployment using Docker with MLflow for experiment tracking. Built FastAPI-based serving architecture for real-time threat detection.",
    tech: ["Python", "Scikit-learn", "FastAPI", "Docker", "MLflow", "Pandas"],
    github: "https://github.com/viraj-gavade/Network-Security-Machine-Learning-Project",
    demo: null,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "ML",
    highlights: [
      "98% accuracy achieved",
      "45ms inference latency",
      "Docker containerization",
      "MLflow experiment tracking"
    ],
    metrics: {
      accuracy: "98%",
      latency: "45ms"
    }
  },
  {
    id: 3,
    title: "StudyShare",
    subtitle: "Resource Exchange Platform",
    description: "Type-safe full-stack platform with cloud-integrated storage and API-driven architecture",
    longDescription: "Built a comprehensive resource sharing platform with type-safe React/TypeScript frontend and robust Node.js backend. Integrated AWS S3 for scalable file storage. Designed RESTful API architecture for efficient resource exchange and user management.",
    tech: ["React", "TypeScript", "Node.js", "AWS S3", "MongoDB"],
    github: "https://github.com/viraj-gavade/STUDY-SHARE",
    demo: "https://study-share-frontend.onrender.com/",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    category: "Full Stack",
    highlights: [
      "Type-safe architecture",
      "AWS S3 integration",
      "RESTful API design",
      "Cloud-ready deployment"
    ]
  },
  {
    id: 4,
    title: "Conversational RAG Chatbot",
    subtitle: "Retrieval-Augmented Generation System",
    description: "End-to-end LLM architecture with vector database and stateful conversational memory",
    longDescription: "Architected a production RAG system using LangChain and ChromaDB for document retrieval. Implemented document embedding pipeline with HuggingFace models. Designed stateful conversation management for context-aware responses. Deployed on Streamlit for accessible interface.",
    tech: ["Python", "LangChain", "ChromaDB", "HuggingFace", "Streamlit"],
    github: "https://github.com/viraj-gavade/End-to-end-Conversational-chatbot-with-pdf-and-chat-history",
    demo: "https://rag-document-app.streamlit.app/",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    category: "GenAI",
    highlights: [
      "RAG architecture",
      "Vector database integration",
      "Document embedding pipeline",
      "Stateful memory management"
    ]
  },
  {
    id: 5,
    title: "Secure-Vault",
    subtitle: "Privacy-First Password Manager",
    description: "Zero-knowledge password manager with client-side AES-256 encryption",
    longDescription: "Built a security-focused password manager with client-side encryption ensuring zero server-side knowledge of passwords. Implemented AES-256 encryption with Crypto-JS. Designed minimal, fast UI with Next.js. Containerized for easy deployment.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Crypto-JS", "Tailwind CSS"],
    github: "https://github.com/viraj-gavade/Secure-Valut",
    demo: null,
    image: "https://images.unsplash.com/photo-1633356122544-f134ef2944f0?w=800&q=80",
    category: "Full Stack",
    highlights: [
      "AES-256 encryption",
      "Zero-knowledge design",
      "Client-side security",
      "Fast minimal UI"
    ]
  },
  {
    id: 6,
    title: "AttendMaster",
    subtitle: "Attendance Analytics Dashboard",
    description: "Next.js-powered dashboard with interactive visualizations and predictive analytics",
    longDescription: "Engineered an intelligent attendance tracking system with real-time analytics dashboard. Integrated Chart.js for interactive trend analysis. Built server-side rendering with Next.js for optimal performance. Implemented predictive analytics for student performance insights.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/viraj-gavade/attendmaster",
    demo: null,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Full Stack",
    highlights: [
      "Interactive visualizations",
      "Predictive analytics",
      "Server-side rendering",
      "Real-time insights"
    ]
  },
  {
    id: 7,
    title: "Heart Disease Prediction",
    subtitle: "Healthcare ML Application",
    description: "ML-powered platform predicting cardiovascular risk from health metrics",
    longDescription: "Developed a production healthcare application with Logistic Regression model achieving 85%+ accuracy. Processed 13+ clinical features. Built interactive visualizations with Chart.js. Deployed with Docker on Render for accessibility.",
    tech: ["FastAPI", "Scikit-learn", "Docker", "Chart.js", "Render"],
    github: "https://github.com/viraj-gavade/Heart-disease-Prediction-using-Machine-Learning",
    demo: "https://heart-disease-prediction-t0j1.onrender.com/",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    category: "ML",
    highlights: [
      "85%+ accuracy",
      "13+ clinical features",
      "Interactive visualizations",
      "Production deployment"
    ]
  },
  {
    id: 8,
    title: "Music Mood Classification",
    subtitle: "Deep Learning Audio Analysis",
    description: "CNN-based system for automated music emotion recognition",
    longDescription: "Designed custom CNN architecture for audio classification achieving high accuracy in mood detection. Processed MFCC, spectrograms, and chromagrams. Optimized with PyTorch for production inference. Implemented multi-class classification for 5+ emotion categories.",
    tech: ["PyTorch", "Librosa", "NumPy", "Scikit-learn", "Audio Processing"],
    github: "https://github.com/viraj-gavade/music-mood-classification-ml",
    demo: null,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    category: "ML",
    highlights: [
      "Custom CNN architecture",
      "Audio signal processing",
      "Multi-class classification",
      "Production optimization"
    ]
  },
  {
    id: 9,
    title: "Wine Quality API",
    subtitle: "ML Model Serving Platform",
    description: "FastAPI-based ML inference endpoint for wine quality prediction",
    longDescription: "Built production ML serving platform with FastAPI for real-time predictions. Implemented model versioning and A/B testing capabilities. Added comprehensive validation with Pydantic. Achieved sub-100ms inference latency with Docker containerization.",
    tech: ["FastAPI", "PyTorch", "Pydantic", "Docker", "Uvicorn"],
    github: "https://github.com/viraj-gavade/Wine-Quality-API",
    demo: null,
    image: "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=800&q=80",
    category: "ML",
    highlights: [
      "FastAPI backend",
      "Model versioning",
      "Sub-100ms latency",
      "Auto API documentation"
    ]
  },
  {
    id: 10,
    title: "Aerial Object Detection",
    subtitle: "Computer Vision Pipeline",
    description: "YOLO-based system for detecting objects in drone and satellite imagery",
    longDescription: "Engineered end-to-end computer vision pipeline for aerial imagery analysis. Integrated YOLO and Faster R-CNN for object detection. Built custom data augmentation pipeline for robust training. Optimized for real-time inference on edge devices.",
    tech: ["PyTorch", "OpenCV", "YOLO", "Computer Vision", "Data Augmentation"],
    github: "https://github.com/viraj-gavade/Aerial-Object-Classification---Detection",
    demo: null,
    image: "https://images.unsplash.com/photo-1553531889-e6cf899720f0?w=800&q=80",
    category: "ML",
    highlights: [
      "YOLO/Faster R-CNN",
      "Custom augmentation",
      "Edge device optimization",
      "Real-time inference"
    ]
  },
  {
    id: 11,
    title: "Banking Fraud Analysis",
    subtitle: "Credit Risk ML Solution",
    description: "Ensemble method system for fraud detection and credit risk assessment",
    longDescription: "Developed comprehensive fraud detection system using ensemble methods (Random Forest, XGBoost). Handled class imbalance with SMOTE. Performed hyperparameter optimization with GridSearchCV. Delivered business-focused evaluation metrics.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Imbalanced-learn"],
    github: "https://github.com/viraj-gavade/Paisabazaar-Banking-Fraud-Analysis",
    demo: null,
    image: "https://images.unsplash.com/photo-1611332833328-0f5088893fce?w=800&q=80",
    category: "ML",
    highlights: [
      "Ensemble methods",
      "SMOTE handling",
      "Hyperparameter tuning",
      "Business metrics focus"
    ]
  },
  {
    id: 12,
    title: "AI Mentor Using Gemini",
    subtitle: "AI-Powered Learning Platform",
    description: "Intelligent learning assistant leveraging Google Gemini API",
    longDescription: "Built an AI-powered educational platform using Google Gemini API. Created personalized learning experience with adaptive content. Integrated intelligent study organization and progress tracking. Designed intuitive interface for student engagement.",
    tech: ["JavaScript", "Google Gemini API", "React", "Node.js", "MongoDB"],
    github: "https://github.com/viraj-gavade/AI-Mentor-Using-Gemini",
    demo: null,
    image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&q=80",
    category: "GenAI",
    highlights: [
      "Gemini API integration",
      "Personalized learning",
      "Adaptive content",
      "Progress tracking"
    ]
  }
];

export const skills = {
  "AI/ML": [
    "PyTorch",
    "Scikit-learn",
    "TensorFlow",
    "LangChain",
    "RAG",
    "NLP",
    "Computer Vision"
  ],
  "Backend": [
    "Python (FastAPI)",
    "Node.js (Express)",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "GraphQL"
  ],
  "Full Stack": [
    "React",
    "TypeScript",
    "MERN Stack",
    "RESTful APIs",
    "Socket.io",
    "Next.js"
  ],
  "Ops / Cloud": [
    "Docker",
    "AWS (S3, EC2)",
    "CI/CD",
    "Git",
    "Vercel",
    "MLflow"
  ],
  "Security": [
    "OAuth2",
    "JWT",
    "RBAC",
    "Secure API Design"
  ]
};

export const certifications = [
  {
    id: 1,
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "August 29, 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C1581D76C9B19EA7DD25C7E0D0A57626B4084DE7F3D3D1876D86990E100AEC3D",
    category: "AI"
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "March 2025",
    link: "https://coursera.org/share/16418c4b4fee42012a01c5e69c7badc5",
    category: "ML"
  },
  {
    id: 3,
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "August 25, 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A9319E065260D1AD88B8C2FF33925A707E7B4639148705740C474E4DF6AA75A8",
    category: "AI"
  },
  {
    id: 4,
    title: "Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "April 7, 2025",
    link: "https://www.udemy.com/certificate/UC-a6ed8df9-572c-4ee0-994c-e8e53026571f/",
    category: "Web Dev"
  },
  {
    id: 5,
    title: "Python for Data Science & AI",
    issuer: "IBM",
    date: "February 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/DYJDEFMYBCJN",
    category: "Data Science"
  },
  {
    id: 6,
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    date: "May 2025",
    link: "https://coursera.org/share/5cffd616b84a05222310fb30b5307daf",
    category: "AI"
  }
];
