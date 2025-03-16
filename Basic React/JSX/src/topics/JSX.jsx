import {Name} from './components/Name.jsx';
import {ToDoList} from './components/ToDoList.jsx';

export function JSX() {

    // return React.createElement(
    //   "h1",
    //   { id: "5" },
    //   "Hello World",
    //   React.createElement("span", null, "Bye")
    // );

    return (
        <div>
            {/* All attributes name should be converted into camelcase except data-... and Aria-.... */}
            <h1 className="blue">
                HEllo World <span>Bye</span>
            </h1>

            <label htmlFor="username">Username</label>
            <input type="number" id="username" defaultValue={4} />

            <div className="large" id="largeDiv">
                Hi
            </div>

            <div>
                Boolean value: {false} [Dont show]
                <br />
                Array: {[1, 2, 3]}
                <br />
                Undefined: {undefined} [Dont show]
            </div>

            <Name />
            <ToDoList></ToDoList>
        </div>
    )
}