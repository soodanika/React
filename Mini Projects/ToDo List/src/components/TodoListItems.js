const TodoListItems = ({ todo, allTodos, setAlltodos, completedTodos, setCompletedTodos, completed }) => {

    const handleDelete = () => {
        const updatedTodos = allTodos.filter(item => item !== todo);
        setAlltodos(updatedTodos);
        localStorage.setItem("todolist", JSON.stringify(updatedTodos));

        const deletedItems = completedTodos.filter(item => item !== todo);
        setCompletedTodos(deletedItems);
        localStorage.setItem("completedtodolist", JSON.stringify(completedTodos))
    }

    const handleDone = () => {
        const updatedCompletedList = [...completedTodos]
        updatedCompletedList.push(todo);
        setCompletedTodos(updatedCompletedList);

        const updatedTodos = allTodos.filter(item => item !== todo);
        setAlltodos(updatedTodos);
        localStorage.setItem("completedtodolist", JSON.stringify(updatedCompletedList))
        localStorage.setItem("todolist", JSON.stringify(updatedTodos));
    }

    return (
        <div className="container">
            <div className="todo-items-list">
                <div className="todo-item-title">
                    {todo.title}
                    <div className="btns"></div>
                    {!completed ? <button className="btn-done" onClick={handleDone}>Done</button> : null}
                    {!completed ? <button className="btn-delete" onClick={handleDelete}>Delete</button> : null}
                </div>
                <div className="todo-description">
                    {todo.description}
                </div>
            </div>
        </div>
    )

}

export default TodoListItems;