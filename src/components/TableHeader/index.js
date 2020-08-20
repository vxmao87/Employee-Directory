import React from "react";

function TableHeader(props) {
    return (
        <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={props.handleLinkClick}>
                Name (click to sort)
                <i class="fas fa-sort"></i>
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
        </tr>
    );
}

export default TableHeader;