import './app.css'
import AppInfo from "../app-info/app-info.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import AppTable from "../app-table/app-table.jsx";
import AddEmployersForm from "../add-employers-form/add-employers-form.jsx";

const App = function (){
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <AppTable/>
            <AddEmployersForm/>
        </div>
    )
}

export default App