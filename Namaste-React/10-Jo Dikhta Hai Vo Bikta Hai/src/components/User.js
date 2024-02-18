import { useState, useEffect } from "react";

const User = (props) => {

    let [count] = useState(0);
    let [count2] = useState(1);

    useEffect(() => {
        let interval = setInterval(() => {
            console.log("Interval")
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const { name, location, contact } = props;
    return (<div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count: {count2}</h2>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
    </div>)
}

export default User;