import { useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

export function useTasks(selectedCountry) {
  const [tasksByCountry, setTasksByCountry] = useState(() => getFromStorage('tasks') || {});
  const [addingTask, setAddingTask] = useState(false);
  const [newTask, setNewTask] = useState('');

  const currentCca2 = selectedCountry?.cca2;
  const currentTasks = (currentCca2 && Array.isArray(tasksByCountry[currentCca2])) ? tasksByCountry[currentCca2] : [];

  useEffect(() => {
    saveToStorage('tasks', tasksByCountry);
  }, [tasksByCountry]);

  useEffect(() => {
    setAddingTask(false);
    setNewTask('');
  }, [currentCca2]);

  function startAddingTask() {
    setAddingTask(true);
  }

  function cancelAddingTask() {
    setAddingTask(false);
    setNewTask('');
  }

  function addTask() {
    const text = newTask.trim();
    if (!text || !currentCca2) return;
    const newTaskObj = { 
      id: Date.now(), 
      text: text, 
      completed: false 
    };
    const nextTasks = [...currentTasks, newTaskObj];
    setTasksByCountry(prev => ({ ...prev, [currentCca2]: nextTasks }));
    setNewTask('');
    setAddingTask(false);
  }

  function toggleTaskCompleted(taskId) {
    if (!currentCca2) return;
    const updatedTasks = currentTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasksByCountry(prev => ({ ...prev, [currentCca2]: updatedTasks }));
  }

  function deleteTask(taskId) {
    if (!currentCca2) return;
    const updatedTasks = currentTasks.filter(task => task.id !== taskId);
    setTasksByCountry(prev => ({ ...prev, [currentCca2]: updatedTasks }));
  }

  return {
    currentTasks,
    tasksByCountry,
    addingTask,
    newTask,
    setNewTask,
    startAddingTask,
    cancelAddingTask,
    addTask,
    toggleTaskCompleted,
    deleteTask
  };
}
