import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Counter from './Counter.jsx'
import Todo from './Todo.jsx'
// import Password from './Password.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Todo/>
    {/* <Password/> */}
    {/* <Counter/> */}
  </StrictMode>,
)
