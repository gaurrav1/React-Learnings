import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='top-nav'>
        <div className="nav-text-large">Routing Project</div>
        <ul className='nav-list'>
            <li>
                <Link to={"/posts"}>Posts</Link>
            </li>
            <li>
                <Link to={"/users"}>Users</Link>
            </li>
            <li>
                <Link to={"/tasks"}>Tasks</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar