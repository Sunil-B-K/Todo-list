import React from 'react'
import './Assests/cross.png';
import not_tick from './Assests/not_tick.png';
import tick from'./Assests/tick.png';
import cross from'./Assests/cross.png';
import  './CSS/TodoList.css';


function TodoList({settodos, no,text,dispaly}) {

const deleteTodo=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=> todo.no!==no);
    settodos(data)

}


 const toggle =(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    for(let i =0 ;i<data.length; i++){
        if(data[i].no===no){
            if(data[i].dispaly===""){
                data[i].dispaly= "line-through";
            }else{
                data[i].dispaly= "";   
            }
            break;
        }
    }
    settodos(data);

 }



  return (
    <div className='todoitems' >
    <div className={`todo-container ${dispaly}`} onClick={()=>{toggle(no)}}>
            {dispaly===""? <img src={not_tick} alt='not-tick' />: <img src={tick} alt='tick' />}
           
           
            <div className='todoitmetsText' />{text }
        </div>
        <img  className='todoitem-cross-icon' onClick={()=>{deleteTodo(no)}}  src={cross} alt='cross' />
      
    </div>
  )
}

export default TodoList
