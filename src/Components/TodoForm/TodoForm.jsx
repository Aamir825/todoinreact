import React, { useState } from "react";
import TextInput from "../Inputs/TextInput";
import SubmitButton from "../Buttons/SubmitButton";

export default function TodoForm({
  AddTodo,
  todotitle,
  todoDesc,
  setTodoTitle,
  setTodoDesc,
}) {
  const handleTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setTodoDesc(e.target.value);
  };
  return (
    <>
      {/* Todo Form */}
      <div className=" flex justify-center my-6 px-4">
        <div className=" bg-white shadow-md lg:w-1/3 w-full rounded-md">
          <form onSubmit={AddTodo} className=" flex flex-col gap-3">
            <TextInput
              value={todotitle}
              placeholder="Write Todo..."
              onChange={handleTitleChange}
            />
            <TextInput
              value={todoDesc}
              placeholder="Write Todo Desc..."
              onChange={handleDescChange}
            />
            <SubmitButton type="submit"/>
          </form>
        </div>
      </div>
    </>
  );
}
