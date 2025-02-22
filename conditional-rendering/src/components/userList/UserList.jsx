import React, { useEffect, useState } from 'react'
import User from './User'

function UserList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()
        fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal})
        .then(response => response.json())
        .then(setUsers)
        .finally(() => setLoading(false))
    
        return () => {
            controller.abort()
        }
    }, [])

  return (
    <>
    { loading ? (<p>Loading...</p>) : (
        <ul>
        {users.map(user => (
            <User key={user.id} {...user}/>
        ))}
        </ul>
    )}
    
    </>
  )
}

export default UserList