import React from "react";

export default class ClassUseState extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            name: "Gauravvvvv",
            age: 20
        }
    }

    render() {

        // They dont work with simple function
        const handleName = () => {
            this.setState( { name: "Gaurav" } )

            this.setState((currentState) => {
                return { name: "Gaurav: ", age: currentState.age + 1}
            })

            this.setState((currentState) => {
                return { age: currentState.age + 1}
            })
        }

        return (
            <>
                <div>
                    <h1 onClick={handleName}> {this.state.name} {this.state.age} </h1>
                </div>
            </>
        )
    }
}