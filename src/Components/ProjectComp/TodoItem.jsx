import { useState } from "react";
import { useTodo } from "../../context/index";
import { Pencil, Save, Trash2, CheckSquare } from "lucide-react";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, todoToggle } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const todocompleted = () => {
    todoToggle(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg shadow-md transition-all border ${
        todo.todoChecked
          ? "bg-green-600/80 border-green-500 text-white"
          : "bg-slate-800/50 border-slate-600 text-white"
      }`}
    >
      {/* ✅ Toggle Check */}
      <CheckSquare
        onClick={todocompleted}
        size={22}
        className={`cursor-pointer transition duration-200 ${
          todo.todoChecked
            ? "text-green-300 hover:text-green-200"
            : "text-gray-400 hover:text-green-500"
        }`}
      />

      {/* ✅ Todo Message Input */}
      <input
        type="text"
        className={`flex-grow px-2 py-1 rounded-md text-white bg-transparent focus:outline-none transition duration-200 ${
          isTodoEditable
            ? "border border-white/20 bg-white/10"
            : "border border-transparent"
        } ${
          todo.todoChecked
            ? "line-through text-white/60 opacity-80 cursor-not-allowed"
            : "cursor-text"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* ✏️ Edit/Save Button */}
      <button
        onClick={() => {
          if (todo.todoChecked) return;
          isTodoEditable ? editTodo() : setIsTodoEditable(true);
        }}
        disabled={todo.todoChecked}
        className={`transition duration-200 ${
          todo.todoChecked
            ? "text-gray-500 cursor-not-allowed"
            : "text-blue-300 hover:text-blue-500 cursor-pointer"
        }`}
      >
        {isTodoEditable ? <Save size={20} /> : <Pencil size={20} />}
      </button>

      {/* ❌ Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-400 hover:text-red-500 transition duration-200 cursor-pointer"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}

export default TodoItem;
