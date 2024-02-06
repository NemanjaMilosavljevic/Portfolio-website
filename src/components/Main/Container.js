import style from "./Container.module.css";

const Container = ({ container, children, className }) => {
  let classes = `${style.container} ${className}`;

  return (
    <div className={classes} {...container}>
      {children}
    </div>
  );
};

export default Container;
