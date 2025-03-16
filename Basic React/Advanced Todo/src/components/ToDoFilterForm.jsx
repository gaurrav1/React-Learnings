import React, { useState } from 'react'

function ToDoFilterForm({ name, setName, hideComplated, setHideComplated }) {

    return (
        <>
        <hr />
            <div className="filter-form">
                <input autoFocus type="text" value={name} onChange={e => setName(e.target.value)} placeholder='&#128269; Search task...' />

                <label>
                    <input type="checkbox" checked={hideComplated} onChange={ e => setHideComplated(e.target.checked)} />
                    Hide Completed
                </label>
            </div>
            <hr />
        </>
    )
}

export default ToDoFilterForm