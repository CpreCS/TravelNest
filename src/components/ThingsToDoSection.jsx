import React, { useRef } from "react";

export default function ThingsToDoSection({
  currentTasks = [],
  addingTask = false,
  newTask = "",
  setNewTask = () => {},
  startAddingTask = () => {},
  cancelAddingTask = () => {},
  addTask = () => {},
  toggleTaskCompleted = () => {},
  deleteTask = () => {},
  taskInputRef = null,
  maxHeight = "40vh"
}) {
  // Use 40vh for the scrollable list, progress bar always visible below
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Things To Do</h4>
      {currentTasks.length === 0 ? (
        <p className="text-gray-700">No tasks yet. Add your first one above.</p>
      ) : (
        <>
          <div style={{ maxHeight: maxHeight, overflowY: "auto", paddingRight: 4 }}>
            <ul className="space-y-2">
              <li className="px-2 pb-1">
                <span className="text-xs text-gray-600 ml-1">
                  ✔ Completed ({currentTasks.filter(t => t.completed).length}) ▴
                </span>
              </li>
              {currentTasks.map((task, idx) => (
                <li key={task.id || idx} className="p-2 bg-white rounded border border-gray-200 flex items-start gap-3">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <label htmlFor={`task-${task.id}`} className="sr-only">
                      Mark task as {task.completed ? 'incomplete' : 'complete'}
                    </label>
                    <input
                      id={`task-${task.id}`}
                      type="checkbox"
                      checked={task.completed || false}
                      onChange={() => toggleTaskCompleted(task.id)}
                      className="h-4 w-4 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <span className={`flex-1 text-gray-800 break-all ${task.completed ? "line-through" : ""}`}>
                    {task.text}
                  </span>
                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    className="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Delete task"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 w-full">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Progress</h4>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-sm text-gray-700">
                <strong>{currentTasks.filter(t => t.completed).length} of {currentTasks.length}</strong> tasks complete
              </span>
              <span className="text-sm font-bold text-gray-800">
                {Math.round((currentTasks.filter(t => t.completed).length / currentTasks.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentTasks.filter(t => t.completed).length / currentTasks.length) * 100}%` }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
