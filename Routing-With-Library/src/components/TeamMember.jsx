// import React from 'react'
// import { Link, useParams } from 'react-router-dom'
// import teamMembers from '../team_member.json'

// function TeamMember() {

//   const {memberId} = useParams();
//   const member = teamMembers.find(m => m.id === memberId);

//   return (
//     <div>TeamMember {member.name}, warm welcome!!
//     <br />
//     <Link to={".."}>.. from TeamMeber</Link></div>
//   )
// }

// export default TeamMember

import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function TeamMember() {

  const member = useLoaderData();

  return (
    <div>TeamMember {member.name}, warm welcome!!
    <br />
    <Link to={".."}>.. from TeamMeber</Link></div>
  )
}

export default TeamMember