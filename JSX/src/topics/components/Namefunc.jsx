// Functional component
/* export function Namefunc(props) {
    return (
        <div> {props.children}, {props.name} : {props.id} </div>

    )
}
*/

// Class component
import React from "react"

export class Namefunc extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}, {this.props.name} : {this.props.id}
            </div>
        )
    }
}