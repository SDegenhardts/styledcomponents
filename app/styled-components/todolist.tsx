'use client'

import { Reenie_Beanie } from "next/font/google"
import React, { useState } from "react"
import List from "./list";

export default function Todolist(){
    const [todos, setTodos] = useState ([]);

    const addTodo = todo => {
        if(todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo,...todos]

        setTodos(newTodos);
        console.log(...todos);
    };
    return (
        <div>
            <List onSubmit={addTodo}/>
        </div>
    )
}