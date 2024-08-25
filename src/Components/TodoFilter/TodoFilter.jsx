import React from "react";

function TodoFilter({ filter }) {
  return (
    <>
      {/* Todo filter menu*/}
      <div className=" flex justify-center mt-3">
        <div className=" lg:w-1/3 md:wfull">
          <ul className="flex gap-3 uppercase text-sm text-gray-400 font-semibold">
            <li
              className={`hover:text-black cursor-pointer ${
                filter === "all" ? " text-black" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </li>
            <li
              className={`hover:text-black cursor-pointer ${
                filter === "completed" ? " text-black" : ""
              }`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </li>
            <li
              className={`hover:text-black cursor-pointer ${
                filter === "uncompleted" ? " text-black" : ""
              }`}
              onClick={() => setFilter("uncompleted")}
            >
              Uncompleted
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoFilter;
