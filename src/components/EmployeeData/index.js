import React from "react";

function EmployeeData(props) {
    return (
        <div>
            <tr>
                <th scope="row"><img src={props.image} alt={props.name.first}></img></th>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </div>
    )
}

export default EmployeeData;