import React from "react";

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { name, location, contact, avatar_url } = this.props;
        return (
            <div className="user-container">
                <img src={avatar_url}></img>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default User;