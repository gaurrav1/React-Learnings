import { Form, Link } from "react-router-dom"
import FormGroup from "./FormGroup"

function PostForm({users, isSubmitting, errors = {}, post = {}}) {
    return (
        <Form method="post" className="form">
            <div className="form-row">
                <FormGroup errorMessage={errors.title}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" defaultValue={post.title}/>
                </FormGroup>
                <FormGroup errorMessage={errors.userId}>
                    <label htmlFor="userId">Author</label>
                    <select name="userId" id="userId" defaultValue={post.userId}>
                        {users.map((user) => {
                            return (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            )
                        })}
                    </select>
                </FormGroup>
            </div>
            <div className="form-row">
                <FormGroup errorMessage={errors.body}>
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" defaultValue={post.body}></textarea>
                </FormGroup>
            </div>
            <div className="form-row form-btn-row">
                <Link className="btn btn-outline" to="..">Cancel</Link>
                <button disabled={isSubmitting} className="btn">{isSubmitting ? "Saving..." : "Save"}</button>
            </div>
        </Form>
    )
}

export default PostForm;

export function postFormValidators({title, body, userId}){
    const errors = {}

    if (title === "") {
        errors.title = "Required"
    }
    if (body === "") {
        errors.body = "Required" 
    }
    if (userId === "") {
        errors.userId = "Required"
    }

    return errors;
}