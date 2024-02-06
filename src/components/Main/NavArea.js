import style from "./NavArea.module.css";
import Container from "./Container";
import { Link } from "react-router-dom";

const NavArea = () => {
  return (
    <div className={style["nav-area"]}>
      <div className={style["animated-container"]}>
        <span>ĐURĐINA MILOSAVLJEVIĆ</span>
      </div>

      <Container className={style["about-me"]}>
        <div className={style["image-container"]}>
          <img
            src="Images/personal-picture.png"
            srcSet="Images/personal-picture.png, Images/personal-picture@2x.png 2x, Images/personal-picture@3x.png 3x"
            alt="personal-img"
          />
        </div>
        <div className={style["text-container"]}>
          <p>
            Experienced and proactive Visual Design Specialist with
            architectural background and passion for creating good aesthetics.
          </p>
          <Link to="/about-me">
            <button className={style.button}>ABOUT ME</button>
          </Link>
        </div>
      </Container>

      <Link to="/about-me#services" className={style.link}>
        <Container className={style["services"]}>SERVICES</Container>
      </Link>

      <Link to="/about-me#contact" className={style.link}>
        <Container className={style["contact"]}>CONTACT</Container>
      </Link>
      <Container className={style["projects"]}>PROJ&#13;ECTS</Container>

      <Link to="/about-me#tools" className={style.link}>
        <Container className={style["tools"]}>TOOLS</Container>
      </Link>
    </div>
  );
};

export default NavArea;
