import './App.css';
import './resources/css/main.scss';

import {Header} from "./components/template/Header.jsx";
import {Footer} from "./components/template/Footer.jsx";
import {AccountantRouter} from "./router/AccountantRouter";
import {StartupContext} from "./context/StartupContext.jsx";
import {useStartUps} from "./hooks/useStartUps.jsx";

function App() {
  const startUps = useStartUps();
  return (
    <div className="App">
      <Header></Header>
      <StartupContext.Provider value={{ startUps: startUps.startUps || [] }}>        <div className={"container"}>
          <AccountantRouter></AccountantRouter>
        </div>
      </StartupContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
