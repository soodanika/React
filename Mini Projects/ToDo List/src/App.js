import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList";

const AppLayout = () => {
    return (
        <TodoList />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
