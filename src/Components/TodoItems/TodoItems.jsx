import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";

export default function TodoItems({ todoData, Completed, DeleteTodo }) {
  return (
    <>
      {/* Todo Items */}
      {todoData.map((todos, index) => {
        return (
          <div className=" flex justify-center mt-3">
            <div className="bg-white shadow-md lg:w-1/3 md:wfull py-2 px-4 rounded-md flex items-center gap-2">
              <input
                type="checkbox"
                className=" cursor-pointer"
                onClick={() => Completed(index)}
                checked={todos.check || false}
              />
              <input
                type="text"
                className={`w-full py-1 border-b-2 border-gray-50 outline-none ${
                  todos.check
                    ? "line-through -tracking-tighter text-orange-500"
                    : ""
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
