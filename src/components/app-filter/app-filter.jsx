import './app-filter.css'

const AppFilter = function (){
    const btnsArr = [
        {name: 'Все сотрудники', id: 0, classElem: 'btn btn-light'},
        {name: 'На повышение', id: 1, classElem: 'btn btn-outline-light'},
        {name: 'ЗП больше 1000$', id: 2, classElem: 'btn btn-outline-light'}
    ]

    const btns = btnsArr.map((btn) =>
        <button
            className={btn.classElem}
            key={btn.id}
            id={btn.id}>{btn.name}
        </button>
    )

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter