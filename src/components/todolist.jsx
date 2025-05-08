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
    <ul className="max-w-[600px] m-[auto] flex flex-col items-center gap-[10px] bg-navyblue text-gray-200">
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
