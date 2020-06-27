import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="text-info text-center mt-5">
      <h3>{name}, your current entry count is ...</h3>
      <h1 className="display-4">{entries}</h1>
    </div>
  );
};

export default Rank;
