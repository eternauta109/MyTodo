function todo({ todoItem, onClick, id }) {
  return (
    <li
      className={todoItem.complete ? "complete" : ""}
      key={id}
      onClick={onClick}
    >
      <span className={todoItem.complete ? "complete" : "uncomplete"}></span>
      {todoItem.todo}
    </li>
  );
}

export default todo;
