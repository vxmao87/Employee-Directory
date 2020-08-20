import React from "react";

function EmployeeData(props) {
    return (
        <tr key={props.key}>
            <th scope="row"><img src={props.image} alt={props.name.first}></img></th>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default EmployeeData;