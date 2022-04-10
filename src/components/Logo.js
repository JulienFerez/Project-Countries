import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balisee image sont accessibles depuis "public" */}
      <img src="./logo192.png" alt="logoreact" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
