import React from "react";
import Row from "../Row";
import TableHeader from "../TableHeader";
import EmployeeData from "../EmployeeData";

function EmployeeTable(props) {
    const results = props.results;
    console.log(results);
    return (
        <div className="container-fluid">
            <div 
                className="row d-flex justify-content-center">
                <div className="col-12">
                    <table className="table table-responsive-lg">
                        <thead>
                            <TableHeader />
                        </thead>
                        <tbody>
                            {results.length ? (
                                results.map(employee => (
                                    <EmployeeData 
                                        key={employee.index}
                                        image={employee.picture.thumbnail}
                                        name={employee.name.first + " " + employee.name.last}
                                        phone={employee.phone}
                                        email={employee.email}
                                        dob={employee.dob.date.substring(0, 10)}
                                    />
                                ))
                            ) : <tr />}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmployeeTable;