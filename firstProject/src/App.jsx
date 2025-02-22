import "./App.css";
import { NameCard } from "./component/NameCard";
import user from "./user.json";

function App() {

  return (
    <>
      <h1>  Different Profiles </h1>
      <NameCard name={user.name} age={user.age} phoneNumber={user.phoneNumber} address={user.address} />
    </>
  )
}

export default App