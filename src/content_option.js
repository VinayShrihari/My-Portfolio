import foodie from './assets/images/foodie.png';
import news from './assets/images/news.png';
import pharmacy from './assets/images/pharmacy.png'
const logotext = "Vinay Shrihari";
const meta = {
    title: "Vinay Shrihari",
    description: "I’m Vinay shrihari frontend enthusiast _ Full stack devloper,currently working in Berlin",
};ea

const introdata = {
    title: "I am Vinay",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I a frontend enthusiast",
    },
    description: "I love coding and specialize in building interactive and responsive front-end websites using modern web technologies. My focus is on creating seamless user experiences with clean, efficient code",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About Myself",
    aboutme: "👋 Hey, I’m Vinay! I love coding and crafting smooth, responsive websites. With React and Tailwind, I bring ideas to life on the web, and I’m constantly learning new tools to become a full-stack developer.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I provide professional UI/UX design services that create visually appealing interfaces and seamless user experiences, making your digital product both attractive and easy to use.",
    },
    {
        title: "Web applications ",
        description: "I build fast, scalable, and interactive web applications using React.js, ensuring clean code, reusable components, and seamless user experiences.",
    },
    {
        title: "Rest api",
        description: "I develop secure and efficient REST APIs that enable smooth communication between applications, ensuring reliability, scalability, and seamless integration.",
    },
]

const dataportfolio = [{
        img: foodie,
        description: "Tech Stack: HTML, CSS, JavaScript, React, Tailwind CSS (customize as needed)",
        link: "https://reastraunt-web-template.vercel.app/",
    },
    {
        img: news,
        description: "Tech Stack: React, News API, Axios, Tailwind CSS",
        link: "https://vinays-news.vercel.app/",
    },
    {
        img: pharmacy,
        description: "Tech Stack: React, Node.js, Express, MongoDB",
        link: "https://pharmacy-management-delta.vercel.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "vinaykumarmk89vinu@gmail.com",
    YOUR_FONE: "8660336287",
    description: "Iam a  a frontend developer specializing in React and Tailwind CSS, skilled at crafting responsive, component-driven interfaces. With expertise in REST API integrations, you blend sleek design and functionality to build engaging user experiences, focusing on modularity and performance for scalable applications.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/VinayShrihari",
    twitter: "https://x.com/vinayshrihari?t=hqXznVt5j-iAkl8YMhFCbw&s=08",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};