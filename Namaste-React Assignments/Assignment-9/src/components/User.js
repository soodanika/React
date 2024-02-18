import React from "react";

class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 0
        }
    }

    componentDidMount() {
        console.log("ComponentDidMount")
        this.interval = setInterval(() => {
            console.log("Interval Called")
        }, 1000)
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount")
        clearInterval(this.interval)
    }

    render() {
        const { name, location, contact } = this.props;
        const { count, count2 } = this.state
        return (
            <div className="user-container">
                <img src=""></img>
                <h2>Count: {count}</h2>
                <h2>Count: {count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                    })
                }}>Increase Count</button>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default User;