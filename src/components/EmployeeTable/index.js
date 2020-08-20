import React from "react";
import Row from "../Row";
import EmployeeData from "../EmployeeData";

function EmployeeTable(props) {
    const results = props.results;
    console.log(results);
    return (
        <Row>
            <div 
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
                                    // <tr>
                                    //     <th scope="row"><img src={employee.image} alt={employee.name.first}></img></th>
                                    //     <td>{employee.name}</td>
                                    //     <td>{employee.phone}</td>
                                    //     <td>{employee.email}</td>
                                    //     <td>{employee.dob.date}</td>
                                    // </tr>
                                    <EmployeeData 
                                        key={employee.index}
                                        image={employee.image}
                                        name={employee.name.first + " " + employee.name.last}
                                        phone={employee.phone}
                                        email={employee.email}
                                        dob={employee.dob.date}
                                    />
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