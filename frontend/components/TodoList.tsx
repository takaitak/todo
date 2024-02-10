'use client'

import { ChangeEvent, SetStateAction, useState } from "react";
import dayjs from "dayjs";
import { Button } from "./ui/button";
import { todo } from "./types/todo";
import { Todotodo } from "./Todo";

export const TodoList = () =>{
const [form, setForm] = useState('');
const list:todo[] = [];
const [todos, setTodos] = useState<todo[]>(list);
const [count, setCount] = useState(1);

const style: React.CSSProperties = {
    border: '1px solid',
  };

const todoCreate = (event: ChangeEvent<HTMLInputElement>) => {
    setForm(event.target.value);
}

const handleClick = (id:number,x:number,y:boolean)=>{
    if(x===0){
        todos.map((t)=> {
            if(t.id===id){
                if(y){
                    t.completedAt = '';
                    t.isCompleted = false;
                }else{
                    t.completedAt = dayjs().format('YYYY/M/D H:mm');
                    t.isCompleted = true
                }
            }
        }
            );
            setTodos((todos)=>[...todos]);
    }else{
        setTodos(todos.filter((t)=> t.id !== id));
    }

}

const handleSubmit = (title:string)=>{
    if(form === ''){
        return;
    }

    const todo:todo = {
        id: count,
        title: title,
        createdAt: dayjs().format('YYYY/M/D H:mm'),
        completedAt: '',
        isCompleted: false,
    }
    setCount(count + 1);
    setTodos([...todos,todo]);
    setForm('');
}


    return(
        <div>
            <table>
                <tbody>
                    <tr>
                    <th>Todo</th>
                    <th>作成日時</th>
                    <th>完了日時</th>
                    <th></th>
                    <th></th>
                    </tr>
            {todos.map((t)=>
            <Todotodo t={t} onClick={handleClick} />
            )}
            </tbody>
            </table>
            <input style={style} type='text' value={form} onChange={(e) => todoCreate(e)}/>
            <Button onClick={() => handleSubmit(form)}></Button>
            
        </div>
    );
}