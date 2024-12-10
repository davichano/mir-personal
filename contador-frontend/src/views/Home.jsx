import React, {useContext} from "react";
import {StartupContext} from "../context/StartupContext.jsx";
import {StartUp} from "../components/StartUp.jsx";

function Home() {
  const {startUps} = useContext(StartupContext);
  return (
    <section className={"py-5"}>
      <h2>Emprendimientos Registrados</h2>
      <hr/>
      <div className={"row justify-content-center"}>
        {
          startUps.map((startUp, index) => (
            <div className={"col-md-3"} key={startUp.id}>
              <StartUp id={startUp.id + "-" + index} name={startUp.name} logo={startUp.logo} ruc={startUp.ruc}/>
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
