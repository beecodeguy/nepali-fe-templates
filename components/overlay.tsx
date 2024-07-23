import React from "react";

const BackgroundOverlay = () => {
  return (
    <div
      className="absolute"
      style={{
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: "rgba(37,41,88,0.3)",
      }}
    />
  );
};

export default BackgroundOverlay;
