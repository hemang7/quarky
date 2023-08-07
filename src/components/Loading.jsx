import React from "react";
import molecule from "../assets/molecule.gif";
import giphy from "../assets/giphy.gif"

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={giphy} alt="Molecule" className="w-32 h-auto" />
    </div>
  );
}

export default Loading;
