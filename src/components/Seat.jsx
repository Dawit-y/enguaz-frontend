import React from "react";

const Seat = ({ id, onClick, className }) => {
  return (
    <button
      key={id}
      type="button"
      className={className}
      onClick={onClick}
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid gray",
      }}
    >
      {id}
    </button>
  );
};

export default Seat;
