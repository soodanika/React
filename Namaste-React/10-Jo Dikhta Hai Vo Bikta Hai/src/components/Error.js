import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (<div>
        <h1 className="error">Oopsss...</h1>
        <h2 className="error">Something went wrong!</h2>
        <h3 className="error">{err.status}: {err.statusText}</h3>
    </div>)
}

export default Error;