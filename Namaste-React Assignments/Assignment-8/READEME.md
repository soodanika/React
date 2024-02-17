# How do you create Nested Routes react-router-dom cofiguration

    - nested routes can be created using the createBrowserRouter from react-router-dom and it takes in an array of objects that define path, children where children then contains the path and element to be displayed at that path.

# What is the order of life cycle method calls in Class Based Components

    Constructor -> Render -> ComponentDidMount -> ComponentDidUpdate -> Render -> ComponentWillUnmount

# Why do we use componentDidMount?

    We usually make API calls in the componnetDidMount, since it will be called once the UI is rendered since we don't want the component to wait for the data to render.

# Why do we use componentWillUnmount?

    This is mostly used for clean ups, like if we have setInterval in our componentDidMount then it will keep running if not cleared, even if we leave the page because React has concept of SPA and only the componenets are loaded.

# Why do we use super(props) in constructor?

    Super(props) refers to the parent class constructor, and it allows us to use "this" keyword which we won't be able to use whithout super(props).

# Why can't we have the callback function of useEffect async

    Because the useEffect hook expects either a synchronous function or a function that returns a function synchronously.
