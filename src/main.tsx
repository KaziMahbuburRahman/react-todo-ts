import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoContext } from './context/context.tsx'
import { useState } from 'react'


export const Root = () =>{
const [todo, setTodo] = useState([])
return(
  <TodoContext.Provider value={{todo,setTodo}}>
  <App />
  </TodoContext.Provider> 
)
}

createRoot(document.getElementById('root')!).render(<Root/>)
