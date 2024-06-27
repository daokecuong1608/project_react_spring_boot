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
                {/* <StudentItem studentId={student[0].studentId} firstName={student[0].firstName} lastName={student[0].lastName} />
            <StudentItem studentId={student[1].studentId} firstName={student[1].firstName} lastName={student[1].lastName} /> */}
                {
                    props.student.map((student) => (
                        <StudentItem
                            studentId={student.studentId}
                            firstName={student.firstName}
                            lastName={student.lastName}
                        />
                    )
                    )
                }
            </tbody>


        </table>
    )
}
export default StudentsTable