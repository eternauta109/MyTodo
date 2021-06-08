function addTodoComponent({ addnew }) {
  let todoInput;
  return (
    <div className="addTodoClass">
      <input
        onKeyUp={(evt) => {
          if (evt.keyCode === 13) {
            addnew(todoInput.value);
            todoInput.value = "";
          }
        }}
        ref={(node) => {
          todoInput = node;
        }}
      />
      <button
        onClick={() => {
          addnew(todoInput.value);
          todoInput.value = "";
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default addTodoComponent;
