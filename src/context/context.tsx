import { createContext, Dispatch, SetStateAction } from "react";

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