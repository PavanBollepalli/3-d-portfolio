const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "+", label: "Satisfied Clients" },
  { value: 4, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Pavan demonstrated strong analytical and technical abilities throughout his B.Tech journey, actively contributing to various academic and technical projects.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "B.Tech - Computer Science (AI & ML)",
    date: "October 2021 - Present",
    responsibilities: [
      "Pursuing Computer Science with a specialization in AI & ML at Vasireddy Venkatadri Institute of Technology.",
      "Built academic projects focused on full-stack development and AI applications.",
      "Actively participated in hackathons, coding competitions, and research-oriented activities.",
    ],
  },
  {
    review: "Pavan has been a consistent and valuable contributor to Wikimedia projects. His open-source contributions are impactful, well-documented, and community-focused.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Open Source Developer",
    date: "June 2023 - Present",
    responsibilities: [
      "Contributed to Wikimedia’s open-source repositories by fixing bugs, improving UI, and writing scalable code.",
      "Collaborated with global contributors, reviewed pull requests, and followed open-source best practices.",
      "Wrote comprehensive documentation and participated in issue discussions to improve project direction.",
    ],
  },
  {
    review: "As a freelancer, Pavan delivered high-quality full-stack solutions tailored to client needs. He was proactive, deadline-driven, and technically sound in all engagements.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Freelance Full Stack Developer",
    date: "April 2022 - Present",
    responsibilities: [
      "Developed custom websites and web applications for startups and local businesses.",
      "Used technologies like React, Next.js, Node.js, MongoDB, and Tailwind CSS to build performant UIs and robust backends.",
      "Handled deployment, SEO, and client communication independently, delivering end-to-end solutions.",
    ],
  }
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Rahul Verma",
    mentions: "@rahulverma",
    review:
      "Working with Pavan on a freelance SaaS project was a great experience. He single-handedly built the frontend using Next.js and Tailwind, and handled the backend integrations flawlessly. His commitment to timelines and quality stood out.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Sana Iqbal",
    mentions: "@sana.codes",
    review:
      "Pavan contributed to our open-source Wikimedia initiative with such clarity and consistency. His pull requests were always well-documented, and his ability to grasp project requirements without micromanagement was impressive.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Karthik Ramesh",
    mentions: "@karthik.dev",
    review:
      "I collaborated with Pavan during a GDSC hackathon. His knowledge of full-stack tools, especially MongoDB, Express, and React, helped us build a solid MVP in record time. He’s a team player and a great problem solver.",
    imgPath: "/images/client3.png",
  },
  {
    name: "arjun",
    mentions: "@arjun.sharma",
    review:
      "Pavan redesigned our NGO’s website from scratch as part of his freelance work. The final result was clean, responsive, and fast. He even guided us on SEO and basic analytics. A full-stack powerhouse!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Amit Joshi",
    mentions: "@amit_js",
    review:
      "As a mentor in a student developer program, I’ve seen Pavan grow rapidly. From open-source contributions to complex backend logic, his passion for learning and execution speed is next level.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Rahul",
    mentions: "@Rahul2432",
    review:
      "Pavan helped us build a portfolio site with animations, blogs, and CMS integration. He was clear in communication and quick with iterations. His frontend work is clean and pixel-perfect.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/insta.png",
    url: ""
  },
  {
    name: "Leetcode",
    imgPath: "/images/fb.png",
    url: "https://github.com/PavanBollepalli"
  },
  {
    name: "Wellfound",
    imgPath: "/images/x.png",
    url: "https://wellfound.com/u/pavan-venkata-naga-manoj-bollepalli"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/pavan-bollepalli/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
