// Stack Icons
import htmlIcon from "../../src/assets/icons/html.svg";
import cssIcon from "../../src/assets/icons/css.svg";
import jsIcon from "../../src/assets/icons/js.svg";
import phpIcon from "../../src/assets/icons/php.svg";
import javaIcon from "../../src/assets/icons/java.svg";
import pythonIcon from "../../src/assets/icons/python.svg";
import sassIcon from "../../src/assets/icons/sass.svg";
import bootstrapIcon from "../../src/assets/icons/bootstrap.svg";
import tailwindIcon from "../../src/assets/icons/tailwind.svg";
import reactIcon from "../../src/assets/icons/react.svg";
import nextjsIcon from "../../src/assets/icons/nextjs.svg";
import threejsIcon from "../../src/assets/icons/threejs.svg";
import laravelIcon from "../../src/assets/icons/laravel.svg";
import nodejsIcon from "../../src/assets/icons/nodejs.svg";
import npmIcon from "../../src/assets/icons/npm.svg";
import figmaIcon from "../../src/assets/icons/figma.svg";
import gitIcon from "../../src/assets/icons/git.svg";
import githubIcon from "../../src/assets/icons/github.svg";
import mysqlIcon from "../../src/assets/icons/mysql.svg";
import vscodeIcon from "../../src/assets/icons/vscode.svg";
import vite from "../../src/assets/icons/vite.svg";
import webpackIcon from "../../src/assets/icons/webpack.svg";

// Project Images
import mulih from "../../src/assets/images/mulih.webp";
import travel from "../../src/assets/images/travel.webp";
import bookshelf from "../../src/assets/images/bookshelf.webp";
import notes from "../../src/assets/images/notes.webp";
// import treede from "../../src/assets/images/treede.webp";
import abinawa from "../../src/assets/images/abinawa.webp";
import inpoums from "../../src/assets/images/inpoums.webp";
import portfolio_v1 from "../../src/assets/images/portfolio-v1.webp";
import bertumbuh from "../../src/assets/images/bertumbuh.webp";
import coffe_bean from "../../src/assets/images/coffe-bean.webp";
import dapbunda from "../../src/assets/images/dapbunda.webp";

// Gif Images
import dapbundaGif from "../../src/assets/gif/dapbunda.gif";
import coffebeanGif from "../../src/assets/gif/coffe-bean.gif";
import portfolioGif from "../../src/assets/gif/portfolio.gif";
import notesGif from "../../src/assets/gif/notes.gif";
import abinawaGif from "../../src/assets/gif/abinawa.gif";
import bookshelfGif from "../../src/assets/gif/bookshelf.gif";

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Vite: { name: "Vite", src: vite, level: "Build tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Figma: { name: "Figma", src: figmaIcon, level: "UIUX Design tool" },
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  JS: { name: "Javascript", src: jsIcon, level: "Intermediate" },
  React: { name: "ReactJS", src: reactIcon, level: "Intermediate" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Beginner" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Beginner" },
};

const projects = [
  {
    id: 1,
    name: "BMI Calculator",
    desc: "My first project was created using HTML, CSS, and JavaScript. This website actually can be used to calculate your BMI, but I made it just for fun and to learn more about DOM manipulation.",
    image: mulih,
    web: "https://tegar-kalkulator-bmi.netlify.app/",
    repo: "https://github.com/TgrRys/TPA-2",
    stack: "HTML, CSS, JavaScript, Responsive Web Design",
    gif: "",
  },
  {
    id: 2,
    name: "Skill Movie.",
    desc: "This website is a movie fetch API TMDb. I made this website to learn more about javascript and API.",
    image: travel,
    web: "https://tegar-skilmovie.netlify.app/",
    repo: "https://github.com/TgrRys/TPA-3",
    stack: "HTML, CSS, Javascript, Bootstrap, Responsive Web Design",
    gif: "",
  },
  {
    id: 3,
    name: "Todos App",
    desc: "This website is a simple todo app. I made this website to learn more about React JS and Redux.",
    image: bookshelf,
    web: "https://tgrrys-todos.netlify.app/",
    repo: "https://github.com/TgrRys/TPA-5",
    stack: "Vite, React JS, Redux, Responsive Web Design",
    gif: bookshelfGif,
  },
  {
    id: 4,
    name: "Abinawa",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: abinawa,
    web: "http://abinawa.vercel.app",
    repo: "https://github.com/ulinnajaaldi/abinawa",
    stack: "Vite, React, React-spline, React-router, TailwindCSS",
    gif: abinawaGif,
  },
  {
    id: 5,
    name: "Inpo UMS",
    desc: "The purpose of this platform is to provide students with a medium to share information about the latest events or news happening in the UMS community.",
    image: inpoums,
    web: "",
    repo: "https://github.com/ulinnajaaldi/laravel-react-inpo-ums",
    stack: "Laravel, Laravel Breeze, React, React-icons, TailwindCSS, DaisyUI",
    gif: "",
  },
  {
    id: 6,
    name: "Notes",
    desc: "Welcome to Notes app! With this app, you can create, edit, delete and organize your notes. You can also sign up and log in to access your notes. This app I made for complete the Dicoding React Fundamental course.",
    image: notes,
    web: "https://notes-app-api-db-dicoding.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Notes",
    stack: "React, React-Icons, React-Router, Rest API, TailwindCSS, DaisyUI",
    gif: notesGif,
  },
  {
    id: 7,
    name: "Portfolio",
    desc: "My first personal portfolio!! I designed it by combining different ideas from various sources. It also has a secret game that you can play on your desktop. Can you find it?",
    image: portfolio_v1,
    web: "https://ulinnaja-aldi.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/portofolio",
    stack: "NextJS, TailwindCSS, ThreeJS, React-spline",
    gif: portfolioGif,
  },
  {
    id: 8,
    name: "Bertumbuh (Slice)",
    desc: "Trying to slice from Figma correctly to create a responsive website, and actually, it is already very good for being responsive (can be checked through inspect), but sometimes on certain screens, the margin is not read properly.",
    image: bertumbuh,
    web: "https://bertumbuh.vercel.app/",
    repo: "",
    stack: "React, React-Icons, React-Router, TailwindCSS",
    gif: "",
  },
  {
    id: 9,
    name: "Coffe Bean",
    desc: "Interactive website featuring a 3D model that can be rendered online. I wanted to apply the creative idea I had, even if it was just from a picture ✨, I hope you enjoy the enjoyable experience on the website!",
    image: coffe_bean,
    web: "https://coffee-bean-3d.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/coffee-bean",
    stack: "Vite, React, React-Icons, TailwindCSS, Spline, Framer Motion",
    gif: coffebeanGif,
  },
  {
    id: 10,
    name: "DapBunda Meal",
    desc: "This website provides information about various meals and how to cook them 🍴, using the API from TheMealDB. I created this website to complete the Dicoding Front End Fundamental course.",
    image: dapbunda,
    web: "https://dapbunda.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/dicoding-dapbunda-fe-fundamental",
    stack: "Webpack, Axios, TailwindCSS, DaisyUI, AOS",
    gif: dapbundaGif,
  },
];

export { tools, stacks, projects };
