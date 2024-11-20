import { FormEvent, useContext } from 'react'
import { TodoContext } from '../context/context';

const AddTodo = () => {
    const {todo,setTodo} = useContext(TodoContext)

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const todoText = form.get('todo');
        setTodo((prev:string)=>prev+todoText)

    }
  return (
    <form onSubmit={handleSubmit} action="">
        <input type="text" name="todo" id="" />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo