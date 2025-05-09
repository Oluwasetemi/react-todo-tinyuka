import { FaTrash } from "react-icons/fa";

export default function TodoText({ todo, remove, startEditing }) {
  return (
    <>
      <TodoContext startEditing={startEditing} todo={todo}>
        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      </TodoContext>
      <TodoDeleteButton remove={remove} todoId={todo.id} />
    </>
  );
}

export function TodoContext({ startEditing, children, todo }) {
  return (
    <div className="flex-1" onDoubleClick={() => startEditing(todo)}>
      {children}
    </div>
  );
}

export function TodoDeleteButton({ remove, todoId }) {
  return (
    <button 
      className="ml-[10px] text-gray-400 hover:text-red-500 transition-colors" 
      onClick={() => remove(todoId)}
    >
      <FaTrash />
    </button>
  );
}
