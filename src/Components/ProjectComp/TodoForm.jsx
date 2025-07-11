import { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import { PlusCircle } from "lucide-react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addingtodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, todoChecked: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={addingtodo}
      className="flex items-center bg-white/10 rounded-lg overflow-hidden shadow-md"
    >
      <input
        type="text"
        placeholder="Write a new task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
      />

      <button
        type="submit"
        className="flex items-center gap-1 px-4 py-2 text-white bg-green-600 hover:bg-green-700 transition-all font-semibold cursor-pointer"
      >
        <PlusCircle size={18} />
        Add
      </button>
    </form>
  );
}

export default TodoForm;
