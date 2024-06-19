import React from "react";
import "./Error404.css";

import Navbar from "../../components/Navbar/Navbar";

export default function Error404() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className=" flex flex-col items-center justify-center h-3/4">
        <h1 className=" text-gray-950 font-semibold text-5xl">
          404 : Page not found
        </h1>
      </div>
    </div>
  );
}
