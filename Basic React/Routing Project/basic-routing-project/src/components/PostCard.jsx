import { Link } from "react-router-dom"

function PostCard({ post }) {
    return (
        <div className="card">
            <div className="card-header">
                {post.title}
            </div>
            <div className="card-body">
                <div className="card-preview-text">
                    {post.body}
                </div>
            </div>
            <div className="card-footer">
                <Link className='btn' to={`/posts/${post.id}`}>View</Link>
            </div>
        </div>
    )
}

export default PostCard