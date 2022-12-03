import { Task, TaskProps } from "../Task";
import { useState, useEffect } from "react";
import { delTask, donTask, getTask, setTask } from "./TaskService/task.service";
import { VscAdd } from "react-icons/vsc";

export function TodoList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  async function carregaTasks() {
    setTasks(await getTask());
  }

  useEffect(() => {
    carregaTasks();
  }, []);

  async function createNewTask() {
    await setTask(newTask);
    await carregaTasks();
    setNewTask('')
  }

  async function removeTask(task: any) {
    await delTask(task.id)
    await carregaTasks();
  }

  //   async function completeTaks(task: any) {
  //   console.log(await donTask(task.done))
    
  // }

  return (
    <div className="bg-gray-800 flex h-screen justify-center items-center">
      <div className="bg-slate-900 p-20 w-10/12 rounded-lg text-neutral-50">
        <div className="text-4xl mb-3 font-bold text-center font-display">
          Todo List
        </div>
        <div className="flex w-12/12 text-center">
          <input
          value={newTask}
            className="p-3 w-full mr-2 border-2 border-slate-400 rounded-md text-black text-xl"
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-slate-700 hover:bg-blue-500 w-2/12 rounded flex justify-center items-center text-3xl transition"
            onClick={() => createNewTask()}
          >
            <VscAdd />
          </button>
        </div>
        {tasks.length > 0 &&
          tasks.map((task, index) => {
            return <Task deleteTask={() => removeTask(task)} title={task.title} key={index} />;
          })}
      </div>
    </div>
  );
}
