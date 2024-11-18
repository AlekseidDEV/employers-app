import AppTableItem from "../app-table-item/app-table-item.jsx";

import './app-table.css'

const AppTable = function ({dataList, onDelete}) {
    const items = dataList.map((item) => {
        const {id, ...itemProps} = item

        return (
            <AppTableItem
                key=
                    {id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <div>
            <ul className="app-list list-group">
                {items}
            </ul>
        </div>
    )
}

export default AppTable