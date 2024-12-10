import {useEffect, useState} from "react";
import {useRandomNumber} from "./useRandomNumber.jsx";

export const useIncomes = function (id) {
    const [incomes, setIncomes] = useState([]);
    let day = useRandomNumber(1, 28);
    let month = useRandomNumber(1, 4);
    let amount = useRandomNumber(0, 300);

    useEffect(() => {
        let id_income = 1;
        const newIncomes = [];
        for (let j = 1; j < 5; j++) {
            let a_day = Math.round(day / j) + 1;
            let a_month = Math.round(month / j) + 1;
            let a_amount = Math.round(amount / j) + 1;
            newIncomes.push({
                id: id_income++,
                date: a_day + '/' + a_month + '/2024',
                customer: `Customer ${id_income}`,
                amount: a_amount,
                startup_id: id
            });
        }
        setIncomes(newIncomes)
    }, [id]);
    return incomes;
}
