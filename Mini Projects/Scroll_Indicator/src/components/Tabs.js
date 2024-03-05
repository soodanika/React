import { useState } from "react";


const Tabs = () => {

    let tabs = [];
    let [selectedTab, setSelectedTab] = useState(1);

    const handleClick = (i) => {
        setSelectedTab(i);
    }

    for (let i = 1; i <= 3; i++) {
        tabs.push(
            <div>
                <div className={`tab ${selectedTab === i ? "selected" : null}`} onClick={() => handleClick(i)}>
                    Tab {i}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="tab-container">
                {tabs}

            </div>
            <div className="content">
                {selectedTab === 1 ?

                    <p>This is tab 1 content.</p>
                    : (selectedTab === 2) ? <p>This is tab 2 content.</p> : <p>This is tab 3 content.</p>
                }
            </div>
        </>
    )

}

export default Tabs;