import React, {useContext} from "react";
import {StartupContext} from "../context/StartupContext.jsx";
import {useParams} from 'react-router-dom';
import {UseFindById} from "../hooks/useFindById.jsx"
import {useIncomes} from "../hooks/useIncomes.jsx";
import {useOutcomes} from "../hooks/useOutcomes.jsx";
import {StartUp} from "../components/StartUp.jsx";
import {Income} from "../components/Income.jsx";
import {Outcome} from "../components/Outcome.jsx";

function StartUpView() {
    const {id} = useParams();
    const {startUps} = useContext(StartupContext);
    const startUp = UseFindById(startUps, id);
    let id_search = 1;
    if (startUp !== null && startUp !== undefined) {
        id_search = startUp.id;
    }
    const incomes = useIncomes(id_search);
    const outcomes = useOutcomes(id_search);
    return (
        <section>
            {startUp && (
                <section>
                    <div className={"row justify-content-center my-3 start-up-info"}>
                        <div className={"col-md-6 mb-5"}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <p className={"text-center"}>
                                        <img src={startUp.logo} alt="logo"/>
                                    </p>
                                    <h1 className={"text-bg-info mb-3"}>{startUp.name}</h1>
                                    <div className={"row"}>
                                        <div className={"col-md-6 mb-3"}>
                                            <p><span className={"fw-bold"}>Código:</span> {startUp.id}</p>
                                        </div>
                                        <div className={"col-md-6 mb-3"}>
                                            <p><span className={"fw-bold"}>RUC:</span> {startUp.ruc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row justify-content-center mb-3 start-up-info"}>
                        <div className={"col-md-6 mb-5"}>
                            <div className={"card"}>
                                <div className={"card-header"}>Ingresos</div>
                                <div className={"card-body"}>
                                    <div className={"row justify-content-center mb-3 start-up-info"}>
                                        {
                                            incomes.map((income, index) => (
                                                <div className={"col-md-4 mb-3"}>
                                                    <Income id={income.id} date={income.date} amount={income.amount}
                                                            customer={income.customer}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-6 mb-5"}>
                            <div className={"card"}>
                                <div className={"card-header"}>Egresos</div>
                                <div className={"card-body"}>
                                    <div className={"row justify-content-center mb-3 start-up-info"}>
                                        {
                                            outcomes.map((outcome, index) => (
                                                <div className={"col-md-4 mb-3"}>
                                                    <Outcome id={outcome.id} date={outcome.date} amount={outcome.amount}
                                                            seller={outcome.seller} buyer={outcome.buyer}
                                                            comment={outcome.comment}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </section>
    )
}

export default StartUpView;
