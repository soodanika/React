import { useEffect, useState } from "react";
import TodoListItems from "./TodoListItems";

const TodoList = () => {

    let [allTodos, setAlltodos] = useState([]);
    let [newTitle, setNewTitle] = useState("");
    let [newDescription, setNewDescription] = useState("")
    let [completed, setCompleted] = useState(false);
    let [todo, setTodo] = useState(true);
    let [completedTodos, setCompletedTodos] = useState([]);

    const handleAdd = () => {
        if (newTitle.length !== 0 || newDescription.length !== 0) {
            let todoItem = {
                title: newTitle,
                description: newDescription
            }

            let updatedTodo = [...allTodos];
            updatedTodo.push(todoItem)
            setAlltodos(updatedTodo);
            localStorage.setItem("todolist", JSON.stringify(updatedTodo));
            setNewTitle("");
            setNewDescription("");
        }
    }

    const handleCompleted = () => {
        setCompleted(true);
        setTodo(false);
        setCompletedTodos(JSON.parse(localStorage.getItem("completedtodolist")))
    }

    const handleTodo = () => {
        setCompleted(false);
        setTodo(true);
        setAlltodos(JSON.parse(localStorage.getItem("todolist")))
    }

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem("todolist"));
        if (savedTodo) setAlltodos(savedTodo)
        let savedCompleted = JSON.parse(localStorage.getItem("completedtodolist"));
        if (savedCompleted) setCompletedTodos(savedCompleted);

    }, [])


    return (
        <>
            <div className="todo-title">My Todos</div>

            <div className="todo-container">
                <div className="title">
                    <label className="title">Title:</label>
                    <input className="title-input" type="text" placeholder="What's the title of your To Do?" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
                </div>
                <div className="description">
                    <label className="description">Description:</label>
                    <input className="description-input" type="text" placeholder="What's the description of your To Do?" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></input>
                </div>
                <button className="add-button" onClick={handleAdd}>Add</button>
            </div>
            <div className="toggle-button">
                <button className={todo ? "todo-btn btn-highlight" : "todo-btn"} onClick={handleTodo}>ToDo</button>
                <button className={completed ? "completed-btn btn-highlight" : "completed-btn"} onClick={handleCompleted}>Completed</button>
            </div>
            <div className="todo-items">
                {todo ?
                    allTodos.map((todo, i) => {
                        return <TodoListItems key={i} todo={todo} allTodos={allTodos} setAlltodos={setAlltodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} completed={completed} />
                    }) : completedTodos.map((todo, i) => {
                        return <TodoListItems key={i} todo={todo} allTodos={allTodos} setAlltodos={setAlltodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} completed={completed} />
                    })}
            </div>
        </>


    )
}

export default TodoList;