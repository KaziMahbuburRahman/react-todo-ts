import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type TodoType = {
    id:string;
    task:FormDataEntryValue | null;
    completed:boolean;
    createdAt:Date;

}
type TodoContextType = {
    todo: TodoType[]
    setTodo: Dispatch<SetStateAction<never[]>> 

}
export const TodoContext = createContext<TodoContextType | null>(null)

export const Provider = ({children}:{children:ReactNode}) =>{
const [todo, setTodo] = useState([])
return (
<TodoContext.Provider value={{todo,setTodo}}>
{children}
</TodoContext.Provider> 
)
}