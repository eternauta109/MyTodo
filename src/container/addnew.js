import { connect } from "react-redux";
import addTodoComponent from "../components/addTodo";
import { addTodo } from "../actions";

/* const mapDispatchToProps = (dispatch) => {
   return {
    addnew: (todo) => {
      dispatch(addTodo(todo));
    }
  };
}; */
//sintassi corta
const methods = {
  addnew: addTodo
};

//iparametrili passa i automatico
export default connect(null, methods)(addTodoComponent);
