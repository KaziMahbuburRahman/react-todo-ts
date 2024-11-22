import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

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
<TodoContext.Provider value={{todo,setTodo,handleAddTodo}}>
{children}
</TodoContext.Provider> 
)
}