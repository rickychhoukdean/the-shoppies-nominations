import React from "react";

function Banner({ banner }) {
  return (
    <div className="banner" data-test="component-Banner">
      {banner}
    </div>
  );
}

export default Banner;
