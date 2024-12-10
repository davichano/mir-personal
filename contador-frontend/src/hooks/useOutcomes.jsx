import {useEffect, useState} from "react";
import {useRandomNumber} from "./useRandomNumber.jsx";

export const useOutcomes = function (id) {
    const [outcomes, setOutcomes] = useState([]);
    let day = useRandomNumber(1, 28);
    let month = useRandomNumber(1, 4);
    let amount = useRandomNumber(0, 300);

    useEffect(() => {
        let id_outcome = 1;
        const newOutcomes = [];
        for (let j = 0; j < 4; j++) {
            let a_day = Math.round(day / j) + 1;
            let a_month = Math.round(month / j) + 1;
            let a_amount = Math.round(amount / j) + 1;
            newOutcomes.push({
                id: id_outcome++,
                date: a_day + '/' + a_month + '/2024',
                seller: `Seller ${id_outcome}`,
                buyer: 'David Paredes',
                comment: 'Compras menores',
                amount: a_amount,
                startup_id: id
            });
        }
        setOutcomes(newOutcomes)
    }, [id]);
    return outcomes;
}
