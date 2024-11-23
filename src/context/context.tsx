import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type TodoType = {
    id:string;
    task:FormDataEntryValue | null;
    completed:boolean;
    createdAt:Date;

}
export type TodoContextType = {
    todo: TodoType[]
    setTodo: Dispatch<SetStateAction<TodoType[]>>
    handleAddTodo: (task:FormDataEntryValue | null) => void;
}
export const TodoContext = createContext<TodoContextType | null>(null)

export const Provider = ({children}:{children:ReactNode}) =>{
const [todo, setTodo] = useState<TodoType[]>([])

const handleAddTodo = (task:FormDataEntryValue | null)=>{
    
    setTodo((prev)=>{
        const newTodo:TodoType[]=[
          {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
          },
          ...prev
        ]
        return newTodo
      })
}
return (
<TodoContext.Provider value={{todo,setTodo,handleAddTodo,useTodos}}>
{children}
</TodoContext.Provider> 
)
}

//consumer
export const useTodos = ()=>{
  const todosConsumer = useContext(TodoContext);
  if(!todosConsumer){
      throw new Error("useTodos used outside of Provider");
  }
  return todosConsumer;
}