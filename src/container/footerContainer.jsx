import { connect } from "react-redux";
import footerTodo from "../components/todoFooter";
import { filterTodo } from "../actions/index";
/* const methods = {}; */

const mapStateToProps = (state) => {
  return {
    activeFilter: state.activeFilter
  };
};
//iparametrili passa i automatico
export default connect(mapStateToProps, { filterTodo })(footerTodo);
