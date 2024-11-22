import { FormEvent, useContext } from 'react'
import { TodoContext, TodoType } from '../context/context';

const AddTodo = () => {
    const {todo,setTodo} = useContext(TodoContext)
    // id:number;
    // task:string;
    // completed:boolean;
    // createdAt:Date;

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const todoText = form.get('todo');
        setTodo((prev:TodoType[])=>{
          const newTodo:TodoType[]=[
            {
            id: Math.random().toString(),
            task: todoText,
            completed: false,
            createdAt: new Date(),
            },
            ...prev
          ]
          return newTodo
        })

    }
  return (
    <form onSubmit={handleSubmit} action="">
        <input type="text" name="todo" id="" />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo