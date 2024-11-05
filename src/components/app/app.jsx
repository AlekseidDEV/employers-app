import './app.css'
import AppInfo from "../app-info/app-info.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import AppTable from "../app-table/app-table.jsx";
import AddEmployersForm from "../add-employers-form/add-employers-form.jsx";

const App = function (){

    const data = [
        {name: 'Alex', salary: '1000', increase: true, id: 0},
        {name: 'Alice', salary: '1400', increase: false, id: 1},
        {name: 'John', salary: '600', increase: false, id: 2},
        {name: 'Mary', salary: '2600', increase: false, id: 3}
    ]

     return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <AppTable dataList={data}/>
            <AddEmployersForm/>
        </div>
    )
}

export default App