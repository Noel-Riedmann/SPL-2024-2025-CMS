import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='font-bold'>Super</h1>
   <Card></Card>
   </>
  )
}

export default App
