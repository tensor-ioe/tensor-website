import axios from "axios";
import { React, useState } from "react";

const ApplyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [feedbacks, setFeedbacks] = useState("");
  const [positions, setPositions] = useState(["General Member"]);

  const handlePositions = (e) => {
    const { name, checked } = e.target;
    setPositions((prevPositions) => {
      if (checked) {
        return [...prevPositions, name];
      } else {
        return prevPositions.filter((position) => position != name);
      }
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const appliedPositions = positions.toString();
    const data = {
      Name: name,
      Email: email,
      Roll: rollNo,
      Positions: appliedPositions,
      Question1: question1,
      Question2: question2,
      Question3: question3,
      Feedbacks: feedbacks,
    };
    axios.post("api/link/to/google/sheet", data).then((Response) => {
      console.log(Response);
    });
    // console.log(data);
  };
  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmitForm}
        className=" md:w-3/5 lg:w-5/12 self-center "
      >
        <div className="mt-4 mb-4 flex flex-col md:mb-8 lg:mb-10">
          <label
            className=" mb-2 md:mb-4 text-center font-bold"
            htmlFor="title"
          >
            Personal Details
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=" w-full py-1 my-2 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-full py-1 my-2 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Campus Roll No"
            value={rollNo}
            onChange={(e) => {
              setRollNo(e.target.value);
            }}
            className=" w-full py-1 my-2 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
            required
          />
        </div>
        <div className="mt-3 mb-4 flex flex-col">
          <label
            className=" mb-2 text-center font-bold md:mb-4"
            htmlFor="title"
          >
            Roles and Skills
          </label>
          <label
            htmlFor="intrestedRoles"
            className=" mt-1 mb-2 text-left font-medium"
          >
            Which role are you intrested in ? (Max 2)
          </label>
          <span className=" flex justify-center my-1 self-start">
            <input
              className=" w-5 h-5"
              type="checkbox"
              name="Research Advocate"
              onChange={handlePositions}
            />
            <label className=" ml-1" htmlFor="checkboxLabel">
              Research Advocate
            </label>
          </span>
          <span className=" flex justify-center my-1 self-start">
            <input
              className=" w-5 h-5"
              type="checkbox"
              name="Web Developer"
              onChange={handlePositions}
            />
            <label className=" ml-1" htmlFor="checkboxLabel">
              Web Developer
            </label>
          </span>
          <span className=" flex justify-center my-1 self-start">
            <input
              className=" w-5 h-5"
              type="checkbox"
              name="Social Media Manager"
              onChange={handlePositions}
            />
            <label className=" ml-1" htmlFor="checkboxLabel">
              Social media Manager
            </label>
          </span>
          <span className=" flex justify-center my-1 self-start">
            <input
              className=" w-5 h-5"
              type="checkbox"
              name="Graphics Designer"
              onChange={handlePositions}
            />
            <label className=" ml-1" htmlFor="checkboxLabel">
              Graphics Designer
            </label>
          </span>
          <span className=" flex justify-center my-1 self-start">
            <input
              className=" w-5 h-5"
              type="checkbox"
              name="Event Manager"
              onChange={handlePositions}
            />
            <label className=" ml-1" htmlFor="checkboxLabel">
              Event Manager
            </label>
          </span>
          <span className=" flex justify-center my-1 self-start">
            <input
              className=" w-5 h-5"
              type="checkbox"
              disabled
              checked
              name="General Member"
              onChange={handlePositions}
            />
            <label className=" ml-1" htmlFor="checkboxLabel">
              General Member
            </label>
          </span>
          <label
            htmlFor="question1"
            className=" my-2 md:mt-4 text-left font-medium"
          >
            Any specefic skill set that can be utilized in above mentioned
            domains ?
          </label>
          <textarea
            name="answer2"
            id="answer2"
            value={question1}
            onChange={(e) => {
              setQuestion1(e.target.value);
            }}
            className=" w-full mt-1 h-28 md:h-32 lg:h-48 py-1 my-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mt-4 mb-4 flex flex-col">
          <label
            className=" mb-2 md:mb-4 md:mt-4 text-center font-bold"
            htmlFor="personalDetails"
          >
            Personal Expression
          </label>
          <label htmlFor="question2" className=" text-left mt-1  font-medium">
            Why do you want to be part of this community ?
          </label>
          <textarea
            name="answer2"
            id="answer2"
            value={question2}
            onChange={(e) => {
              setQuestion2(e.target.value);
            }}
            className=" w-full mt-2 mb-4 h-28 md:h-32 lg:h-48 py-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
            required
          ></textarea>

          <label
            htmlFor="question1"
            className=" text-left mt-1 md:mt-4 font-medium"
          >
            How do you plan to contributr to the community as part of the above
            mentioned domain ?
          </label>
          <textarea
            name="answer2"
            id="answer2"
            value={question3}
            onChange={(e) => {
              setQuestion3(e.target.value);
            }}
            className=" w-full h-28 md:h-32 lg:h-48 mt-2 mb-4 py-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
            required
          ></textarea>
          <label
            htmlFor="feedback"
            className=" text-left mt-1 md:mt-4 font-medium"
          >
            Any query or feedbacks ? (optional)
          </label>
          <textarea
            name="answer2"
            id="answer2"
            value={feedbacks}
            onChange={(e) => {
              setFeedbacks(e.target.value);
            }}
            className=" w-full h-28 md:h-32 lg:h-48 mt-2 mb-4 py-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="m-2 px-4 md:px-10 py-2 rounded-md font-semibold text-white bg-sky-500 hover:bg-sky-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ApplyForm;
