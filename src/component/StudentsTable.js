import React from "react";
import StudentItem from "./StudentItem";

function StudentsTable(props) {
    return (
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th scope='<col'>Mã sinh viên</th>
                    <th>Họ đệm </th>
                    <th>Tên</th>
                </tr>
            </thead>
            <tbody>

                {
                    props.student.map((student) => (
                        <StudentItem
                            key={student.studentId}
                            studentId={student.studentId}
                            firstName={student.firstName}
                            lastName={student.lastName}
                            deleteStudent={props.deleteStudent}
                        />
                    )
                    )
                }
            </tbody>


        </table>
    )
}
export default StudentsTable