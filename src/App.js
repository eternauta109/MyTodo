import "./styles.css";
/* import { useEffect, useRef, useState } from "react"; */
import AddTodo from "./container/addnew";
import Header from "./components/header";
import TodoFooter from "./container/footerContainer";

import MyTodoList from "./container/mytodolist";

export default function App() {
  /*  const [todos, setTodo] = useState([]);
  const todoInput = useRef(); */

  /*   useEffect(() => {
    setTodo(store.getState().todos);
    store.subscribe(() => {
      console.log("subscribe", store.getState());
      setTodo(store.getState().todos);
    });
  }, []); */

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTodo />
        <MyTodoList />
        <TodoFooter />
      </div>
    </div>
  );
}
