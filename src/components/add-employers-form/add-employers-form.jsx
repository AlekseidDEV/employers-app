import './add-employers-form.css'
import {useState} from "react";

const AddEmployeeForm = () => {
    const [userName, setUserName] = useState('');
    const [salary, setSalary] = useState('');

    const onChange = (e) => {
        if(e.target.name === 'userName'){
            setUserName(e.target.value)
        }else {
            setSalary(e.target.value)
        }
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"
                       name="userName"
                       value={userName}
                       onChange={onChange}
                />
                <input type="number"
                       name="salary"
                       value={salary}
                       onChange={onChange}
                       className="form-control new-post-label"
                       placeholder="З/П в $?"
                />
                <button type="submit"
                        className="btn btn-outline-light">Добавить
                </button>
            </form>
        </div>
    )
}

export default AddEmployeeForm