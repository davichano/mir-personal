import {useEffect, useState} from "react";

export const useRandomNumber = function (min, max) {
    const [number, setNumber] = useState(min);

    useEffect(() => {
        setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    }, [min, max]);

    return number;
}