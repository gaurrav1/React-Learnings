import React from "react";

export default class ClassNameAge extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: 0
        }
    }

    increase = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    decrease = () => {
        this.setState({
            age: this.state.age - 1
        })
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <br />
                <button type="number" onClick={this.decrease} > - </button>
                <span>{this.state.age}</span>
                <button type="number" onClick={this.increase} > + </button>

                <br />
                <br />
                <span>This is {this.state.name} and I'm {this.state.age} years old...</span>
            </>
        )
    }
}