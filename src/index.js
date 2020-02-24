import React,{useState} from 'react';
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
// import Calculator from './componentes/Calculator'
// import ejemploHooks from './componentes/ejemploHooks';

const Contador = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Estas clickeando {count} veces</p>
            <button onClick = {() => setCount(count+1)}>
                Clickeame!
            </button>
        </div>
    );
}


ReactDOM.render(<Contador/>, document.getElementById("root"));
serviceWorker.unregister();
