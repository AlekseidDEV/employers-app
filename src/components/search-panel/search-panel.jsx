import './search-panel.css'

const SearchPanel = function () {
    return (
        <div>
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
            />
        </div>
    )
}

export default SearchPanel