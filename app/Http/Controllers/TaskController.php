<?php

namespace App\Http\Controllers;

use App\Models\task;
use App\Models\Task as ModelsTask;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Task::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'is_completed' => 'required|boolean',
        ]);

        $people = Task::create($request->all());

        return response()->json(['message' => 'Post created', 'post' => $people]);
    }

    /**
     * Display the specified resource.
     */
    public function show(task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(task $task) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, task $task)
    {
        $request->validate([
            'is_completed' => 'required|boolean',
        ]);

        $task->update($request->only("is_completed"));

        return response()->json(["message" => "Task modificada"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(task $task)
    {
        $task->delete();
        return response()->json(['message' => 'Task deleted']);
    }
}
