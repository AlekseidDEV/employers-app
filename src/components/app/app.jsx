import './app.css'

import AppInfo from "../app-info/app-info.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import AppTable from "../app-table/app-table.jsx";
import AddEmployersForm from "../add-employers-form/add-employers-form.jsx";

import {Component} from "react";


class App extends Component {
    constructor() {
        super();
        this.state = {
            userList: [
                {name: 'Alex', salary: '1000', increase: true, id: 0},
                {name: 'Alice', salary: '1400', increase: false, id: 1},
                {name: 'John', salary: '600', increase: false, id: 2},
                {name: 'Mary', salary: '2600', increase: false, id: 3}
            ]
        }
    }

    deletItem = (id) => {
        this.setState(({userList}) => {
            return {
                userList: userList.filter(item => item.id !== id)
            }
        })
    }

    addItem = (obj) => {
        obj.id = this.state.userList.length - 1 + 1

        this.setState(({userList}) => {
            return {
                userList: [...userList, obj]
            }
        })
    }

    render = () => {
        const {userList} = this.state

        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <AppTable onDelete={(id) => this.deletItem(id)} dataList={userList}/>
                <AddEmployersForm addEmploy={(obj) => {this.addItem(obj)}} />
            </div>
        )
    }
}

export default App