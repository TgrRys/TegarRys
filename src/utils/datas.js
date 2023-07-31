// Stack Icons
import htmlIcon from "../../src/assets/icons/html.svg";
import cssIcon from "../../src/assets/icons/css.svg";
import jsIcon from "../../src/assets/icons/js.svg";
import bootstrapIcon from "../../src/assets/icons/bootstrap.svg";
import tailwindIcon from "../../src/assets/icons/tailwind.svg";
import reactIcon from "../../src/assets/icons/react.svg";
import nodejsIcon from "../../src/assets/icons/nodejs.svg";
import npmIcon from "../../src/assets/icons/npm.svg";
import figmaIcon from "../../src/assets/icons/figma.svg";
import gitIcon from "../../src/assets/icons/git.svg";
import githubIcon from "../../src/assets/icons/github.svg";
import vscodeIcon from "../../src/assets/icons/vscode.svg";
import vite from "../../src/assets/icons/vite.svg";
import php from "../../src/assets/icons/php.svg";

// Contact Icons
import instagramIcon from "../../src/assets/icons/instagram.svg";
import linkedinIcon from "../../src/assets/icons/linkedin.svg";
import whatsappIcon from "../../src/assets/icons/whatsapp.svg";

// Project Images
import bmi from "../../src/assets/images/bmi.png";
import mynature from "../../src/assets/images/mynature.png";
import todos from "../../src/assets/images/todos.png";
import agecalculator from "../../src/assets/images/react-calculator.png";
import weatherapp from "../../src/assets/images/react-weather-app.png";
import skilmovie from "../../src/assets/images/skilmovie.png";
import tmovie from "../../src/assets/images/tmovie.png";
import portov1 from "../../src/assets/images/personal-web-v1.png";

// Gif Images
import bmiGif from "../../src/assets/gif/bmi.gif"
import mynatureGif from "../../src/assets/gif/mynature.gif"
import todosGif from "../../src/assets/gif/todos.gif"
import agecalculatorGif from "../../src/assets/gif/age-calculator.gif"
import weatherappGif from "../../src/assets/gif/react-weatherapp.gif"
import skilmovieGif from "../../src/assets/gif/skilmovie.gif"
import tmovieGif from "../../src/assets/gif/react-movie.gif"
import portov1Gif from "../../src/assets/gif/personal-porto-v1.gif"


const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Vite: { name: "Vite", src: vite, level: "Build tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Figma: { name: "Figma", src: figmaIcon, level: "UIUX Design tool" },
};

const contacts = {
  Github: { name: "Github", src: githubIcon, contact: "@TgrRys", href: "https://github.com/TgrRys" },
  Instagram: { name: "Instagram", src: instagramIcon, contact: "@tgr_rys", href: "https://www.instagram.com/tgr_rys/" },
  Linkedin: { name: "Linkedin", src: linkedinIcon, contact: "@tegar-risqy-yulian-santoso", href: "https://www.linkedin.com/in/tegar-risqy-yulian-santoso/" },
  Whatsapp: { name: "Whatsapp", src: whatsappIcon, contact: "+62 895322728059", href: "https://wa.me/62895322728059" },
};


const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  JS: { name: "Javascript", src: jsIcon, level: "Intermediate" },
  PHP: { name: "PHP", src: php, level: "Beginner" },
  React: { name: "ReactJS", src: reactIcon, level: "Intermediate" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Beginner" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Beginner" },
};

const projects = [
  {
    id: 1,
    name: "BMI Calculator",
    desc: "My first project was created using HTML, CSS, and JavaScript. This website actually can be used to calculate your BMI.",
    image: bmi,
    web: "https://tegar-kalkulator-bmi.netlify.app/",
    repo: "https://github.com/TgrRys/TPA-2",
    stack: "HTML, CSS, JavaScript, Responsive Web Design",
    gif: bmiGif,
  },
  {
    id: 2,
    name: "MyNature",
    desc: "This website is a capstone website for the Skilvul Front End Web Development. This website is a website that provides information about nature crisis in Indonesia.",
    image: mynature,
    web: "https://mynaturefebe-12.netlify.app/",
    repo: "https://github.com/Tech-4-Impact-FE-12/FinalProject-FE12",
    stack: "Vite, React-JS, React-Router, Redux, Axios, Bootstrap, Responsive Web Design",
    gif: mynatureGif,
  },
  {
    id: 3,
    name: "Todos App",
    desc: "This website is a simple to-do app. This website is a website that can be used to create a list of tasks that you want to do.  I made this website to learn more about React JS and Redux.",
    image: todos,
    web: "https://tgrrys-todos.netlify.app/",
    repo: "https://github.com/TgrRys/TPA-5",
    stack: "Vite, React-JS, Redux, React-Icons, Sweetalert",
    gif: todosGif,
  },
  {
    id: 4,
    name: "Age Calculator",
    desc: "This website is a simple age calculator. This website is a website that can be used to calculate your age just for fun.",
    image: agecalculator,
    web: "https://tegar-react-age-calculator.netlify.app",
    repo: "https://github.com/TgrRys/react-age-calculator",
    stack: "Vite, React-JS, TailwindCSS",
    gif: agecalculatorGif,
  },
  {
    id: 5,
    name: "Weather App",
    desc: "The weather app is a website that can be used to find out about the condition of the weather in a city. I made this website to learn more about React JS and API. I also use the OpenWeatherMap API to get the weather data.",
    image: weatherapp,
    web: "",
    repo: "https://github.com/TgrRys/TWeather-app",
    stack: "Vite, React-JS, React-Icons, Axios",
    gif: weatherappGif,
  },
  {
    id: 6,
    name: "Skilmovie",
    desc: "Skilmovie is a website that can be used to find out information about movies. I made this website to learn more about JS and API. I also use the TMDB API to get the movie data.",
    image: skilmovie,
    web: "https://tegar-skilmovie.netlify.app",
    repo: "https://github.com/TgrRys/TPA-3",
    stack: "HTML, CSS, JavaScript, Responsive Web Design",
    gif: skilmovieGif,
  },
  {
    id: 7,
    name: "Portfolio-V1",
    desc: "My first personal portfolio using Bootstrap!! I made this website to learn more about Bootstrap an I designed it by combining different ideas from several sources.",
    image: portov1,
    web: "https://tegar-personal-web.netlify.app",
    repo: "https://github.com/TgrRys/TPA-1",
    stack: "HTML, Bootstrap",
    gif: portov1Gif,
  },
  {
    id: 8,
    name: "TMovie",
    desc: "Trying to make a website that can be used to find out information about movies, detail movies and can find out about actor. I made this website to learn more about React JS and API. I also use the TMDB API to get the movie data.",
    image: tmovie,
    web: "https://t-movie-github-fjh70hybn-tegarrizky237-gmailcom.vercel.app/",
    repo: "https://github.com/TgrRys/TMovie",
    stack: "Vite, React-JS, React-Router, React-Bootstrap, Bootstrap, React-Toastify",
    gif: tmovieGif,
  },
];

export { tools, stacks, projects, contacts };
