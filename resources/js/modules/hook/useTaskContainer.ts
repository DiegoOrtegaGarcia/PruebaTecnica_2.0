import { onMounted, ref } from 'vue';
import { changeStatusService, createTaskService, deleteTaskService, getTaskServices } from '../service/taskServices';

export interface task{
    id:number,
    title:string,
    is_completed:boolean
}
export const useTaskContainer=()=>{

    const tasks = ref<task[]>()
    const isLoading =ref<boolean>(true)
    const newTaskTitle = ref<string>('');

    const getTask = async () =>{
        try{
            isLoading.value=true
            tasks.value = await getTaskServices()
        }catch{
            throw new Error("");
        }finally{
            isLoading.value=false
        }
    }

    const submit = async ()=>{
        if(newTaskTitle.value.length <= 1){
            return
        }else{
            try{
                const task = {
                    title: newTaskTitle.value,
                    is_completed: false
                }
                createTaskService(task)
                getTask()
            }catch{
                throw new Error("");
            }
        }
    }
    const changeStatus = async(task : task)=>{
        try{
            changeStatusService(task)
            getTask()
        }catch{
            throw new Error("");
        }
    }

    const deleteTask=async(id : number)=>{
        deleteTaskService(id)
        getTask()
    }
    onMounted(()=>{
        getTask()
    })

    return{deleteTask,changeStatus,submit,tasks,isLoading,newTaskTitle}
}
