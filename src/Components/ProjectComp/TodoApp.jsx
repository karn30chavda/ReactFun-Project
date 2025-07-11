import { BanknoteX, ListTodo, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { TodoProvider } from "../../context/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Add todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Update todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle check
  const todoToggle = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, todoChecked: !prevTodo.todoChecked }
          : prevTodo
      )
    );
  };

  // Load from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, todoToggle }}
    >
      <div className="w-full md:w-[80%] h-[95%] md:min-h-[70vh] rounded-xl bg-gradient-to-br from-slate-900 to-gray-800 text-white p-6">
        <h1 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl font-extrabold text-center mb-8 text-blue-400">
          <ListTodo size={32} strokeWidth={2.4} />
          Todo Manager
        </h1>

        <div className="max-w-3xl mx-auto bg-slate-700/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-600">
          <h2 className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-semibold mb-6 text-white">
            <PlusCircle size={20} />
            Track Your Tasks Effortlessly
          </h2>

          <div className="mb-6">
            <TodoForm />
          </div>

          <div className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-gray-400 font-semibold">
                No todos yet
                <BanknoteX className="inline align-middle ml-1" size={30} />
              </p>
            ) : (
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default TodoApp;
