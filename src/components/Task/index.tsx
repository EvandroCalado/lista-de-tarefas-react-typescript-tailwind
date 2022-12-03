import { VscCheckAll, VscEdit, VscTrash } from "react-icons/vsc";

export type TaskProps = {
  id?: number,
  title: string;
  done?: string;
  deleteTask?: () => void
}

export function Task({title, deleteTask, done}: TaskProps) {

  return (
    <div className="tasks flex justify-center flex-col mt-5 text-lg">
      <div className="flex bg-gray-800 p-4 rounded-lg items-center shadow-lg justify-between">
        <div className="">{title}</div>
        <div className="acoes">
          <button className="bg-slate-700 mx-1 p-2 rounded hover:bg-yellow-500 transition">
            <VscEdit />
          </button>
          <button onClick={deleteTask} className="bg-slate-700 mx-1 p-2 rounded hover:bg-red-500 transition">
            <VscTrash />
          </button>
          <button className="bg-slate-700 mx-1 p-2 rounded hover:bg-green-500 transition">
            <VscCheckAll />
          </button>
        </div>
      </div>
    </div>
  );
}
