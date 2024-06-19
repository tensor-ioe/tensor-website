import React from "react";
import "./Error404.css";

import Navbar from "../../components/Navbar/Navbar";

export default function ApplicationSuccess() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className=" flex flex-col items-center justify-center h-3/4">
        <h1 className=" text-gray-950 font-semibold text-5xl">
          Application Submitted Successfully !!
        </h1>
        <h3 className=" text-gray-800 font-medium text-xl mt-10">
          Note : Shortlisted candidates will be contacted via email
        </h3>
      </div>
    </div>
  );
}
