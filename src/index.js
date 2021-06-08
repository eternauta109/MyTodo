import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import storeReducer from "./reducers/index";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

let storeTodos = {
  activeFilter: "ALL",
  todos: [
    { id: 0, todo: "fare la spesa", complete: false },
    { id: 1, todo: "chiamare mamma", complete: true },
    { id: 2, todo: "spostare la luna", complete: false }
  ]
};

//carico lo state se salvato, dal localStorage

if (localStorage.getItem("MyTodo")) {
  const currState = JSON.parse(localStorage.getItem("MyTodo"));
  if (currState) {
    storeTodos = currState;
  }
}

//middleware..non chiarissime prima senza e poi con arrowfunction
//prima partira il mw logger  e poi logger 2. se tolgo il next interrompo la catena
//e logger 2 tanti saluti
/* function logger({ getState, dispatch }) {
  console.log("MIDDLEWARE CHIAMATO");
  return function (next) {
    
    return function (action) {
      console.log("STATO PRIMA DELLA CHIAMATA", getState());
      console.log("AZIONE", action);
      let result=next(action);
      console.log("STATO DOPO DELLA CHIAMATA", getState());
      console.log("RESULT", result);
      return result;
    };
  }; 
}*/

//occhio che il parametro state non è in realta lo state
// bensi il gatState e la Dispatch

/* const logger2=store => next => action =>{
  console.log("STATO PRIMA DELLA CHIAMATA 2", store);
  console.log("AZIONE 2", action);
  let result=next(action);
  console.log("STATO DOPO DELLA CHIAMATA 2", store);
  console.log("RESULT 2", result);
  return result;
} */

const store = createStore(
  storeReducer,
  { ...storeTodos },
  applyMiddleware(logger)
);

// ogni volta che cambio lo state lo leggo e lo
//salvo ne local storage
store.subscribe(() => {
  console.log("store subscribe", store.getState());
  const currState = JSON.stringify(storeTodos);
  localStorage.setItem("MyTodo", currState);
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
