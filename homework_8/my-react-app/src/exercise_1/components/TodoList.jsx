import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import AddTodo from "./AddTodo";

function TodoList() {
    const { todos, toggleComplete, editTodo, deleteTodo } = useContext(TodoContext);

    console.log(todos);

    return (
        <div className="main-container">
            <h1>A To-do List</h1>
            <AddTodo />
            {todos.length === 0 ? <p>Add some items to the list</p> : todos.map(todo => {
                return (
                    <ul key={todo.id} className="list-box">
                        <li>
                            <button
                                onClick={() => toggleComplete(todo.id)}
                                className="done-btn"
                            >
                                {!todo.isCompleted ? "Done" : "Undo"}
                            </button>
                            <span
                                className={`todo-text ${todo.isCompleted ? "completed" : ""}`}
                            >
                                {todo.text}
                            </span>
                            <button
                                onClick={() => editTodo(todo.id, prompt("New text:", todo.text))}
                                className="edit-btn"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="delete-btn"
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                );
            })}
        </div>
    );
}

export default TodoList