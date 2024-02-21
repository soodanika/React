import User from "./User";
import React from "react";
// import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            data: {
                name: "Dummy Name",
                location: "Dummy Location",
                avatar_url: ""
            }
        })
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/soodanika");
        const json = await data.json();

        this.setState({
            data: json
        })
    }

    render() {
        let { name, location, avatar_url } = this.state.data;
        return (<div>
            <h1>This is About Us Page.</h1>
            {/* <h4>loggedInUser:
                <UserContext.Consumer>
                    {(data) => data.loggedInUser}
                </UserContext.Consumer>
            </h4> */}
            <User name={name} location={location} avatar_url={avatar_url} contact="soodanika2000@gmail.com" />
        </div>)
    }
}
export default About;