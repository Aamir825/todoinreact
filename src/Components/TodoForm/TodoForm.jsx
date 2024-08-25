import React, { useState } from "react";
import TodoItems from "../TodoItems/TodoItems";
import TodoFilter from "../TodoFilter/TodoFilter";

export default function TodoForm() {
  const [todo, setTodo] = useState();
  const [isCompleted, setIsCompleted] = useState();
  const [isDeleted, setIsDeleted] = useState();
  const [filter, setFilter] = useState("all");
  let todoData = JSON.parse(localStorage.getItem("TodosData")) ?? [];

  const AddTodo = (e) => {
    console.log(todo);
    console.log(todoData);
    todoData.push({
      id: todoData.length,
      message: todo,
      check: false,
    });
    localStorage.setItem("TodosData", JSON.stringify(todoData));
    e.preventDefault();
    setTodo("");
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

  // const handleChange = (e) =>{
  //   const isChecked = e.target.checked;
  //   setIsCompleted(isChecked)
  // }

  return (
    <>
      {/* Todo Form */}
      <div className=" flex justify-center my-6">
        <div className=" bg-white shadow-md w-1/3 rounded-md">
          <form onSubmit={AddTodo} className=" flex">
            <input
              type="text"
              placeholder="Write Todo..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className=" border-2 border-gray-50 py-2 px-3 outline-none w-full"
            />
            <button
              type="submit"
              className=" bg-slate-800 text-white py-1 px-4 border-2 border-slate-800 rounded-e-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Todo Filters */}
      <TodoFilter filter={filter} />

      {/* Todo items */}
      <TodoItems
        todoData={todoData}
        completed={Completed}
        DeleteTodo={DeleteTodo}
      />
    </>
  );
}
