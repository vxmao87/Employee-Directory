import React from "react";
import Row from "../Row";

function EmployeeTable(props) {
    const results = props.results;
    return (
        <Row>
            <div 
                key={results.index}
                className="row d-flex justify-content-center">
                <div className="col-12">
                    <table className="table table-responsive-lg">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.length ? (
                                results.map(employee => (
                                    <tr>
                                        <th scope="row"><img src={employee.image} alt={employee.name.first}></img></th>
                                        <td>{employee.name}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.dob.date}</td>
                                    </tr>
                                ))
                            ) : <tr />}
                        </tbody>
                    </table>
                </div>
            </div>
        </Row>
    );
}

export default EmployeeTable;