import {useEffect, useState} from "react";

export const UseFindById = function (list, id) {
    const [item, setItem] = useState(null);
    useEffect(() => {
        const itemFound = list.find(item => Number(item.id) === Number(id));
        setItem(itemFound);
    }, [list, id]);

    return item;
}

