import { connect } from "react-redux";
import TodoList from "../components/todolist";
import { removeTodo, toggleTodo } from "../actions/index";

const filterMyTodo = (todos = [], filter = "ALL") => {
  /* console.log("MyTodoList/filtermytodo:", todos); */
  switch (filter) {
    case "TODO":
      return todos.filter((todo) => !todo.complete);

    case "COMPLETED":
      return todos.filter((todo) => todo.complete);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  /* console.log("MyTodoList", state.todos);
  console.log("MyTodoList", state.activeFilter); */
  return {
    todos: filterMyTodo(state.todos, state.activeFilter)
  };
};
/* con connect collego lo store con il componente
const myConnect= connect(madStateToProps)
const MyTodoList=myConnect(TodoList) 
o in breve..
*/

const MyTodoList = connect(mapStateToProps, { removeTodo, toggleTodo })(
  TodoList
);
export default MyTodoList;
