import './app-table-item.css'
import PropTypes from "prop-types";
import {useState} from "react";

const AppTableItem = function ({name, salary, increase}){
    const [isIncreaseSalary, setIncreaseSalary] = useState(increase)
    const [isChooseUser, setIsChooseUser] = useState(false)

    const isIncrease = isIncreaseSalary ? ' increase' : ''
    const showStarIcon = isChooseUser ? ' like' : ''

    const cnangeIncrease = () => {
        setIncreaseSalary(!isIncreaseSalary)
    }

    const chooseUser = () => {
        setIsChooseUser(!isChooseUser)
    }

    return (
        <li className={'list-group-item d-flex justify-content-between' + isIncrease + showStarIcon}>
            <span onClick={chooseUser} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={cnangeIncrease} type="button"
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

AppTableItem.propTypes = {
    name: PropTypes.string,
    salary: PropTypes.string,
    increase: PropTypes.bool,
}

export default AppTableItem