import logo from './logo.svg';
import './App.css';
import StudentItem from './component/StudentItem';
import StudentsTable from './component/StudentsTable';
import { useState } from 'react';

function App() {

    const [student, setStudent] = useState
        ([
            { studentId: '1', firstName: 'Nguyễn', lastName: 'Thị A' },
            { studentId: '2', firstName: 'Nguyễn', lastName: 'Văn B' },
            { studentId: '3', firstName: 'Nguyễn', lastName: 'Thị C' },
            { studentId: '4', firstName: 'Nguyễn', lastName: 'Thị D' },
        ]
        )



    const handleAddStudent = () => {
        alert('Thêm sinh viên')
        const newStudent = {
            studentId: '5',
            firstName: 'Nguyễn',
            lastName: 'Văn E'
        }
        setStudent([...student, newStudent])
    }

    return (
        <div className="App">
            <div className='card'>
                <div className='card-header'>
                    <h1>Danh sách sinh viên</h1>
                </div>

                <div className='card-header'>
                    <StudentsTable student={student} />
                    <button className='btn btn-primary' onClick={handleAddStudent}>Thêm sinh viên</button>
                </div>

            </div>
        </div>
    );
}

export default App;
