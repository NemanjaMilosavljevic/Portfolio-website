import style from "./MainWrapper.module.css";

const MainWrapper = ({ children }) => {
  return <div className={style.main}>{children}</div>;
};

export default MainWrapper;
