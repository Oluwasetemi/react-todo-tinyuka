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
}) {
  return (
    <li key={todo.id} style={{ display: "flex" }}>
      {editingId === todo.id ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={handleKeyDown}
            // autoFocus
          />
        </>
      ) : (
        <>
          <TodoText todo={todo} startEditing={startEditing} remove={remove} />
        </>
      )}
    </li>
  );
}
