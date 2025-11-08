import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
    const { addTodo } = useContext(TodoContext);
    const [toDoText, setToDoText] = useState("");

    const handleAddTodo = () => {
        if (toDoText.trim() !== "") {
            addTodo(toDoText);
            setToDoText("");
        }
    };

    return (
        <div className="input-box">
            <input
                type="text"
                value={toDoText}
                onChange={(e) => setToDoText(e.target.value)}
                placeholder="Please, enter a new to-do!"
            />
            <button onClick={handleAddTodo} disabled={toDoText.trim() === ""}>Add</button>
        </div>
    );
}

export default AddTodo