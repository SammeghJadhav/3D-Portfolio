const config = {
  title: "Sammegh Jadhav | AI/ML Engineer",
  description: {
    long: "Driven Computer Science & Engineering major with expertise in Artificial Intelligence/Machine Learning (AI/ML). Proficient with Python, Java, and LLMs in creating intelligent solutions. Enthusiastic about applying theoretical knowledge along with practical experience in the field of software engineering or AI development.",
    short:
      "Portfolio of Sammegh Jadhav, an aspiring AI/ML Engineer and Computer Science major.",
  },
  keywords: [
    "Sammegh",
    "Jadhav",
    "portfolio",
    "AI/ML Engineer",
    "Machine Learning",
    "Artificial Intelligence",
    "Python",
    "NLP",
    "LLMs",
    "Java",
  ],
  author: "Sammegh Jadhav",
  email: "sammeghjadhav2210@gmail.com",
  site: "https://github.com/SammeghJadhav",

  // for github stars button
  githubUsername: "SammeghJadhav",
  githubRepo: "https://github.com/repos?q=owner%3A%40me",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/sammegh-jadhav-a1b5b8323/",
    instagram: "https://www.instagram.com/sammegh_jadhav_2210/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/SammeghJadhav",
  },
};
export { config };
