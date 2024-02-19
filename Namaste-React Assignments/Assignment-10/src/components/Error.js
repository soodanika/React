import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (<div>
        <h1 className="text-red-500 flex justify-center font-bold text-[24px]">Oopsss...</h1>
        <h3 className="text-red-500 flex justify-center text-[24px]">Something went wrong!</h3>
        <p className="text-red-500 flex justify-center text-[24px]">{error.status} {error.statusText}</p>
    </div>)
}

export default Error;