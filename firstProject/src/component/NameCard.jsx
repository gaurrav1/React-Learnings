export function NameCard(props) {
    return (
        <div className="card">
            <h1 className="name">{props.name}</h1>
            <div className="body">
                <div className="label">Age:</div>
                <div>{props.age}</div>
                <div className="label">Phone:</div>
                <div>{props.phoneNumber}</div>
                <div className="label">Address:</div>
                <div>{props.address}</div>
            </div>
        </div>
    )
}