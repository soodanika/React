import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (<div>
        <h1 className="error">Oopsss...</h1>
        <h3 className="error">Something went wrong!</h3>
        <p className="error">{error.status} {error.statusText}</p>
    </div>)
}

export default Error;