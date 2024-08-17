import React from "react";

const ResultCard = ({ resultText }: { resultText: string }) => {
  return (
    <div className="border shadow-sm rounded-lg bg-indigo-100 text-blue-skin-primary text-xl p-3">
      {resultText}
    </div>
  );
};

export default ResultCard;
