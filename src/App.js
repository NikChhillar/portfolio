import { useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import About from "./Components/Sections/About";
import Contact from "./Components/Sections/Contact";
import Experience from "./Components/Sections/Experience";
import Portfolios from "./Components/Sections/Portfolios";
import Services from "./Components/Sections/Services";
import { useTheme } from "./context/themeContext";

function App() {
  //
  const theme = useTheme();
  console.log(theme);

  //
  const [toggle, setToggle] = useState(true);

  return (
    <AppStyled theme={theme}>
      <Navigation toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <main>
        <About />
        <Services />
        <Experience />
        <Portfolios />
        <Contact />
      </main>
      <footer>
        <div className="links">
          <a href="https://github.com/NikChhillar" target="blank">
            <i className=" fa-2x fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-chhillar2907/"
            target="blank"
          >
            <i className=" fa-2x fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/NikhilChhillar8" target="blank">
            <i className=" fa-2x fa-brands fa-twitter"></i>
          </a>
        </div>
        <p>
          Copywright &copy; 2023{" "}
          <a target={"blank"} href="https://github.com/NikChhillar">
            NikChhillar...
          </a>
          ~ All rights reserved.....
        </p>
      </footer>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorWhite};
  position: relative;
  p,
  a,
  li {
    color: ${(props) => props.theme.colorGrey1};
  }
  p {
    line-height: 1.9rem;
  }
  footer {
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBg2};
    .links {
      margin-top: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      i {
        color: ${(props) => props.theme.colorGrey1};
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.colorGreen};
        }
      }
    }
    p {
      a {
        color: ${(props) => props.theme.colorPrimary};
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.colorGreen};
        }
      }
    }
  }
`;

export default App;
