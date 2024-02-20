import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     count: 0
        // }
        //console.log(this.props.name, "Child constructor")
    }

    componentDidMount() {
        //console.log(this.props.name, "Child Component did mount")
        this.timer = setInterval(() => {
            //console.log("Timeout")
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevProps, prevState)
    }

    componentWillUnmount() {
        //console.log("Will unmount")
        clearInterval(this.timer);
    }

    render() {
        const { name, location, contact, avatar_url } = this.props;
        //let { count } = this.state;
        // console.log(this.props.name, "Child render")
        return (<div className="user-card">
            {/* <h2>Count: {count}</h2>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }}>Increase Count</button> */}
            <img src={avatar_url}></img>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: {contact}</h3>
        </div>)
    }
}

export default UserClass;