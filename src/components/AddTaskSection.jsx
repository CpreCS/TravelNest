import React from "react";

export default function AddTaskSection({
  addingTask = false,
  newTask = "",
  setNewTask = () => {},
  startAddingTask = () => {},
  cancelAddingTask = () => {},
  addTask = () => {},
  taskInputRef = null,
  handleTaskKeyDown = () => {},
}) {
  return (
    <div className="bg-white p-2 rounded-md border border-gray-200">
      {!addingTask ? (
        <button
          type="button"
          className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={startAddingTask}
        >
          + Add New Task
        </button>
      ) : (
        <div className="flex gap-2">
          <label htmlFor="new-task-input" className="sr-only">New task description</label>
          <textarea
            id="new-task-input"
            ref={taskInputRef}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleTaskKeyDown}
            placeholder="Type a task and press Enter"
            rows={2}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="button"
            className="px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={cancelAddingTask}
            aria-label="Cancel adding task"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
