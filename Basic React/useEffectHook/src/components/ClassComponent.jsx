import React from "react";

export default class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0
        }
    }

    componentDidMount() {
        console.log("Child Component Mounted")
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name || prevState.age !== this.state.age) {
            console.log(`Name/age got change!!!.....Your name is ${this.state.name}, and your age is ${this.state.age}.`)
        }
        if (prevProps.name !== this.state.name) {
            document.title = this.state.name;
        }

    }

    componentWillUnmount() {
        console.log("Child Component Unmounted")
    }

    render() {
        return (
            <>
                <h2>Child Component</h2>
                <h3>Name: {this.state.name} </h3>
                <input type="text" placeholder="Name" onChange={ (e) => this.setState({ name: e.target.value }) } />
                <br />
                <h3>Age: </h3>
                <button onClick={ () => { return(this.setState({ age: this.state.age - 1 }))}}> - </button>
                <span> { this.state.age } </span>
                <button onClick={ () => { return(this.setState({ age: this.state.age + 1 }))}}> + </button>
                <br /><br /><br />
                Your name is {this.state.name}, and your age is {this.state.age}.
            </>
        )
    }

}