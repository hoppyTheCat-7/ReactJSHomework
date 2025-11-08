import { createContext, useState } from "react";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = {
            id: new Date(),
            text,
            isCompleted: false,
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return {...todo, text: newText};
            }
            return todo;
        }));
    };

    const toggleComplete = (id) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return todo;
        }));
    };  

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider }