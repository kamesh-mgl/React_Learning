export default function Task({ task }) {
    console.log(task)
    return (
        <div className="task">
            <h2>{task}</h2>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Del</button>
        </div>
    )
}
//resmume