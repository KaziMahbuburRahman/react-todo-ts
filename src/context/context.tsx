import { createContext, Dispatch, SetStateAction } from "react";

type TodoContextType = {
    todo: string[]
    setTodo: Dispatch<SetStateAction<never[]>> 

}
export const TodoContext = createContext<TodoContextType | null>(null)