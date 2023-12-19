import React from "react";
import yoga_bg from "../assets/yoga_bg.jpg";

const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${yoga_bg})`,
          height: "500px",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      ></div>
    </>
  );
};

export default Header;
