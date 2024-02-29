import NavArea from "../Main/NavArea";
import ProjectCard from "../ProjectCards/ProjectCard";
import style from "./Home.module.css";

const Home = ({
  goToPreviousProjectHandler,
  currentProject,
  goToNextProjectHandler,
  pickProjectFromIndicatorHandler,
  isProjectChanged,
  resetIsProjectChangedState,
}) => {
  return (
    <>
      <NavArea></NavArea>

      <div className={style["project-heading"]} id="projects">
        PROJECTS
      </div>
      <ProjectCard
        currentProject={currentProject}
        goToNextProjectHandler={goToNextProjectHandler}
        goToPreviousProjectHandler={goToPreviousProjectHandler}
        pickProjectFromIndicatorHandler={pickProjectFromIndicatorHandler}
        isProjectChanged={isProjectChanged}
        resetIsProjectChangedState={resetIsProjectChangedState}
      ></ProjectCard>
    </>
  );
};

export default Home;
