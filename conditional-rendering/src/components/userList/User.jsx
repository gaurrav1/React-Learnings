import React from 'react'

function User({ name, email}) {
  return (
    <>
    <li>" {name} " <br />&nbsp; Email: {email}</li>
    </>
  )
}

export default User