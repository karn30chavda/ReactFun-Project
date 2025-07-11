import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      todoChecked: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  todoToggle: (id) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const TodoProvider = ToDoContext.Provider;
