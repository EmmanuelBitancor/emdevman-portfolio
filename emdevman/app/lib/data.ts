// lib/data.ts
import ctechImg from "../assets/projects/ctech.png"; // Adjust path based on where you moved images
import inaAniImg from "../assets/projects/ina-ani.png";
import flexwearImg from "../assets/projects/flexwear.png";
import hirayaImg from "../assets/projects/hiraya.png";
import placeholderImg from "../assets/images/placeholder.jpg"; 

export const projects = [
  {
    title: "CTECH X CCSET",
    description:
      "The CTECH x CCSET Merged System began as a collaborative project between 3rd-year and 4th-year Computer Science students—a platform created to publish student research papers with an integrated Peer Reviewer System for instructors. When I was in my 3rd year, I was assigned as the Project Leader, responsible for guiding my teammates, giving direction, and ensuring the system took shape according to our goals.As I stepped into my 4th year, the project continued to grow along with me. I took the initiative to fully revamp the system’s design, elevating its features, functionality, and overall user experience. What started as a class requirement has become a long-term project that reflects both our collaboration and my commitment to improving and innovating the system as we move forward.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Postman", "MySQL"],
    github: "/error/private", // Or use the isPrivate flag we discussed earlier
    demo: "https://bisubilarctech-0adba2bc1c57.herokuapp.com/",
    image: ctechImg, // Pass the imported object
    isPrivate: true, // Optional: for your PrivateAccess component
  },
  {
    title: "INA-ANI",
    description: "During my 3rd-Year i was tasked to Design the Marketplace feature to display products from various sellers in an organized and visually appealing manner.INA-ANI an E-Commerce Website Platform for Agrilcultural Products. INA-ANI aims to empower local farmers and artisans by providing them with a user-friendly platform to showcase and sell their products directly to consumers. The website features a modern design, intuitive navigation, and secure payment options to ensure a seamless shopping experience for users.",
    tags: ["React", "Node.js", "Postman", "Express", "CSS3", "MySQL"],
    github: "/error/private",
    demo: "https://inaani-65603a755da1.herokuapp.com/",
    image: inaAniImg,
    isPrivate: true,
  },
  {
    title: "FlexWear",
    description: "An E-Commerce Website for Selling Wearable Products. FlexWear is designed to provide users with a seamless shopping experience, featuring a modern UI/UX design, product catalog, shopping cart, and secure checkout process.",
    tags: ["Vite+React.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/EmmanuelBitancor/FlexWear.git",
    demo: "https://flex-wear.vercel.app/",
    image: flexwearImg,
    isPrivate: false,
  },
  {
    title: "HirayaPH",
    description:
      "A Social Media Web Application that allows users to connect, share content, and interact with each other. Built with NextJS for the frontend and Node.js for the backend, Hiraya offers a seamless and engaging user experience.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    github: "/error/private",
    demo: "/error/private",
    image: hirayaImg,
    isPrivate: true,
  },
  {
    title: "Coming Soon...",
    description: "No Description Available",
    tags: ["TBA"],
    github: "/error/private",
    demo: "/error/private",
    image: placeholderImg,
    isPrivate: true,
  },
  {
    title: "Coming Soon...",
    description: "No Description Available",
    tags: ["TBA"],
    github: "/error/private",
    demo: "/error/private",
    image: placeholderImg,
    isPrivate: true,
  }
];