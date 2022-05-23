import React from "react";
import firstIMG from "./image/one.jpg";
const Image = () => {
  console.log(firstIMG);
  return (
    <div>
      <img src={firstIMG} alt="img" />
    </div>
  );
};

export default Image;
