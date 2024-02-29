import React from "react";
import style from "./AnimationText.module.css";

const AnimationText = () => {
  return (
    <div className={style["animated-container"]}>
      <div className={style["span-container"]}>
        <span>
          VISUAL DESIGN SPECIALIST | UX/UI DESIGNER VISUAL DESIGN SPECIALIST |
          UX/UI DESIGNER
        </span>
      </div>
    </div>
  );
};

export default AnimationText;
