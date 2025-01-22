import React, { useState } from "react";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const [leftWhitePosition, setLeftWhitePosition] = useState("left");
  const [rightWhitePosition, setRightWhitePosition] = useState("right");

  const handleToggle = () => {
    setLeftWhitePosition(leftWhitePosition === "left" ? "right" : "left");
    setRightWhitePosition(rightWhitePosition === "right" ? "left" : "right");
  };

  return (
    <div className="language-selector">
      <div className={`pill-left ${leftWhitePosition}`} onClick={handleToggle}>
        <div className="white-background"></div>
        <div className="text left-text">ខ្មែរ</div>
        <div className="text right-text">អង់គ្លេស</div>
      </div>
      <div className="arrows" onClick={handleToggle}>
        ⟷
      </div>
      <div className={`pill-right ${rightWhitePosition}`} onClick={handleToggle}>
        <div className="white-background"></div>
        <div className="text left-text">ខ្មែរ</div>
        <div className="text right-text">អង់គ្លេស</div>
      </div>
    </div>
  );
};

export default LanguageSelector;
