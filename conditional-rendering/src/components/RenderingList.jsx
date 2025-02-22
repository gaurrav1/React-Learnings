import React, { useState } from 'react'

function RenderingList() {

    const [items, setItems] = useState([
        { id: crypto.randomUUID(), name: "Kurkure"},
        { id: crypto.randomUUID(), name: "Chips"},
        
    ]);

    function addItem() {
        setItems(currentItems => {
            return [
                { id: crypto.randomUUID(), name: "New Item"},
                ...currentItems,
                
            ]
        })
    };

  return (
    <>
        <button onClick={addItem}>Add Item</button>
        {
        // <pre>{items}</pre>
        // Objects cannot be rendared directly in JSX.
        // items is an array of objects. We need to convert it to string.
        // <pre>{JSON.stringify(items, null, 2)}</pre>
        }

        <pre>
            {
                items.map(item => {
                    console.log(item)
                    return (
                        <div key={item.id}>
                            <input type="text" />
                            {item.name}
                        </div>
                    )
                })
            }
        </pre>

    </>
  )
}

export default RenderingList