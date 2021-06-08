import Todo from "./todo";

function todoList({ todos, removeTodo, toggleTodo }) {
  /* console.log('todolist',todos) */
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <Todo
            key={todo.id}
            todoItem={todo}
            id={todo.id}
            onClick={() => {
              toggleTodo(todo.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default todoList;
