import AppTableItem from "../app-table-item/app-table-item.jsx";

import './app-table.css'

const AppTable = function (){
    return (
        <ul className="app-list list-group">
            <AppTableItem/>
            <AppTableItem/>
        </ul>
    )
}

export default AppTable