import React from "react";

const RolesCard = ({ title, description, responsibilities, advantages, requirements, note = "" }) => {
  //   console.log(responsibilities);

  const printArr = (Array) => {
    console.log(Array)

    return Array.map((element, index) => <li className=" ml-8 text-lg font-medium text-gray-950" key={index}>{element}</li>);
  }
  return (
    <>
      <div className="flex flex-col m-3">
        <h1 className=" font-bold text-4xl text-blue-700 my-4 text-center underline">{title}</h1>
        <p className=" font-normal text-base text-gray-950 my-3">{description}</p>
        <h2 className=" font-semibold text-2xl text-blue-500 my-4">
          Major Responsibilities
        </h2>
        {printArr(responsibilities)}
        <h2 className=" font-semibold text-2xl text-blue-500 my-4">Advantages</h2>
        {printArr(advantages)}
        <h2 className=" font-semibold text-2xl text-blue-500 my-4">Requirements</h2>
        {printArr(requirements)}
        <p className="font-bold text-base text-gray-950 my-3">{note}</p>
      </div>
    </>
  );
};

export default RolesCard;
