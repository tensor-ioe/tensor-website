import React from "react";
import './Error404.css';

import Navbar from "../../components/Navbar/Navbar";

export default function Error404() {
    return (
        <div className="Error404">
            <Navbar />
            <div className="Error404-text-404">
                <h1>404 : Page not found</h1>
            </div>
        </div>
    );
}