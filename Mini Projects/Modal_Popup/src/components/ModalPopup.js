import { useState } from "react";

const ModalPopup = () => {
    let [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true)
    }

    const handleCross = () => {
        setOpenModal(false)
    }

    const handleKeyDown = (e) => {

        console.log("key")
        console.log(e);
    }

    return (
        <>
            <div className="main-container">
                {!openModal ? <div className="btn-container">
                    <button className="btn" onClick={handleClick}>Open Modal Popup</button>
                </div> : null}
                {
                    openModal ?
                        <div className={`modal-container ${openModal ? "index" : null}`}>
                            <div className="heading">
                                <div className="head-container">Heading of Modal</div>
                                <span className="cross-btn" onClick={handleCross}
                                    onKeyDown={(e) => handleKeyDown(e)}>❌</span>
                            </div>

                            <div className="body">Body of Modal</div>
                            <div className="footer">Footer of Modal</div>
                        </div> : null
                }

            </div >

        </>
    )
}

export default ModalPopup;