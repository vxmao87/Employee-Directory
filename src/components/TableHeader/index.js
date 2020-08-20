import React from "react";

function TableHeader(props) {
    return (
        <tr>
            <th scope="col">Image</th>
            <th scope="col">
                Name
                <button 
                    onClick={props.handleLinkClick}>
                    <i class="fas fa-sort"></i>
                </button>
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
        </tr>
    );
}

export default TableHeader;