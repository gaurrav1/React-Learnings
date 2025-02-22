import { Namefunc } from "./components/Namefunc";

export function Props() {
    return (
        <div>
            <Namefunc name="John" id="5"> 
                <span> Hey! </span>
            </Namefunc>
            <Namefunc name="Doe" id="6" />
        </div>
    )
}