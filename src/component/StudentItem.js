import React from "react";

function StudentItem(props) {

    const handleDelete = () => {
        props.deleteStudent(props.studentId);//gọi sang studentTable
    }

    return (
        <tr>
            <td scope="row">{props.studentId}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>
                {/* <button className='btn btn-primary'>Edit</button> */}
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}
export default StudentItem;