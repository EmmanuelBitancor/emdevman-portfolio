// lib/data.ts

import pcosImage from "../assets/projects/pcos.png";
import cuisinaImage from "../assets/projects/OUTSIDE.png";
import profileImage from "../assets/projects/portfolio.png";


export const projects = [
  {
    title: "CTECH X CCSET",
    description:
      "The CTECH x CCSET Merged System began as a collaborative project between 3rd-year and 4th-year Computer Science students—a platform created to publish student research papers with an integrated Peer Reviewer System for instructors. When I was in my 3rd year, I was assigned as the Project Leader, responsible for guiding my teammates, giving direction, and ensuring the system took shape according to our goals.As I stepped into my 4th year, the project continued to grow along with me. I took the initiative to fully revamp the system’s design, elevating its features, functionality, and overall user experience. What started as a class requirement has become a long-term project that reflects both our collaboration and my commitment to improving and innovating the system as we move forward.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Postman", "MySQL"],
    github: "/error/private", // Or use the isPrivate flag we discussed earlier
    demo: "https://www.ctech.bisubilar.org/",
    image: "/assets/projects/ctech.png", // Use string path for Next.js public folder
    isPrivate: true, // Optional: for your PrivateAccess component
  },
  {
    title: "INA-ANI",
    description: "During my 3rd-Year i was tasked to Design the Marketplace feature to display products from various sellers in an organized and visually appealing manner.INA-ANI an E-Commerce Website Platform for Agrilcultural Products. INA-ANI aims to empower local farmers and artisans by providing them with a user-friendly platform to showcase and sell their products directly to consumers. The website features a modern design, intuitive navigation, and secure payment options to ensure a seamless shopping experience for users.",
    tags: ["React", "Node.js", "Postman", "Express", "CSS3", "MySQL"],
    github: "/error/private",
    demo: "https://inaani-65603a755da1.herokuapp.com/",
    image: "/assets/projects/ina-ani.png",
    isPrivate: true,
  },
  {
    title: "FlexWear",
    description: "An E-Commerce Website for Selling Wearable Products. FlexWear is designed to provide users with a seamless shopping experience, featuring a modern UI/UX design, product catalog, shopping cart, and secure checkout process.",
    tags: ["Vite+React.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/EmmanuelBitancor/FlexWear.git",
    demo: "https://flex-wear.vercel.app/",
    image: "/assets/projects/flexwear.png",
    isPrivate: false,
  },
  {
    title: "Cuisina AI",
    description:
      "Cuisina-AI is an innovative mobile application designed to enhance food safety, nutrition awareness, and everyday cooking experiences through the power of artificial intelligence. The app utilizes Convolutional Neural Networks (CNN), a state-of-the-art deep learning algorithm, to accurately identify different types of livestock and meat—including beef, pork, chicken, and goat—using real-time image analysis. By simply capturing or uploading an image, users can instantly determine the type of meat they are handling, reducing the risk of misidentification that may lead to improper preparation or dietary concerns.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    github: "/error/private",
    demo: "https://play.google.com/store/apps/details?id=com.fullstack.cuisinaapp",
    image: cuisinaImage,
    isPrivate: true,
  },
  {
    title: "Digital PCOS Awareness",
    description: "Empowering women with knowledge about Polycystic Ovary Syndrome. Learn about prevention, symptoms, and healthy lifestyle changes.",
    tags: ["TBA"],
    github: "/error/private",
    demo: "https://digital-awareness-rose.vercel.app/",
    image: pcosImage,
    isPrivate: true,
  },
  {
    title: "Portfolio Website",
    description: "A Digital Portfolio Website showcasing my skills, projects, and experiences. This website serves as a personal branding tool, allowing me to present my work and achievements in a professional and visually appealing manner.",
    tags: ["TBA"],
    github: "/error/private",
    demo: "https://emmanuelbitancor.vercel.app",
    image: profileImage,
    isPrivate: true,
  }
];