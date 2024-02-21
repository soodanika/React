import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        //console.log("Parent constructor")

        this.state = ({
            data: {
                name: "Dummy Name",
                location: "Dummy Location",
                avatar_url: ""
            }
        })
    }

    async componentDidMount() {
        //console.log("Parent Component did mount")
        const data = await fetch("https://api.github.com/users/soodanika");
        const json = await data.json();
        //console.log(json);

        this.setState({
            data: json
        })
    }

    render() {
        //console.log("Parent render")
        let { name, location, avatar_url } = this.state.data;
        return (<div>
            <h1>This is About Us Page.</h1>
            <User name={"Anika Sood (functional)"} location={"Mohali"} contact={"soodanika2000@gmail.com"} />
            {/* <UserClass name={name} location={location} contact={"soodanika2000@gmail.com"} avatar_url={avatar_url} /> */}
        </div>)
    }
}

// const About = () => {
//     return (<div>
//         <h1>This is About Us Page.</h1>
//         {/* <User name={"Anika Sood (functional)"} location={"Mohali"} contact={"soodanika2000@gmail.com"} /> */}
//         <UserClass name={"Anika Sood (class)"} location={"Mohali"} contact={"soodanika2000@gmail.com"} />
//     </div>)
// }
export default About;