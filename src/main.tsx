import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider, TodoContext } from './context/context.tsx'
import { useState } from 'react'


export const Root = () =>{

return(
  <Provider>
  <App />
  </Provider>
)
}

createRoot(document.getElementById('root')!).render(<Root/>)
