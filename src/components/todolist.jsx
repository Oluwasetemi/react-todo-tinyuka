import TodoItem from "./todoitem";

export default function TodoList({
  todos,
  setEditText,
  startEditing,
  remove,
  saveEdit,
  handleKeyDown,
  editingId,
  editText,
  toggleTodo,
}) {
  return (
    <ul className="max-w-[600px] m-[auto] flex flex-col items-center gap-[10px] bg-blue-950 text-gray-200 p-4">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            setEditText={setEditText}
            startEditing={startEditing}
            remove={remove}
            saveEdit={saveEdit}
            handleKeyDown={handleKeyDown}
            editingId={editingId}
            editText={editText}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
}
