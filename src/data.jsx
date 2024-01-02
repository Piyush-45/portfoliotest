// ? importing images
import webdevices from "./images/undraw_web_devices_re_m8sc (1).svg";
import responsive from "./images/responsive.svg";
import bugfixing from "./images/bug fixing.svg";
import seo from "./images/search-engine-optimization.png";
import native1 from "./images/react native.jpeg";
import revamp from "./images/revamp.svg"

import blog1 from "./images/blog_images/hoisting.webp";
import blog2 from "./images/blog_images/blog2.webp";
import blog3 from "./images/blog_images/usecontext cover image.png";
// !project images
import layer_1 from "../src/images/swiper_webp/layer-ss-1-webp.webp";
import layer_2 from "../src/images/swiper_webp/layerss-2.webp";
import layer_3 from "../src/images/swiper_webp/layer-ss-3-webp.webp";

import ff1 from "../src/images/swiper_webp/ff1.webp";
import ff2 from "../src/images/swiper_webp/ff2.webp";
import ff3 from "../src/images/swiper_webp/filmfrenzy desktop 1.webp";
import ffcheck1 from "../src/images/swiper_webp/checkff1.png";


import spacex1 from "../src/images/swiper_webp/space-x-1.webp";
import spacex2 from "../src/images/swiper_webp/space-x-2.webp";
import spacex3 from "../src/images/swiper_webp/space-x-3.webp";

import jh1 from "./images/swiper_webp/jh2.webp"
import jh2 from "./images/swiper_webp/jh3.webp"
import jh3 from "./images/swiper_webp/jh4.webp"

import hb1 from "../src/images/swiper_webp/hoo1.webp";
import hb2 from "../src/images/swiper_webp/hoo2.webp";
// import hb1 from "../src/images/swiper_webp/hoo.webp"
import github from "../src/images/githubf.png";

import plateful1 from "../src/images/swiper_webp/plateful1.webp";
import plateful2 from "../src/images/swiper_webp/plateful2.webp";
import plateful3 from "../src/images/swiper_webp/plateful3.webp";

import ef1 from "../src/images/swiper_webp/ef1.webp";
import ef2 from "../src/images/swiper_webp/ef3.webp";
import ef3 from "../src/images/swiper_webp/ef5.webp";

export const aboutme = [
  {
    heading: "About ",
    // aboutme_p1: `  Welcome to my portfolio website! I'm Piyush Tyagi, a Frontend Web Developer specializing in React. With expertise in both ReactJS and React Native, I create visually stunning and highly functional websites and applications. I'm passionate about delivering seamless user experiences and staying up-to-date with the latest industry trends.`,
    // aboutme_p2: `  I thrive in collaborative environments, where I can contribute my skills and work closely with clients and fellow developers. Let's turn your ideas into reality. Explore my portfolio and let's collaborate!`,
    aboutme_p1:`Hello, I'm Piyush Tyagi, a dedicated self-taught coder with a passion for MERN full-stack development. I specialize in leveraging the power of React Native for cross-platform mobile app development. Following my secondary high school, I embarked on a journey of self-learning to pursue my passion for programming. Faced with challenges like not clearing the JEE exam and enrolling in a private B.Tech college with outdated syllabi, I took matters into my own hands.`,
    aboutme_p2 :`Discovering the versatility of the MERN stack — MongoDB, Express.js, React.js, and Node.js — alongside React Native, I was captivated by the comprehensive capabilities these technologies offered. This expertise allows me to create end-to-end applications and seamless user experiences, whether on the web or mobile platforms.`,
    aboutme_p3:`With a robust foundation in HTML, CSS, JavaScript, and proficiency in the MERN stack and React Native, I bring designs to life, optimize performance, and create engaging experiences. Eager to contribute my full-stack expertise and passion for cutting-edge technologies to a dynamic team, I am committed to delivering high-quality code and enhancing user satisfaction.`,
    aboutme_p4:`Thank you for considering my profile; I look forward to discussing how I can contribute to your team's success.
    `,
    // aboutme_p5:`Thank you for taking the time to review my profile. I look forward to discussing how I can contribute to your team's success.`
  },
];

export const services = [
  {
    id: 1,
    image: `${responsive}`,
    // service_name: "Responsive / Mobile First",
    // service_detail:
    //   "Get a mobile-first website. Fully responsive for all screen sizes, from small screens, tablets, to desktops.",
    service_name: "Responsive Web Sorcerer",
    service_detail:
      "Crafting electrifying apps with the MERN stack and a React Native flair. MongoDB, Express.js, React, Node.js — the dynamic quartet behind my passion for seamless user experiences."
  },
  {
    id: 2,
    image: `${native1}`,
    service_name: "React Native Enthusiast",
    service_detail:
      "Electrifying apps with the sheer force of React Native prowess",
  },
  {
    id: 3,
    image: `${revamp}`,
    service_name: "Website Revamp Specialist",
    service_detail:
      "Revitalizing your online presence with a refreshed and modernized website design",
  },
  {
    id: 4,
    image: `${webdevices}`,
    service_name: "Creative Web Design",
    service_detail:
      "Transforming your ideas into visually stunning web designs that tell your unique story",
  },
  
  {
    id: 5,
    image:`${bugfixing}`,
    service_name:"Bug-Fixing Extraordinaire",
    service_detail:"Solving website woes and ensuring flawless functionality through meticulous bug fixing."
    
  },
  {
    id:6,
    image:`${seo}`,
    service_name: "SEO Optimization Maestro",
    service_detail:
      "Boosting your online visibility and driving organic traffic through expert SEO techniques.",
  }
];

export const blogs = [
  {
    id: 1,
    blogDate: "May 19 2023",
    blogTitle: "Simplifying State Management with React’s useContext Hook",
    blogImage: `${blog3}`,
    a: `https://piyushtyagidev.hashnode.dev/simplifying-state-management-with-reacts-usecontext-hook`,
  },
  {
    id: 2,
    blogDate: "10 Jan 2023",
    blogTitle: "JavaScript Variables Under the Hood",
    blogImage: `${blog1}`,
    a: `https://piyushtyagidev.hashnode.dev/javascript-variables-under-the-hood-how-var-let-and-const-impact-hoisting-scoping-and-shadowing`,
  },
  {
    id: 3,
    blogDate: "14 Jan 2023",
    blogTitle: "Unlocking the Power of Array Method",
    blogImage: `${blog2}`,
    a: `https://piyushtyagidev.hashnode.dev/unlocking-the-power-of-array-methods-a-comprehensive-guide-to-map-filter-and-reduce-in-javascript`,
  },
];

export const projects = [
  {
    id: 1,
    image1: `${ef1}`,
    image2: `${ef2}`,
    image3: `${ef3}`,
    description_heading: `ElixirFlicks: Your Personalized Path to Cinematic Bliss and Wonder`,
    description_para: (
      <>
        Discover <strong>"ElixirFlicks"</strong> - a captivating ReactJS project with
        <span style={{ color: "#0b9876", fontWeight: 'bold' }}> CSS and Firebase authentication.</span>
        Unleash the power of  <span style={{ color: "#0b9876", fontWeight: 'bold' }}>"Emotion Elixir"</span>, a groundbreaking feature that empowers users to filter movies and shows based on their mood, enhancing their content discovery experience. With optimized performance and a seamless user interface, "ElixirFlicks" offers an engaging and immersive journey into the world of entertainment. Unveil a new era of personalized cinematic bliss with this innovative application.
      </>
    ),
    live_site_link: `https://emowatch.netlify.app/`,
    live_site: "Live Site",
    github_image: `${github}`, 
    github_link: `https://github.com/Piyush-45/EmoWatch`,
  },
  {
    id: 1,
    image1: `${plateful1}`,
    image2: `${plateful2}`,
    image3: `${plateful3}`,
    description_heading: `Plateful: Elevate Your Culinary Journey `,
    description_para: (
      <>
        Plateful is a captivating frontend web development project, designed using <span style={{ color: "#0b9876", fontWeight: 'bold' }}> React JS and CSS 3</span>, that takes recipe management to new heights. With <span style={{ color: "#0b9876", fontWeight: 'bold' }}> Firebase integration</span>, users can create accounts, ensuring a secure experience, and save their cherished recipes. The app features an intuitive UI, complete with a smart search box and <span style={{ color: "#0b9876", fontWeight: 'bold' }}> voice-powered audio search</span>, making it a delightful and convenient cooking companion.
      </>
    ),
    live_site_link: `https://plateful.netlify.app/`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/Plateful`,
  },
  {
    id: 2,
    image1: `${ffcheck1}`,
    image2: `${ff2}`,
    image3: `${ff1}`,
    description_heading: `Filmfrenzy`,
    description_para: (
      <>
        FilmFrenzy is a video streaming app built with  <span style={{ color: "#0b9876", fontWeight: 'bold' }}> React JS and CSS 3  for the UI and Firebase</span> for the backend . In this application user can create their account and save their favorite shows, hence it also has <span style={{ color: "#0b9876", fontWeight: 'bold' }}> authentication.</span>
      </>
    ),
    live_site_link: `https://filmyfrenzy.netlify.app`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/film-frenzy-draft1`,
  },
  {
    id: 3,
    image1: `${layer_1}`,
    image2: `${layer_2}`,
    image3: `${layer_3}`,
    description_heading: `Layers`,
    description_para: (
      <>
        A frontend for an eCommerce website built with  <span style={{ color: "#0b9876", fontWeight: 'bold' }}>Html5, CSS3, Vanilla JS.</span> It is one of my personal projects, the goal was to build a site with no frameworks and libraries and to show my core Javascript skills.
      </>
    ),
    live_site_link: `https://layers-check.netlify.app`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/layerscheck1`,
  },
  {
    id: 4,
    image1: `${spacex1}`,
    image2: `${spacex2}`,
    image3: `${spacex3}`,
    description_heading: `Clone of SpaceX`,
    description_para: (
      <>
        A Clone website of SpaceX, built <span style={{ color: "#0b9876", fontWeight: 'bold' }}> with Html5, CSS3, Tailwind CSS.</span> It is one of my personal projects, the goal was to build a component-based website with HTML, CSS, without using any framework.
      </>
    ),
    live_site_link: `https://spacexclone1.netlify.app/index.html`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/SpaceX-clone`,
  },
  {
    id: 5,
    image1: `${hb1}`,
    image2: `${hb2}`,
    image3: `${hb1}`,
    description_heading: `HooBank`,
    description_para: (
      <>
        A Modern UI/UX website made with<span style={{ color: "#0b9876", fontWeight: 'bold' }}> React JS And Tailwind CSS</span>. The goal was to showcase my react skills like Multi-page, authorization, and some other advanced and interactive features are coming soon...
      </>
    ),
    live_site_link: `https://hoobankpayement.netlify.app/`,
    live_site: "Live Site",
    github_image: `${github}`,
    github_link: `https://github.com/Piyush-45/hoobank_payements`,
  },
];
// export const aboutme = [
//   {
//     heading: "About me",
//     aboutme_p1:
//       "Hello, I'm Piyush Tyagi, a self-taught developer and tech enthusiast based in [location]. With a passion for solving problems and a drive to learn, I've developed a strong foundation in frontend development and mastered several cutting-edge technologies.I decided to drop out of college because I wanted to pursue a more practical approach to learning that would equip me with real-life skills. Through hard work and determination, I have successfully developed a comprehensive skill set in frontend development, including proficiency in React, JavaScript, CSS, and HTML.",

//     aboutme_p2:
//       " My journey as a developer started when I realized that programming offers a powerful way to create innovative solutions and make an impact on the world. I am constantly looking to expand my knowledge and explore new technologies to create more efficient, user-friendly, and accessible solutions.",
//     aboutme_p3:
//       "With my passion for coding and problem-solving, I am committed to creating valuable products that meet the needs of clients and end-users alike. My goal is to help build and deliver high-quality web applications that provide real value to individuals and businesses.",
//   },
// ];
