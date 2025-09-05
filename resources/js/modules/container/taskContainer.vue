<script setup lang="ts">

import { useTaskContainer } from '../hook/useTaskContainer';

const {deleteTask,changeStatus,submit,tasks,isLoading,newTaskTitle} = useTaskContainer()
</script>

<template>
    <div class="container">
        <form @submit.prevent="submit" class="task-form">
            <h2 class="form-title">Gestor de Tareas</h2>
            <div class="input-group">
                <input
                    type="text"
                    placeholder="¿Qué necesitas hacer?"
                    v-model="newTaskTitle"
                    class="task-input"
                >
                <button type="submit" class="btn btn-primary">
                    <span class="btn-icon">+</span>
                    Agregar
                </button>
            </div>
        </form>
        <div v-if="isLoading" >
            Cargando tareas...
        </div>
        <div v-if="!isLoading && tasks.length === 0">
            No hay tareas disponibles
        </div>
        <div v-if="!isLoading && tasks.length > 0" class="taskContainer">
            <h2>Lista de Tareas</h2>
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <h3 :class="task.is_completed ? 'Completada' : '' " >Tarea: <span class="titleName">{{ task.title }}</span></h3>
                <p :class="task.is_completed ? 'Completed' : 'NotCompleted' " >{{ task.is_completed ? 'Completada' : 'Pendiente' }}</p>
                <label>{{ task.is_completed ? 'Descompletar' : 'Completar' }}
                    <input type="checkbox" class="checkbox" @change="changeStatus(task)">
                </label>
                <button @click="deleteTask(task.id)" class="btn-delete">Borrar Tarea</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
.container{
    margin-top: 10px;
    padding: 12px;
    margin: auto;
    display: flex;
    background-color: #777;
    flex-direction: column;
    gap: 10px;
}
.taskContainer{
    border: 1px solid #000;
    padding: 10px;
    background-color: antiquewhite;
}
.input-group {
    display: flex;
    gap: 12px;
    align-items: center;
}
.task-input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}
.btn-primary {
    background-color: #0d83e4;
    padding: 3px;
    border-radius: 5px;
    color: white;
}
.formContext{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 3px #fff solid;
}
.task-item{
    display: flex;
    gap: 20px;
    padding: 5px;
}
.btn-submit{
    background-color: aliceblue;
    max-width: 130px;
    border-radius: 5px;
}
.btn-submit:active{
    background-color: #999;
}
.titleName{
    font-weight: bold;
}
h2{
    display: flex;
    justify-content: center;
    padding: 3px;
    margin: auto;
    font-size: 24px;
    background-color: transparent;
}
.checkbox{
    border-radius: 10px;
}
.Completed{
    background-color: green;
    padding: 1px;
    border-radius: 10px;
    color: white;
}
.NotCompleted{
    background-color: red;
    padding: 1px;
    border-radius: 10px;
    color: white;
}
.Completada{
    text-decoration: line-through;
}
.btn-delete{
    background-color: red;
    border-radius: 5px;
    padding: 1px;
}
.btn-delete:active{
    background-color: #8a0505;
}
</style>
