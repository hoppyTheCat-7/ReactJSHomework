import TaskItem from "./TaskItem";

function ListItem({ items }) {
    return (
        <>
        <div className="list-wrapper">
            <h1>To-do List</h1>
            <ul className="list-container">
                {items.map((task, index) => {
                    return (
                        <TaskItem key={index} name={task.name} priority={task.priority} />
                    )
                })}
            </ul>
        </div>   
        </>
    );
}

export default ListItem