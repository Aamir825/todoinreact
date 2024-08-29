import React from "react";
import TodoBox from "../TodoBox/TodoBox";

export default function TodoItems({ todoData, Completed, DeleteTodo}) {
  return (
    <>
      {/* Todo Items */}
      {todoData.map((todos, index) => {
        return <TodoBox todos={todos} Completed={Completed} DeleteTodo={DeleteTodo} index={index}/>;
      })}
    </>
  );
}
