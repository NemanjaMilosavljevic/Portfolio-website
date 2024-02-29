import Container from "../Main/Container";
import style from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CSSTransition from "react-transition-group/CSSTransition";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/data";
import { scrollToTop } from "../../util/util";

const ProjectCard = ({
  goToPreviousProjectHandler,
  currentProject,
  goToNextProjectHandler,
  pickProjectFromIndicatorHandler,
  isProjectChanged,
  resetIsProjectChangedState,
}) => {
  return (
    <div className={style["project-card-container"]}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ color: "#222" }}
        className={`${style["icon"]} ${style["icon-left"]}`}
        onClick={() => goToPreviousProjectHandler()}
      />

      {projectsData.map((card) => (
        <CSSTransition
          timeout={600}
          in={isProjectChanged}
          key={card.id}
          classNames={{
            enter: "",
            enterActive: `${style.animationEnter}`,
            exit: "",
            exitActive: `${style.animationExit}`,
            onExited: resetIsProjectChangedState(),
          }}
        >
          <Container
            className={`${style["card-project"]} ${
              currentProject !== card.id ? style["card-project-hidden"] : ""
            }`}
          >
            <div className={style["image-container"]}>
              <img
                src={card.image[0]}
                srcSet={`${card.image[0]}, ${card.image[1]} 2x, ${card.image[2]} 3x`}
                alt="card"
              />
              <div className={style["project-number"]}>{card.projectNo}</div>
            </div>
            <div className={style["text-container"]}>
              <h1>{card.title}</h1>
              <p>{card.desription}</p>
              <Link to={`/projects/${currentProject}`} onClick={scrollToTop}>
                <button>{card.buttonText}</button>
              </Link>
            </div>
          </Container>
        </CSSTransition>
      ))}

      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ color: "#222" }}
        className={`${style["icon"]} ${style["icon-right"]}`}
        onClick={() => goToNextProjectHandler()}
      />
      <span className={style.indicators}>
        {projectsData.map((_, i) => {
          return (
            <button
              key={projectsData[i].projectNo}
              id={projectsData[i].projectNo}
              onClick={() =>
                pickProjectFromIndicatorHandler(projectsData[i].id)
              }
              className={`${style.indicator} ${
                currentProject !== projectsData[i].id
                  ? style["indicator-inactive"]
                  : ""
              }`}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default ProjectCard;
