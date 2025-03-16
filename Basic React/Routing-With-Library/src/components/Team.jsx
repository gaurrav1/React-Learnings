import { useOutletContext } from "react-router-dom"

function Team() {
  const value = useOutletContext();
  return (
    <div>Team = {value}</div>
  )
}

export default Team