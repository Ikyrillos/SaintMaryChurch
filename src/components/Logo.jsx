import React from "react";

function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          marginLeft: "0.4em",
        }}
      >
        Saint Mary's Church
      </span>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/saint-mary-church-1.appspot.com/o/church.png?alt=media&token=1713cd75-f65c-4142-9c0a-583004734014"
        alt="Saint Mary's Church"
        className="inline"
        width="45px"
        height="45px"
      />
    </div>
  );
}
export default Logo;
