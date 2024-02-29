import style from "./ProjectPage.module.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { projectsPages } from "../../data/data";
import { scrollToTop } from "../../util/util";

const ProjectPage = ({
  goToNextProjectHandler,
  goToPreviousProjectHandler,
}) => {
  const params = useParams();

  let i = params.projectId - 1;

  return (
    <div className={style.grid}>
      <div className={style["heading"]}>
        <h1>{projectsPages[i].heading}</h1>
      </div>

      <div className={style["text-heading"]} style={{ whiteSpace: "pre-line" }}>
        <p>{projectsPages[i].textHeading}</p>
      </div>

      <video
        className={`${i === 0 ? style.hidden : style.video}`}
        src={[projectsPages[i].video]}
        controls
      ></video>

      <div className={style["side-1"]}></div>
      <div className={style["side-2"]}></div>

      <div className={style["image-1"]}>
        <img
          src={projectsPages[i].firstImage}
          srcSet={`${projectsPages[i].firstImage[0]}, ${projectsPages[i].firstImage[1]} 2x, ${projectsPages[i].firstImage[2]} 3x`}
          alt="Img-1"
        />
      </div>

      <div className={style["description-1"]}>
        <h1>{projectsPages[i].firstHeading}</h1>
        <p style={{ whiteSpace: "pre-line" }}>
          {projectsPages[i].firstDescription}
        </p>
      </div>

      <div className={style["image-2"]}>
        <img
          src={projectsPages[i].secondImage}
          srcSet={`${projectsPages[i].secondImage[0]}, ${projectsPages[i].secondImage[1]} 2x, ${projectsPages[i].secondImage[2]} 3x`}
          alt="Img-2"
        />
      </div>

      <div className={style["description-2"]}>
        <h1>{projectsPages[i].secondHeading}</h1>
        <p style={{ whiteSpace: "pre-line" }}>
          {projectsPages[i].secondDescription}
        </p>
      </div>

      <div className={style["image-3"]}>
        <img
          src={projectsPages[i].thirdImage[0]}
          srcSet={`${projectsPages[i].thirdImage[0]}, ${projectsPages[i].thirdImage[1]} 2x, ${projectsPages[i].thirdImage[2]} 3x`}
          alt="Img-3"
        />
      </div>

      <div className={style["description-3"]}>
        <h1>{projectsPages[i].thirdHeading}</h1>
        <p style={{ whiteSpace: "pre-line" }}>
          {projectsPages[i].thirdDescription}
        </p>
      </div>

      <div
        className={`${
          Object.keys(projectsPages[i]).length > 12
            ? style["additional-content"]
            : style["hidden"]
        }`}
      >
        <img
          src={projectsPages[i].forthImage}
          srcSet={`${
            i === 2
              ? `${projectsPages[i].forthImage[0]}, ${projectsPages[i].forthImage[1]} 2x, ${projectsPages[i].forthImage[2]} 3x`
              : ""
          }`}
          alt="Img-4"
          className={`${i === 2 ? "" : style.hidden}`}
        />
      </div>
      <div className={style["project-navigation-left"]}>
        <Link
          to={`/projects/${
            +params.projectId === 1 ? 5 : +params.projectId - 1
          }`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: "#c78437" }}
            className={`${style["icon"]} ${style["icon-left"]}`}
            onClick={() => goToPreviousProjectHandler()}
          />
        </Link>
        <span>Go to previous project</span>
      </div>
      <div className={style["project-navigation-right"]}>
        <span>Go to next project</span>
        <Link
          to={`/projects/${
            +params.projectId === 5 ? 1 : +params.projectId + 1
          }`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "#c78437" }}
            className={`${style["icon"]} ${style["icon-right"]}`}
            onClick={() => goToNextProjectHandler()}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
