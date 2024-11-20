import { FormEvent } from 'react'

const AddTodo = () => {
    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const todo = form.get('todo');
        console.log(todo)

    }
  return (
    <form onSubmit={handleSubmit} action="">
        <input type="text" name="todo" id="" />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo