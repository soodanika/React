const TodoListItems = (todo, setAlltodos) => {
    console.log(setAlltodos)

    const handleClick = () => {
    }

    return (
        <div className="container">
            <div className="todo-items-list">
                <div className="todo-item-title">
                    {todo.todo.title}
                    <div className="btns"></div>
                    <button className="btn-done">Done</button>
                    <button className="btn-delete" onClick={handleClick}>Delete</button>
                </div>
                <div className="todo-description">
                    {todo.todo.description}
                </div>
            </div>
        </div>
    )

}

export default TodoListItems;