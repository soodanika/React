import data from "../utils/data";
import { useState } from "react";


const Accordian = () => {

    let [selected, setSelected] = useState(null);
    let [multiSelect, setMultiSelect] = useState(false)
    let [selectedId, setSelectedId] = useState([]);

    const handleClick = (id) => {
        if (!multiSelect) {
            if (selected === id) {
                setSelected(null)
            } else {
                setSelected(id)
            }
        } else {
            setSelectedId((prevState) => {
                if (prevState.includes(id)) {
                    return selectedId.filter((i) => i !== id)
                } else {
                    return [...prevState, id]
                }
            })

        }

    }

    const handlebtn = () => {
        setMultiSelect(!multiSelect)
    }

    return (
        <div className="main-container">
            <button className="btn" onClick={handlebtn}>Multiselect Enabled</button>
            {data.map((d) => {
                return (
                    <div key={d.id} className="accordian-container" onClick={() => handleClick(d.id)}>
                        <div className="accordian-title">
                            {d.question}<span>+</span>
                        </div>
                        {multiSelect && selectedId.includes(d.id) ? <div className="accordian-des">
                            {d.answer}
                        </div> : (selected === d.id ? <div className="accordian-des">
                            {d.answer}
                        </div> : null)}

                    </div>
                )
            })}
        </div>
    )
}

export default Accordian;