import { useEffect, useState } from "react";

const GithubProfile = () => {

    let [githubData, setGithubData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    let [searchText, setSearchText] = useState("");
    let [userName, setUserName] = useState("");

    const fetchData = async () => {
        try {
            if (userName !== "") {
                let data = await fetch(`https://api.github.com/users/${userName}`);
                let json = await data.json();
                console.log(json);
                setGithubData(json)
                setLoading(false);
            }

        }
        catch (err) {
            setError(true);
            console.log(err);
        }
    }

    const handleClick = () => {
        setUserName(searchText)
        setSearchText("")
    }


    useEffect(() => {
        fetchData();
    }, [userName])


    return (
        <div className="main-container">
            <div className="search-container">
                <input className="input-field" type="text" placeholder="Search Github Username.." value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="btn-search" onClick={handleClick}>Search</button>
            </div>
            {githubData?.message ? <div className="error">Not Found</div> : !error && githubData ?
                <div className="result-container">
                    <img className="image" src={githubData.avatar_url} />
                    <div className="info-container">
                        <div><b>Name</b>: <a href={githubData.html_url} target="blank">{githubData.login}</a></div>
                        <div><b>Public Repos</b>: {githubData.public_repos}</div>
                        <div><b>Followers</b>: {githubData.followers}</div>
                        <div><b>Following</b>: {githubData.following}</div>
                    </div>
                </div>
                : null}

        </div>
    )
}

export default GithubProfile;