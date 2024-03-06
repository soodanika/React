import { useEffect, useState } from "react";

const useTheme = (key, defaultValue) => {

    let [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key))
        }
        catch (err) {
            console.log(err);
            currentValue = defaultValue;
        }

        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]

}

export default useTheme;