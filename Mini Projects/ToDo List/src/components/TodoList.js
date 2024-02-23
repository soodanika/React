import { useEffect, useState } from "react";
import TodoListItems from "./TodoListItems";

const TodoList = () => {

    let [allTodos, setAlltodos] = useState([]);
    let [newTitle, setNewTitle] = useState("");
    let [newDescription, setNewDescription] = useState("")

    const handleAdd = () => {
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

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem("todolist"));
        if (savedTodo) setAlltodos(savedTodo)

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
            <div className="todo-items">
                {allTodos.map((todo, i) => {
                    return <TodoListItems key={i} todo={todo} setAlltodos={() => setAlltodos(todo)} />
                })}
            </div>
        </>


    )
}

export default TodoList;