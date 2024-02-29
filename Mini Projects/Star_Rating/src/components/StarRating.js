import { useState } from "react"


const StarRating = ({ circleLength }) => {

    let [hover, setHover] = useState(0);
    let [rating, setRating] = useState(0)

    const handleClick = (id) => {
        setRating(id)
    }

    const handleEnter = (id) => {
        setHover(id);
    }

    const handleLeave = () => {
        setHover(rating)
    }

    let circle = [];
    for (let i = 1; i <= circleLength; i++) {
        circle.push(<div key={i} className={`circle ${i <= hover || i <= rating ? "active" : "inactive"}`} onClick={() => handleClick(i)} onMouseEnter={() => handleEnter(i)} onMouseLeave={() => handleLeave(i)}></div >)
    }
    return (
        <div className="main-container">
            {circle}
        </div>
    )
}

export default StarRating;