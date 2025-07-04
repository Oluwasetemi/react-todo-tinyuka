import Button from "./button";

const clickSound = "/sounds/click.mp3";

export default function Form({
  todosLength,
  setTodos,
  createTodo,
  setText,
  text,
}) {
  function playClickSound() {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
  }

  function handleResetTodo(e) {
    e.preventDefault();
    setTodos([]);
    playClickSound();
  }

  function handleSubmit(e) {
    if (createTodo) {
      playClickSound();
    }
    // Let the form submit as normal
  }

  return (
    <form
      className="max-w-[600px] m-[auto] flex flex-col items-center bg-formBg text-text"
      onSubmit={(e) => {
        handleSubmit(e);
        createTodo(e);
      }}
    >
      <h1 className="text-2xl text-center font-semibold mt-[2rem] mb-[1rem]">
        Todo App
      </h1>
      <input
        className="p-2 border-2 rounded placeholder:capitalize w-full max-w-[400px] text-center text-gray-200"
        type="text"
        placeholder="enter a new todo"
        required
        value={text}
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      <div className="flex">
        <Button>Add Todo</Button>
        {todosLength > 0 && (
          <Button onClick={handleResetTodo}>Clear Todo</Button>
        )}
      </div>
    </form>
  );
}
