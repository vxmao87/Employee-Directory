import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container-full-bg">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Please use the Search bar to find any employees you are looking for! You can also sort by the name of an employee.</p>
            </div>
        </div>
    );
}

export default Jumbotron;