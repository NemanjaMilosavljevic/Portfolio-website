import Footer from "./components/Layout/Footer";
import MainWrapper from "./components/Layout/MainWrapper";
import AboutMe from "./components/pages/AboutMe";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import ProjectPage from "./components/pages/ProjectPage";
import { projectsData } from "./data/data";
import Home from "./components/pages/Home";
import AnimationText from "./components/Layout/AnimationText";

const App = () => {
  const [currentProject, setCurrentProject] = useState(projectsData[0].id);
  const [isProjectChanged, setIsProjectChanged] = useState(false);

  const goToPreviousProjectHandler = () => {
    setIsProjectChanged(true);
    setTimeout(() => {
      setCurrentProject((prevState) => {
        if (prevState === 1) {
          return 5;
        }
        return +prevState - 1;
      });
    }, [600]);
  };

  const goToNextProjectHandler = () => {
    setIsProjectChanged(true);
    setTimeout(() => {
      setCurrentProject((prevState) => {
        if (prevState === 5) {
          return 1;
        }
        return +prevState + 1;
      });
    }, [600]);
  };

  const pickProjectFromIndicatorHandler = (id) => {
    setIsProjectChanged(true);
    setTimeout(() => {
      setCurrentProject(+id);
    }, [600]);
  };

  const resetIsProjectChangedState = () => {
    setTimeout(() => {
      setIsProjectChanged(false);
    }, [600]);
  };

  return (
    <>
      <AnimationText />

      <MainWrapper>
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                currentProject={currentProject}
                goToNextProjectHandler={goToNextProjectHandler}
                goToPreviousProjectHandler={goToPreviousProjectHandler}
                pickProjectFromIndicatorHandler={
                  pickProjectFromIndicatorHandler
                }
                isProjectChanged={isProjectChanged}
                resetIsProjectChangedState={resetIsProjectChangedState}
              ></Home>
            }
          ></Route>
          <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
          <Route
            path="/projects/:projectId"
            element={
              <ProjectPage
                goToNextProjectHandler={goToNextProjectHandler}
                goToPreviousProjectHandler={goToPreviousProjectHandler}
              ></ProjectPage>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/home"></Navigate>}></Route>
        </Routes>
      </MainWrapper>

      <Footer />

      <AnimationText />
    </>
  );
};

export default App;
