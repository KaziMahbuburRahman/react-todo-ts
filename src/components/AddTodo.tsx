import { FormEvent, useContext } from 'react'
import { useTodos } from '../context/context';

const AddTodo = () => {

  const { handleAddTodo } = useTodos();
    // id:number;
    // task:string;
    // completed:boolean;
    // createdAt:Date;

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const todoText = form.get('todo');
        handleAddTodo(todoText)

    }
  return (
    <form onSubmit={handleSubmit} action="">
        <input type="text" name="todo" id="" />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo