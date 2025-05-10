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
  todosLength,
  checkedTodo,
  percentageChecked
}) {
    const completedTodo = todosLength === checkedTodo

    if (!todosLength) {
        return (
            <h4 className="max-w-[600px] m-[auto] flex flex-col items-center gap-[10px] bg-blue-950 text-gray-200 p-4">
                <em>
                    Your Todo tasks will appear here... Click on (Add Todo) button to add Tasks
                </em>
            </h4>
        ) 
    }

  return (
    <>
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
            {percentageChecked === 100 ? <p className="text-yellow-500"><em>Congratulation! You've completed your tasks 🤪🥰🤝</em></p> : <p>You currently have <strong className="text-yellow-500">( {todosLength} )</strong>  todo tasks in total. And you already completed <strong className="text-yellow-500">( {checkedTodo} )</strong> ({percentageChecked}%)</p>}
        </ul>


    </>
  );
}
