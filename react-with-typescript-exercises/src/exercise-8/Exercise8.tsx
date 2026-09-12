import { useState } from "react";

// 1 Counter


export function Counter() {
  // Create a count state with useState strictly typed as a number
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment} style={{ marginLeft: "8px" }}>
        Increment
      </button>
    </div>
  );
}


// 2 User State

// Define user object interface
export interface User {
  username: string;
  email: string;
}

export function UserState() {
  // Initial state: null, typed as User | null
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    setUser({
      username: "Hassan",
      email: "hassan@example.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {/* Only render user data if it's not null */}
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>No user data available (user is null).</p>
          <button onClick={handleLogin}>Log In User</button>
        </div>
      )}
    </div>
  );
}

// 3.Todo List


// Create Todo interface
export interface Todo {
  id: number;
  task: string;
  done: boolean;
}

export function TodoList() {
  // Create state for a Todo[]
  const [todos, setTodos] = useState<Todo[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  const handleAddTodo = () => {
    const newTask = taskInput.trim() || `New Task ${todos.length + 1}`;
    const newTodo: Todo = {
      id: Date.now(),
      task: newTask,
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTaskInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task description (optional)"
        />
        <button onClick={handleAddTodo} style={{ marginLeft: "8px" }}>
          Add Todo
        </button>
      </div>

      {todos.length === 0 ? (
        <p>No todos yet. Click "Add Todo" to add one.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.task} {todo.done ? "(Done)" : "(Pending)"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


// Wrap all questions in Exercise 8 Component


export function Exercise8() {
  return (
    <div>
      <h1>Exercise 8</h1>

      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>User State</h2>
        <UserState />
      </section>

      <section>
        <h2>Todo List</h2>
        <TodoList />
      </section>
    </div>
  );
}

export default Exercise8;
