import { FaTrash } from "react-icons/fa";

export default function TodoText({ todo, remove, startEditing, toggleTodo }) {
  return (
    <div className="flex items-center flex-1">
      <label className="flex items-center flex-1 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 mr-2"
        />
        <span
          className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
          onDoubleClick={() => startEditing(todo)}
        >
          {todo.text}
        </span>
      </label>
      <TodoDeleteButton remove={remove} todoId={todo.id} />
    </div>
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
