import React,{ useRef } from 'react';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';
import './App.css'
import { useTodoDispatch, useTodoState } from './todosContext';

const App = () => {
    const idNum = useRef(2)
    const state = useTodoState()
    const dispatch = useTodoDispatch()
    const { inputText, todos } = state;
    const onChange = (text:string)=> dispatch({type:'INPUT_CHANGE', inputText:text})
    const onCreate = () => {
        idNum.current++;
        console.log(idNum.current)
        dispatch({type:'CREATE_TODO', todo: {
            id:idNum.current,
            text:state.inputText,
            isDone: false
        }})
    }
    const onToggle = (id:number) => dispatch({type:"DONE_TODO", id:id})
    const onDelete = (id:number) => dispatch({type:'DELETE_TODO', id:id})
  return( 
            <div>
                <InsertTodo inputText={inputText} onChange={onChange} onCreate={onCreate}/>
                <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
            </div>
    )
};

export default App;