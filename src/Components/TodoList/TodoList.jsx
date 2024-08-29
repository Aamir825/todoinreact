import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItems from "../TodoItems/TodoItems";
import TodoFilter from "../TodoFilter/TodoFilter";

function TodoList() {
  const [isCompleted, setIsCompleted] = useState();
  const [isDeleted, setIsDeleted] = useState();
  const [filter, setFilter] = useState("all");
  let todoData = JSON.parse(localStorage.getItem("TodosData")) ?? [];

  const [todotitle, setTodoTitle] = useState();
  const [todoDesc, setTodoDesc] = useState();
  const AddTodo = (e) => {
    todoData.push({
      id: todoData.length,
      title: todotitle,
      desc: todoDesc,
      check: false,
    });
    localStorage.setItem("TodosData", JSON.stringify(todoData));
    e.preventDefault();
    setTodoTitle("");
    setTodoDesc("");
  };

  const Completed = (index) => {
    let checked = (todoData[index].check = !todoData[index].check);
    setIsCompleted(checked);
    localStorage.setItem("TodosData", JSON.stringify(todoData));
    console.log(index);
  };

  const DeleteTodo = (index) => {
    let deleted = todoData.splice(index, 1);
    setIsDeleted(deleted);
    localStorage.setItem("TodosData", JSON.stringify(todoData));
  };

  return (
    <>
      {/* Todo Form */}
      <TodoForm
        AddTodo={AddTodo}
        todotitle={todotitle}
        todoDesc={todoDesc}
        setTodoTitle={setTodoTitle}
        setTodoDesc={setTodoDesc}
      />

      {/* Todo Filters */}
      <TodoFilter filter={filter} />

      {/* Todo items */}
      <TodoItems
        todoData={todoData}
        Completed={Completed}
        DeleteTodo={DeleteTodo}
      />
    </>
  );
}

export default TodoList;
