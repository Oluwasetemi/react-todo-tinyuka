export default function TodoText({ todo, remove, startEditing }) {
  return (
    <>
      <TodoContext startEditing={startEditing} todo={todo}>
        {todo.text}
      </TodoContext>
      <TodoDeleteButton remove={remove} />
    </>
  );
}

export function TodoContext({ startEditing, children, todo }) {
  return (
    <span style={{ flex: 1 }} onDoubleClick={() => startEditing(todo)}>
      {children}
    </span>
  );
}

export function TodoDeleteButton({ remove }) {
  return <button onClick={() => remove(todo.id)}>❌</button>;
}
