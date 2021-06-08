export const addTodo = (todo) => {
  //laction del reducer contiene questa dispatch
  return {
    type: "add_todo",
    /* todo //proprietà e valore hanno lo stesso nome */

    payload: {
      text: todo,
      complete: false
    }
  };
};

export const removeTodo = (i) => {
  //laction del reducer contiene questa dispatch

  return {
    type: "remove_todo",
    id: i //proprietà e valore hanno lo stesso nome
  };
};

export const toggleTodo = (i) => {
  //laction del reducer contiene questa dispatch

  return {
    type: "toggle_todo",
    id: i //proprietà e valore hanno lo stesso nome
  };
};

export const filterTodo = (filter = "ALL") => {
  //laction del reducer contiene questa dispatch

  return {
    type: "SET_FILTER",
    active: filter
  };
};
