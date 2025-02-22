import React from 'react'

class ClassUseRef extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      fullName: ''
    }
    this.ref = React.createRef()
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
  componentDidUpdate() {
    console.log("Component updated!");
  }

  render() {
    return (
      <>
        <h2>Use case 1: Persisting Mutable Data Across Renders with `useRef`</h2>
        <label>
          Name: <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        </label>
        <br />
        <button onClick={() => this.ref.current = "Gaurav 2"}>Change ref name</button>
        <button onClick={() => console.log(this.ref.current)}>Get ref name</button>
        <br /><br />

        <h2>Use case 2: Accessing and Manipulating DOM Elements with `useRef`</h2>
        <input type="text" ref={this.inputRef} value={this.state.fullName} onChange={(e) => this.setState({ fullName: e.target.value })} />
      </>
    )
  }

}

export default ClassUseRef