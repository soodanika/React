# Is JSX mandatory for react

    JSX is not mandatory for react but it is easy to understand and write for the developer.

# Is ES6 mandatory for react

    ES6 is not mandatory for react but it provides the latest features of JS so is good to have.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

    These are all different ways of rendering a component.

# Comments in JSX

    It is  same as JS but since we will write it in JSX it need to be enclosed within { }.

# What is <React.Fragment></React.Fragment> and <></>

    These are both used to enclose or group multiple child elements without adding an extra div node in dom.

# Virtual DOM

    It is concept used in React to optimize the updating process of actual DOM
    - When we create react component and render it for first time react constructs a virtual DOM.
    - If state or prop changes a new virtual dom is created.
    - React then comapares the previous DOM with the new one and identifies the differences.
    - After identifying the changes React looks for a way to have minimal changes to update the DOM.
    - It then applies changes to the actual DOM more efficiently.

# Reconciliation in React

    It is a process in react in which it comapres the previous Virtual DOM with the new one and determines the actual set of changes required to update the actual DOM.

# React Fiber

    It is internal rework of how react handles rendering. It improves performance by enabling better task prioritization etc.

# Keys in react

    These are used in react to uniquely identify and track elements ensuring efficient updates by avoiding unnecessary re-renders.

# Indexes as keys

    Not having key <<<< Index as key <<<<<< Unique Key

# Props

    Props in react are the properties that can be used to pass values from parent component to a child component to dynamically render content.

# Config driven UI

    UI that is handled by the data.
