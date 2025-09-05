import api from "@/core/axios";
import { task } from "../hook/useTaskContainer";

interface taskWhitOutId{
    title:string,
    is_completed:boolean
}
export const getTaskServices = async () =>{
    try {
        const response = await api.get("task")
        return response.data
    } catch {
        throw new Error("");
    }
}

export const  createTaskService = async (task:taskWhitOutId) =>{
    try {
        await api.post("task",task)
    } catch {
        throw new Error("");

    }
}

export const changeStatusService = async(task :task) => {
     try{
        await api.put(`task/${task.id}`,{
            is_completed: !task.is_completed
        })
    }catch{
        throw new Error("");
    }
}

export const deleteTaskService = async(id : number)=>{
    try {
        await api.delete(`task/${id}`)
    } catch{
        throw new Error("");
    }
}
