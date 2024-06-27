import logo from './logo.svg';
import './App.css';
import StudentItem from './component/StudentItem';

function App() {

    const student = [
        { studentId: '1', firstName: 'Nguyễn', lastName: 'Thị A' },
        { studentId: '2', firstName: 'Nguyễn', lastName: 'Văn B' },
        { studentId: '3', firstName: 'Nguyễn', lastName: 'Thị C' },
        { studentId: '4', firstName: 'Nguyễn', lastName: 'Thị D' },
    ]

    return (
        <div className="App">
            <div className='card'>
                <div className='card-header'>
                    <h1>Danh sách sinh viên</h1>
                </div>

                <div className='card-header'>
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
                                student.map((student) => (
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
                </div>
            </div>
        </div>
    );
}

export default App;
