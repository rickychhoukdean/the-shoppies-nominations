import React from "react";

function Banner({ bannerText }) {
  return (
    <div className="banner" data-test="component-Banner">
      {bannerText}
    </div>
  );
}

export default Banner;
