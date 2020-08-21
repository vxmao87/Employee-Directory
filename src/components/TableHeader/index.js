import React from "react";
import "./style.css";

function TableHeader(props) {
    return (
        <tr>
            <th scope="col" className="employeePic">Image</th>
            <th scope="col" className="employeeName" onClick={props.handleLinkClick}>
                Name (click to sort)
            </th>
            <th scope="col" className="employeePhone">Phone</th>
            <th scope="col" className="employeeEmail">Email</th>
            <th scope="col" className="employeeDOB">DOB</th>
        </tr>
    );
}

export default TableHeader;