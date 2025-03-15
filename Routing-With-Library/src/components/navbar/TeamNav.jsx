import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
// import teamMembers from '../../team_member.json'

function TeamNav() {

    const teamMembers = useLoaderData()
    console.log(teamMembers)

    return (
        <nav>
            <ul>
                {teamMembers.map(member => (
                    <li key={member.id}>
                        <Link to={member.id.toString()}>{member.name}</Link>
                    </li>
                ))}

                <li><Link to={"new"}>New member</Link></li>
                <li><Link to=".">Go Back</Link></li>
                <li><Link to=".." >.. Route</Link></li>
            
            </ul>
        </nav>
    )
}

export default TeamNav