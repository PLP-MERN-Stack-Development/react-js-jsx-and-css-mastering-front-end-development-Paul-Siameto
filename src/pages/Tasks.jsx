import React from "react";
import TaskManager from "../components/TaskManager";

function Tasks() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Tasks</h1>
      <TaskManager />
    </div>
  );
}

export default Tasks;