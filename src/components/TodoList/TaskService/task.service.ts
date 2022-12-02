import { Api } from "../../../services/ApiConfig";
import { TaskProps } from "../../Task";

// Get
export async function getTask(): Promise<TaskProps[]> {
  return Api.get("/tasks").then((resposta) => {
    return resposta.data;
  })
}
// Post
export async function setTask(title: string) {
  return await Api.post("/tasks", {title});
}
// Delete
export async function delTask(id: number) {
  return await Api.delete(`/tasks/${id}` );
}
// Update
