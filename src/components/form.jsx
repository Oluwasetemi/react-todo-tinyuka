export default function Form({ createTodo, setText, text }) {
  return (
    <form className="max-w-[600px] m-[auto] flex flex-col items-center bg-navyblue text-gray-200 border-gray-500" onSubmit={createTodo}>
      <h1 className="text-2xl text-center font-semibold mt-[2rem] mb-[1rem]">Todo App</h1>
      <input
        className="p-2 border-2 rounded placeholder:capitalize w-full max-w-[400px] text-center text-gray-600"
        type="text"
        placeholder="enter a new todo"
        value={text}
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      <button className="ml-2 bg-mustard px-[25px] py-[5px] mt-[20px] text-gray-600 rounded mb-[20px] font-semibold" type="submit">
        Add Todo
      </button>
    </form>
  );
}
