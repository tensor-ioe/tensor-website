import React from "react";
import "./Error404.css";

import Navbar from "../../components/Navbar/Navbar";

export default function ApplicationFailled() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className=" flex flex-col items-center justify-center h-3/4">
        <h1 className=" text-gray-950 font-semibold text-5xl">
          Application Submition Failled :-(
        </h1>
        <h3 className=" text-gray-800 font-medium text-xl mt-10">
          Please try again..
        </h3>
      </div>
    </div>
  );
}
