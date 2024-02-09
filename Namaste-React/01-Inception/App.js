const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //take object=>html element


const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "Nested - I'm h1"), React.createElement("h2", {}, "Nested - I'm h2")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "Nested - I'm h1"), React.createElement("h2", {}, "Nested - I'm h2")])]);
root.render(parent);