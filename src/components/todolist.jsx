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
}) {
  return (
    <ul style={{ padding: "5px" }}>
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
          />
        );
      })}
    </ul>
  );
}
