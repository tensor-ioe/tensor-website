import { React, useState } from "react";
import "./Apply.css";

import Navbar from "../../components/Navbar/Navbar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ApplyForm from "../../components/applyForm/ApplyForm";

export default function Apply() {
  const applicationClosed = false;
  return (
    <div className="Apply">
      <Navbar />
      <section className="Apply-section">
        <SectionTitle title={"Apply for a role"} />

        <div className="Apply-content">
          {applicationClosed ? (
            <div className="Apply-closed">
              <p className="Apply-closed-icon">:(</p>
              <p className="Apply-closed-text">
                Application for this year has been closed
              </p>
            </div>
          ) : (
            <div className="Apply-form p-2 flex flex-col">
              <ApplyForm apiKey={process.env.REACT_APP_SPREADSHEET_API_KEY} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
