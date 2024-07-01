import React, { useState } from "react";

function NewStudentFrom(props) {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');

    const saveStudents = () => {
        if (!lastName || !firstName) {
            alert('Vui lòng nhập đầy đủ thông tin');
        } else {
            props.handleAddStudent(lastName, firstName);
            setLastName('');
            setFirstName('');
        }
    }

    return (
        <div>
            <h1>Thêm dinh viên :</h1>
            <div className="form-group">
                <label >Họ đệm :</label>
                <input type="text"
                    className="form-control"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} />

            </div>
            <div className="form-group">
                <label >Tên :</label>
                <input type="text"
                    className="form-control"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} />

            </div>
            <div className="form-group">

                <button className='btn btn-success' onClick={saveStudents}>Thêm sinh viên</button>
            </div>
        </div>
    )
}
export default NewStudentFrom;