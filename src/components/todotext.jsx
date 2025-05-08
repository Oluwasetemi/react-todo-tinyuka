import { FaTrash } from "react-icons/fa";

export default function TodoText({ todo, remove, startEditing }) {
  return (
    <>
      <TodoContext startEditing={startEditing} todo={todo}>
        {todo.text}
      </TodoContext>
      <TodoDeleteButton remove={remove} todoId={todo.id} />
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

export function TodoDeleteButton({ remove, todoId }) {
  return (
    <button className="ml-[10px]" onClick={() => remove(todoId)}>
      <FaTrash />
    </button>
  );
}
