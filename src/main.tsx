import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './context/context.tsx'

export const Root = () =>{

return(
  <Provider>
  <App />
  </Provider>
)
}

createRoot(document.getElementById('root')!).render(<Root/>)
