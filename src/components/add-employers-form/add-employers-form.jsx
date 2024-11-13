import './add-employers-form.css'

import {Component} from "react";

class AddEmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameUser: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    render = () => {
        const {userName, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?" onChange={this.onValueChange}
                           name="nameUser"
                           value={userName}
                    />
                    <input type="number"
                           name="salary"
                           value={salary}
                           className="form-control new-post-label"
                           placeholder="З/П в $?" onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default AddEmployeeForm