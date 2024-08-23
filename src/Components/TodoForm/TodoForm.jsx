import React, { useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";

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

  const Completed = (index) =>{
    let checked = todoData[index].check = !todoData[index].check;
    setIsCompleted(checked);
    localStorage.setItem("TodosData", JSON.stringify(todoData));
    console.log(index)
  }

  const DeleteTodo = (index) =>{
    let deleted = todoData.splice(index,1);
    setIsDeleted(deleted);
    localStorage.setItem("TodosData", JSON.stringify(todoData));
  }

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

      {/* Todo filter menu*/}
      <div className=" flex justify-center mt-3">
        <div className=" w-1/3">
          <ul className="flex gap-3 uppercase text-sm text-gray-400 font-semibold">
            <li className={`hover:text-black cursor-pointer ${filter === "all" ? ' text-black': ''}`} onClick={()=> setFilter("all")}>All</li>
            <li className={`hover:text-black cursor-pointer ${filter === "completed" ? ' text-black': ''}`} onClick={()=> setFilter("completed")}>Completed</li>
            <li className={`hover:text-black cursor-pointer ${filter === "uncompleted" ? ' text-black': ''}`} onClick={()=> setFilter("uncompleted")}>Uncompleted</li>
          </ul>
        </div>
      </div>

      {/* Todo Items */}
      {todoData.map((todos, index) => {
        return (
          <div className=" flex justify-center mt-3">
            <div className="bg-white shadow-md w-1/3 py-2 px-4 rounded-md flex items-center gap-2">
              <input
                type="checkbox"
                className=" cursor-pointer"
                onClick={() => Completed(index)}
                checked={todos.check || false}
              />
              <input
                type="text"
                className={`w-full py-1 border-b-2 border-gray-50 outline-none ${
                  todos.check ? "line-through -tracking-tighter text-orange-500" : ""
                }`}
                value={todos.message}
                readOnly
              />
              <MdOutlineDeleteSweep
                className=" text-3xl text-red-700 cursor-pointer"
                onClick={() => DeleteTodo(index)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
