import React from "react";
import "./Apply.css";

import Navbar from "../../components/Navbar/Navbar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

export default function Apply() {
  const applicationClosed = false;

  return (
    <div className="Apply">
      <Navbar />
      <section className="Apply-section">
        {/* <SectionTitle title={"Apply for a role"} /> */}

        <div className="Apply-content">
          {applicationClosed ? (
            <div className="Apply-closed">
              <p className="Apply-closed-icon">:(</p>
              <p className="Apply-closed-text">
                Application for this year has been closed
              </p>
            </div>
          ) : (
            <div className="Apply-form p-2">
              <div className="mt-4 mb-4 flex flex-col">
                <label
                  className=" mb-2 text-center font-bold"
                  htmlFor="personalDetails"
                >
                  Personal Details
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className=" w-full py-1 my-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className=" w-full py-1 my-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Campus Roll No"
                  className=" w-full py-1 my-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
                />
              </div>
              <div className="mt-3 mb-4 flex flex-col">
                <label
                  className=" mb-2 text-center font-bold"
                  htmlFor="personalDetails"
                >
                  Roles and Skills
                </label>
                <label
                  htmlFor="question1"
                  className=" mt-1 mb-2 text-left font-medium"
                >
                  Which role are you intrested in ? (Max 2)
                </label>
                <span className=" flex justify-center my-1 self-start">
                  <input className=" w-5 h-5" type="checkbox" />
                  <label className=" ml-1" htmlFor="checkboxLabel">
                    Research Advocate
                  </label>
                </span>
                <span className=" flex justify-center my-1 self-start">
                  <input className=" w-5 h-5" type="checkbox" />
                  <label className=" ml-1" htmlFor="checkboxLabel">
                    Web Developer
                  </label>
                </span>
                <span className=" flex justify-center my-1 self-start">
                  <input className=" w-5 h-5" type="checkbox" />
                  <label className=" ml-1" htmlFor="checkboxLabel">
                    Social media Manager
                  </label>
                </span>
                <span className=" flex justify-center my-1 self-start">
                  <input className=" w-5 h-5" type="checkbox" />
                  <label className=" ml-1" htmlFor="checkboxLabel">
                    Graphics Designer
                  </label>
                </span>
                <span className=" flex justify-center my-1 self-start">
                  <input className=" w-5 h-5" type="checkbox" />
                  <label className=" ml-1" htmlFor="checkboxLabel">
                    Event Manager
                  </label>
                </span>
                <span className=" flex justify-center my-1 self-start">
                  <input className=" w-5 h-5" type="checkbox" />
                  <label className=" ml-1" htmlFor="checkboxLabel">
                    General Member
                  </label>
                </span>
                <label
                  htmlFor="question1"
                  className=" my-2 text-left font-medium"
                >
                  Any specefic skill set that can be utilized in above mentioned
                  domains ? (optional)
                </label>
                <textarea
                  name="answer2"
                  id="answer2"
                  className=" w-full mt-1 h-28 py-1 my-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
                ></textarea>
              </div>
              <div className="mt-4 mb-4 flex flex-col">
                <label
                  className=" mb-2 text-center font-bold"
                  htmlFor="personalDetails"
                >
                  Personal Expression
                </label>
                <label
                  htmlFor="question1"
                  className=" text-left mt-1 font-medium"
                >
                  Why do you want to be part of this community ?
                </label>
                <textarea
                  name="answer2"
                  id="answer2"
                  className=" w-full mt-2 mb-4 h-28 py-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
                ></textarea>

                <label
                  htmlFor="question1"
                  className=" text-left mt-1 font-medium"
                >
                  How do you plan to contributr to the community as part of the
                  above mentioned domain ?
                </label>
                <textarea
                  name="answer2"
                  id="answer2"
                  className=" w-full h-28 mt-2 mb-4 py-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
                ></textarea>
                <label
                  htmlFor="question1"
                  className=" text-left mt-1 font-medium"
                >
                  Any query or feedbacks ? (optional)
                </label>
                <textarea
                  name="answer2"
                  id="answer2"
                  className=" w-full h-28 mt-2 mb-4 py-1 px-2 outline-none bg-inherit border-solid border-2 border-sky-400 rounded-md"
                ></textarea>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
