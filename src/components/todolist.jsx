import TodoItem from "./todoitem";

const clickSound = new Audio("/sounds/click.mp3");
const updateSound = new Audio("/sounds/update.mp3");
const updatedSound = new Audio("/sounds/swipe.mp3");

function playClickSound(type = "click") {
  // Play sound only if file exists and user interaction
  if (type === "update") {
    updateSound.currentTime = 0;
    updateSound.play().catch(() => {});
    return;
  }

  if (type === "updated") {
    updatedSound.currentTime = 0;
    updatedSound.play().catch(() => {});
    return;
  }
  console.log(clickSound);
  clickSound.volume = 0.2;

  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
}

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
  percentageChecked,
}) {
  const completedTodo = todosLength === checkedTodo;

  // handle edit text
  const handleEditText = (e) => {
    saveEdit(e);
    playClickSound("updated");
  };

  const handleKeyDownWithSound = (e) => {
    if (e.key === "Enter") {
      handleKeyDown(e);
      playClickSound("updated");
    }
  };

  const handleToggleTodo = (id) => {
    toggleTodo(id);
    playClickSound("updated");
  };

  if (!todosLength) {
    return (
      <h4 className="max-w-[600px] m-[auto] flex flex-col items-center gap-[10px] bg-formBg text-primaryStatText p-4">
        <em>
          Your Todo tasks will appear here... Click on (Add Todo) button to add
          Tasks
        </em>
      </h4>
    );
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
              startEditing={(id) => {
                playClickSound("update");
                startEditing(id);
              }}
              remove={(id) => {
                playClickSound();
                remove(id);
              }}
              saveEdit={handleEditText}
              handleKeyDown={handleKeyDownWithSound}
              editingId={editingId}
              editText={editText}
              toggleTodo={handleToggleTodo}
            />
          );
        })}
        {percentageChecked === 100 ? (
          <p className="text-primaryStatText">
            <em>Congratulation! You've completed your tasks 🥪🥰👐</em>
          </p>
        ) : (
          <p>
            You currently have{" "}
            <strong className="text-secondaryStatText">
              ( {todosLength} )
            </strong>{" "}
            todo tasks in total. And you already completed{" "}
            <strong className="text-secondaryStatText">
              ( {checkedTodo} )
            </strong>{" "}
            ({percentageChecked}%)
          </p>
        )}
      </ul>
    </>
  );
}
