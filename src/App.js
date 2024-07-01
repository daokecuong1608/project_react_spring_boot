import logo from './logo.svg';
import './App.css';
import StudentItem from './component/StudentItem';
import StudentsTable from './component/StudentsTable';
import { useState } from 'react';
import NewStudentFrom from './component/NewStudentFrom';

function App() {

    const [student, setStudent] = useState
        ([
            { studentId: '1', firstName: 'Nguyễn', lastName: 'Thị A' },
            { studentId: '2', firstName: 'Nguyễn', lastName: 'Văn B' },
            { studentId: '3', firstName: 'Nguyễn', lastName: 'Thị C' },
            { studentId: '4', firstName: 'Nguyễn', lastName: 'Thị D' },
        ]
        )



    const handleAddStudent = (lastName, firstName) => {

        const newStudent = {
            studentId: student.length + 1,
            firstName: firstName,
            lastName: lastName
        }
        setStudent([...student, newStudent])
    }


    const deleteStudent = (studentId) => {
        //loc theo id de xoa
        const newStudent = student.filter(student => student.studentId !== studentId)
        alert('Xoa thanh cong')
        setStudent(newStudent)
    }

    return (
        <div className="App">
            <div className='card'>
                <div className='card-header'>
                    <h1>Danh sách sinh viên</h1>
                </div>

                <div className='card-header'>
                    <StudentsTable
                        student={student}
                        deleteStudent={deleteStudent}
                    />
                    <NewStudentFrom handleAddStudent={handleAddStudent} />
                </div>

            </div>
        </div>
    );
}

export default App;
