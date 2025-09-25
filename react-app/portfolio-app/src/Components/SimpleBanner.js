import React, { useEffect, useState } from "react";

import "../SCSS/SimpleBanners.scss";

const SimpleBanner = (props) => {
  const [imgHover, setimgHover] = useState(false);
  const [leftActive, setleftActive] = useState(false);

  return (
    <div className="simple-banner-container">
      {console.log(props.image)}
      <img src={props.image}></img>
    </div>
  );
};

export default SimpleBanner;
