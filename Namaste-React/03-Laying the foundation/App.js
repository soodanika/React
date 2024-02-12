import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Hello from React");

// JSX is not html
// JSX is JS like syntax which is easier to create React element
// JSX is not something that the browser understands, parcel uses babel to convert this JSX to createReact element behendi the scenes which is an object and then on renderinf is converted to html that the browser understands.

// React Component
const Title = () => <h1 id="heading">Hello from React using JSX</h1>

const number = 13;

// React Functional Component // Component Composition
const HeadingComponent = () => (
    <div id="container">
        <h2>{number}</h2>
        <Title />
        <h1 className="heading">Hello World from functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />) 