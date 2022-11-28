import { useState, useEffect } from 'react'
import { Loading, Tours } from './Components'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Loading/>
      <Tours/>
    </div>
  )
}

export default App
