import React from "react";
import "./styles/tailwind.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Form from "./components/form.jsx";
import TodoList from "./components/todolist.jsx";

function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [text, setText] = React.useState("");
  const [editingId, setEditingId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  const createTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { id: id, text: text, completed: false }]);
    setId(id + 1);
    setText("");
  };

  const remove = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: editText + " ✅" } : todo,
      ),
    );
    setEditingId(null);
    setEditText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") {
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <div id="todoapp">
      {/* <form onSubmit={createTodo}>
        <input
          type="text"
          placeholder="enter a new todo"
          value={text}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
        <button type="submit">Add ToDo</button>
      </form> */}
      <Form createTodo={createTodo} setText={setText} text={text} />
      {/* <ul style={{ padding: "5px" }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} style={{ display: "flex" }}>
              {editingId === todo.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={saveEdit}
                    onKeyDown={handleKeyDown}
                    autoFocus
                  />
                </>
              ) : (
                <>
                  <span
                    style={{ flex: 1 }}
                    onDoubleClick={() => startEditing(todo)}
                  >
                    {todo.text}
                  </span>
                  <button onClick={() => remove(todo.id)}>❌</button>
                </>
              )}
            </li>
          );
        })}
      </ul> */}
      <TodoList
        todos={todos}
        setEditText={setEditText}
        startEditing={startEditing}
        remove={remove}
        saveEdit={saveEdit}
        handleKeyDown={handleKeyDown}
        editingId={editingId}
        editText={editText}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

const styles = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  margin: "0 auto",
  display: "block",
  border: "2px solid #000",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s",
};

let rootElement = document.querySelector("#app");
let root = createRoot(rootElement);
root.render(<TodoApp />);
