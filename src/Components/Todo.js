import React, { useEffect } from 'react'
import '../Components/CSS/Todo.css';
import { useState, useRef } from 'react';
import TodoList from './TodoList';


let count=0;

function Todo() {
    
const [todos,settodos] =useState([]);
const inputRef= useRef(null);

const todobtn=()=>{ 
   settodos([...todos, {no :count++, text: inputRef.current.value, dispaly: ""}]);
inputRef.current.value = "";
localStorage.setItem("todos_count",count);
}
  
  


useEffect(()=>{
    settodos(JSON.parse(localStorage.getItem("todos")))
    count=localStorage.getItem("todos_count");
},[])

useEffect( ()=>{

setTimeout(()=>{
    console.log(todos);
localStorage.setItem("todos",JSON.stringify(todos));
},100)
},[todos])





  return (
    <div className='todo'>
     <div className='todo-header'>TodoList</div>
     <div className='todo-add'>
        <input  ref={inputRef}type='text' placeholder='add to list' className='todo-input'></input>
        <button className='todo-btn' onClick={()=>{todobtn()}}>Add</button>
     </div>
<div className='todo-list'></div>
{todos.map((item,index)=>{
  return  <TodoList  key ={index} settodos={settodos} no={item.no} text={item.text} dispaly={item.dispaly}/>
}

)}

      
    </div>
  )
}

export default Todo
