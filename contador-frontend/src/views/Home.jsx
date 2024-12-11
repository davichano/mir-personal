// eslint-disable-next-line no-unused-vars
import React, {useContext} from "react";
import {StartupContext} from "../context/StartupContext.jsx";
import {StartUp} from "../components/StartUp.jsx";

function Home() {
  const {startUps} = useContext(StartupContext);
  if (!Array.isArray(startUps)) {
    return <p>No se encontraron datos.</p>;
  }
  return (
    <section className={"py-5"}>
      <h2>Emprendimientos Registrados</h2>
      <hr/>
      <div className={"row justify-content-center"}>
        {
          startUps.map((startUp, index) => (
            <div className={"col-md-3"} key={startUp.id}>
              <StartUp id={startUp.id + "-" + index} name={startUp.company_name} logo={startUp.company_logo}
                       description={startUp.company_description}/>
            </div>
          ))
        }
      </div>
      <h1>Hola mundo</h1>
      <p>Ya funciona</p>
    </section>
  )
}

export default Home;
