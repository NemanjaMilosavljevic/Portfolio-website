import style from "./AboutMe.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState({
    infoWebDesign: false,
    infoUXDesign: false,
    infoBranding: false,
  });

  const { hash } = useLocation();

  useEffect(() => {
    const element = document.getElementById(hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const toggleServiceInfo = (e) => {
    if (
      e.target.tagName === "P" ||
      e.target.className === style.inner ||
      e.target.className === style.outer
    ) {
      return;
    }

    if (
      e.target.firstChild.textContent === "Web Design" ||
      e.target.previousSibling?.textContent === "Web Design"
    ) {
      setIsVisible((prevState) => {
        return { ...prevState, infoWebDesign: !prevState.infoWebDesign };
      });
    } else if (
      e.target.firstChild.textContent === "UX/UI Design" ||
      e.target.previousSibling?.textContent === "UX/UI Design"
    ) {
      setIsVisible((prevState) => {
        return { ...prevState, infoUXDesign: !prevState.infoUXDesign };
      });
    } else {
      setIsVisible((prevState) => {
        return { ...prevState, infoBranding: !prevState.infoBranding };
      });
    }
  };

  return (
    <div className={style["wrapper"]}>
      <div className={style["name"]}>
        ARCHITECT. VISUAL DESIGNER. UX/UI DESIGNER.
      </div>

      <div className={style["hero"]}>
        <div className={style["hero-text"]}>
          <h2>Hello, I am Đina.</h2>
          <p>Architect by education, designer by passion.</p>
          <p>
            Organization and structure-lover, but authentic, proactive, and
            agile person, with a strong sense for achieving clients' wishes and
            goals, based on years of working directly with them.
          </p>
        </div>
        <div className={"hero-image"}>
          <img
            src="Images/first-picture@1x.png"
            srcSet="Images/first-picture@1x.png, Images/first-picture@2x.png 2x, Images/first-picture@3x.png 3x"
            alt="Personal-img"
          />
        </div>
      </div>

      <div className={style["about"]}>
        <div className={style["about-image"]}>
          <img
            src="Images/Second-image@1x.png"
            srcSet="Images/Second-image@1x.png, Images/Second-image@2x.png 2x, Images/Second-image@3x.png 3x"
            alt="Personal-img-2"
          />
        </div>
        <div className={style["about-text"]}>
          <p>
            Ten years ago, when I decided to study architecture, I wasn't
            completely exclusive. Sure architecture is great, and I love it, I
            had the luck to work in all of its fields, from planning large-scale
            public projects to the interior design of houses and apartments, to
            high-quality architectural visualization. But, I also love
            technology and design in general and really am curious about how it
            all works.
          </p>
          <p>
            So with every company, my way led me to IT and that's how I finally
            found what I've always wanted from my career. Working as a Graphic
            Design Specialist and a Design lead in my last firm led me to create
            user experiences within the Mobile and Web Applications and to see
            myself as a UX/UI Designer.
          </p>
          <p>
            I ended up finishing several courses for Web Design, UX/UI Design
            and still am mastering those skills, but now with a focus on 3d
            objects and animations.
          </p>
          <p>
            Therefore, from Architecture and Interior Design, through Graphic
            Design in IT industry, I ended up in Web and UX / UI design,
            completely spontaneously and somehow logically. Hmm, and that's
            where I would stay, actually!
          </p>
        </div>
      </div>

      <div className={style["services"]}>
        <h1 id="services">I can help you with</h1>

        <ul onClick={toggleServiceInfo}>
          <li>
            <div>Web Design</div>
            <span>+</span>
          </li>

          <div
            className={`${style["outer"]} ${
              isVisible.infoWebDesign ? style["show"] : ""
            }`}
          >
            <div className={style.inner}>
              <p>
                Designing beautiful Websites, Landing pages, Blogs, and
                E-commerce sites from scratch to final design.
              </p>
              <p>
                I also use Webflow on a basic level but am currently learning it
                for more advanced use (more complex content and animations).
                This portfolio website is the showcase of my use of Webflow. I
                did the design in Figma and developed it in Webflow.
              </p>
            </div>
          </div>

          <li>
            <div>UX/UI Design</div>
            <span>+</span>
          </li>
          <div
            className={`${style["outer"]} ${
              isVisible.infoUXDesign ? style["show"] : ""
            }`}
          >
            <div className={style.inner}>
              <p>
                User Experience (UX) and User Interface design done in Figma,
                including the creation of Wireframes, Prototypes, and Mockups.
              </p>
              <p>
                The starting point is User research in methods based on the
                case, then creating LoFi designs which follow HiFi design in the
                final stage.
              </p>
            </div>
          </div>

          <li>
            <div>Branding</div>
            <span>+</span>
          </li>
          <div
            className={`${style["outer"]} ${
              isVisible.infoBranding ? style["show"] : ""
            }`}
          >
            <div className={style.inner}>
              <p>
                Creating the Visual and Brand identity based on the client's
                wishes and goals. All in perfect balance and harmony with the
                brand policy.
              </p>
            </div>
          </div>
        </ul>
      </div>

      <div className={style["tools"]}>
        <h1 id="tools">The tools I use</h1>
        <table className={style["table"]}>
          <thead>
            <tr>
              <th>UX</th>
              <th>GRAPHIC</th>
              <th>ARCHITECTURAL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Figma</td>
              <td>Adobe Photoshop</td>
              <td>Autodesk AutoCad</td>
            </tr>

            <tr>
              <td>Webflow</td>
              <td>Adobe InDesign</td>
              <td>Autodesk 3ds Max</td>
            </tr>

            <tr>
              <td>Zeplin</td>
              <td>Adobe Illustrator</td>
              <td>Vray / Corona</td>
            </tr>

            <tr>
              <td>Miro</td>
              <td>Spline</td>
              <td>Lumion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={style["contact"]}>
        <h1 id="contact">Let's get in touch</h1>
        <div className={style["contact-info-container"]}>
          <div className={style["contact-info"]}>
            <div className={style["link"]}>
              <img src="Images/Call.svg" alt="Phone" />
              <span>38164/349-35-19+</span>
            </div>

            <div className={style["contact-info"]}>
              <Link
                to="mailto:djurdjinasladakovic@gmail.com"
                target="blank"
                className={style["link"]}
              >
                <img
                  src="/Images/Mail-black.svg"
                  alt="email-logo"
                  title="Go to email"
                />
                <span>djurdjinasladakovic@gmail.com</span>
              </Link>
            </div>

            <div className={style["contact-info"]}>
              <Link
                to="https://www.behance.net/libeladesign"
                target="blank"
                className={style["link"]}
              >
                <img
                  src="/Images/behance-black.svg"
                  alt="behance-logo"
                  title="Go to behance"
                />
                <span>behance.net/libeladesign</span>
              </Link>
            </div>

            <div className={style["contact-info"]}>
              <Link
                to="https://www.linkedin.com/in/%C4%91ur%C4%91inamilosavljevi%C4%87/"
                target="blank"
                className={style["link"]}
              >
                <img
                  src="/Images/linkedin-black.svg"
                  alt="linkedin-logo"
                  title="Go to linkedin"
                />
                <span>linkedin.com/đurđinamilosavljević</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
