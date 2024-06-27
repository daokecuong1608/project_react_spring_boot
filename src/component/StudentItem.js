import React from "react";

function StudentItem(props) {

    return (
        <tr>
            <td scope="row">{props.studentId}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
        </tr>
    )
}
export default StudentItem;