export default function Form({ createTodo, setText, text }) {
  return (
    <form onSubmit={createTodo}>
      <input
        className="p-2 border-2 rounded placeholder:capitalize"
        type="text"
        placeholder="enter a new todo"
        value={text}
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      <button className="ml-2" type="submit">
        Add ToDo
      </button>
    </form>
  );
}
