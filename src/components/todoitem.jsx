import TodoText from "./todotext";

export default function TodoItem({
  setEditText,
  startEditing,
  remove,
  saveEdit,
  handleKeyDown,
  editingId,
  editText,
  todo,
  toggleTodo,
}) {
  return (
    <li className="w-full flex items-center gap-2 p-2 rounded">
      {editingId === todo.id ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-blue-800/50 text-gray-200 px-2 py-1 rounded"
          autoFocus
        />
      ) : (
        <TodoText
          todo={todo}
          startEditing={startEditing}
          remove={remove}
          toggleTodo={toggleTodo}
        />
      )}
    </li>
  );
}
