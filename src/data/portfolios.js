import uuid from "react-uuid";
import { eye, git } from "../utils/Icons";
import react1 from "../img/react1.png";
import react2 from "../img/react2.png";
import react3 from "../img/react3.png";
import expense from "../img/expense.png";
import blog from "../img/blog.png";
import js1 from "../img/js1.png";
import js2 from "../img/js2.png";
import file from "../img/file.png";

export const portfolios = [
  {
    id: uuid(),
    category: "React Projects",
    title: "React portfolio website",
    image: react1,
    link1: "https://github.com/NikChhillar/portfolio",
    link2: "https://github.com/NikChhillar/portfolio",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN Projects",
    title: "Blog Application",
    image: blog,
    link1: "https://github.com/NikChhillar/mern-blog-project",
    link2: "https://github.com/NikChhillar/mern-blog-project",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN Projects",
    title: "Expense Tracker",
    image: expense,
    link1: "https://github.com/NikChhillar/mern-expense-tracker",
    link2: "https://github.com/NikChhillar/mern-expense-tracker",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN Projects",
    title: "File sharing project",
    image: file,
    link1: "https://github.com/NikChhillar/mern-file-sharing",
    link2: "https://github.com/NikChhillar/mern-file-sharing",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "JavaScript Projects",
    title: "Word of Wisdom",
    image: js1,
    link1: "https://github.com/NikChhillar/Words-of-Wisdom",
    link2: "https://nikchhillar.github.io/Words-of-Wisdom/",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "React Projects",
    title: "Anime website",
    image: react2,
    link1: "https://github.com/NikChhillar/anifluid",
    link2: "https://anifluid-l8eztlk3j-nikchhillar.vercel.app/",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "React Projects",
    title: "Giphy website",
    image: react3,
    link1: "https://github.com/NikChhillar/react-gifs-project",
    link2: "https://giphy-sable.vercel.app",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "JavaScript Projects",
    title: "Notes App",
    image: js2,
    link1: "https://github.com/NikChhillar/Notes-WebApp",
    link2: "https://nikchhillar.github.io/Notes-WebApp/",
    icon1: git,
    icon2: eye,
  },

];
