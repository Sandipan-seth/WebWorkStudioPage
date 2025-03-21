import React from "react";

const Card = ({ color }) => {
  return (
    <div className={`w-1/2 h-1/2`} style={{ backgroundColor: color }}>
      card
    </div>
  );
};

export default Card;
