import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";

function TodoBox({ todos , Completed, index, DeleteTodo }) {
  return (
    <>
      <div key={todos.id} className=" flex justify-center mt-3 px-4">
        <div className="bg-white shadow-md lg:w-1/3 md:w-full py-2 px-4 rounded-md flex items-center gap-4">
          <input
            type="checkbox"
            className=" cursor-pointer"
            onChange={() => Completed(index)}
            checked={todos.check || false}
          />
          <div className=" w-full">
            <h1
              className={`w-full border-b-2 border-gray-50 outline-none font-semibold uppercase text-sm ${
                todos.check
                  ? "line-through -tracking-tighter text-orange-500"
                  : ""
              }`}
            >
              {todos.title}
            </h1>
            <p
              className={`w-full text-sm border-gray-100 outline-none text-gray-500 ${
                todos.check
                  ? "line-through -tracking-tighter text-orange-500"
                  : ""
              }`}
            >
              {todos.desc}
            </p>
          </div>
          <MdOutlineDeleteSweep
            className=" text-3xl text-red-700 cursor-pointer"
            onClick={() => DeleteTodo(index)}
          />
        </div>
      </div>
    </>
  );
}

export default TodoBox;
