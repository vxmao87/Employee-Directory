import React from "react";
import TableHeader from "../TableHeader";
import EmployeeData from "../EmployeeData";

function EmployeeTable(props) {
    const results = props.results;
    return (
        <div className="container-fluid">
            <div 
                className="row d-flex justify-content-center">
                <div className="col-12">
                    <table className="table table-responsive-lg table-striped table-bordered table-hover">
                        <thead>
                            <TableHeader 
                                handleLinkClick={props.handleLinkClick}/>
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