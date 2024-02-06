import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = ({ scrollToTop }) => {
  return (
    <div className={style.footer}>
      <ul className={style["list-link"]}>
        <li>
          <Link to="/home" className={style.link} onClick={() => scrollToTop()}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/about-me"
            className={style.link}
            onClick={() => scrollToTop()}
          >
            ĐINA'S STORY
          </Link>
        </li>
        <li>
          <Link to="/home#projects" className={style.link}>
            PROJECTS
          </Link>
        </li>
      </ul>

      <p>
        In the daily process of improving and learning new techniques, with a
        constant desire for advancement, growth, and a better quality of life.
      </p>

      <div className={style["icon-list"]}>
        <Link to="mailto:djurdjinasladakovic@gmail.com" target="blank">
          <img src="/Images/Mail.svg" alt="email-logo" title="Go to email" />
        </Link>
        <Link to="https://www.instagram.com/libeladesign/" target="blank">
          <img
            src="/Images/instagram-logo.svg"
            alt="instagram-logo"
            title="Go to instagram"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/%C4%91ur%C4%91inamilosavljevi%C4%87/"
          target="blank"
        >
          <img
            src="/Images/linkedin.svg"
            alt="linkedin-logo"
            title="Go to linkedin"
          />
        </Link>
        <Link to="https://www.behance.net/libeladesign" target="blank">
          <img
            src="/Images/behance.svg"
            alt="behance-logo"
            title="Go to behance"
          />
        </Link>
      </div>

      <p>Đurđina Milosavljević</p>
    </div>
  );
};

export default Footer;
