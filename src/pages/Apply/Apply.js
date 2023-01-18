import React from "react";
import './Apply.css';

import Navbar from "../../components/Navbar/Navbar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

export default function Apply() {
    const applicationClosed = true;

    return (
        <div className="Apply">
            <Navbar />
            <section className="Apply-section">
                <SectionTitle title={"Apply for a role"} />

                <div className="Apply-content">
                    {
                        applicationClosed ?
                        <div className="Apply-closed">
                            <p className="Apply-closed-icon">:(</p>
                            <p className="Apply-closed-text">Application for this year has been closed</p>
                        </div>
                        :
                        <div className="Apply-form">
                            <p>Redirecting to the form...</p>
                            {
                                window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSfwnunaLWcRgBc5fgwBizN-iF0nv3N_g5JaGiQ3TP6gXi_PPQ/viewform?usp=sf_link")
                            }
                        </div>
                    }
                </div>
            </section>
        </div>
    );
}