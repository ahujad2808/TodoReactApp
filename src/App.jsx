import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' underline text-3xl  '>
      <AddToDo></AddToDo>
      <Todos></Todos>
    </div>
  )
}

export default App
