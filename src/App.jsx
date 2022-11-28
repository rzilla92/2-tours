import { useState, useEffect } from 'react'
import { Loading, Tours } from './Components'
import './App.css'

const tourData = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading]=useState(true)
  const [tours,setTours]=useState([])

  const removeTour =(id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async() => {
    setLoading(true)
    try {
      const response = await fetch(tourData)
      const tours = await response.json()      
      setLoading(false)  
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
  fetchTours()
  },[])

  if(loading) {
      return (
        <main>
          <Loading/>
        </main>
      )
    }
  if(tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={()=>fetchTours()}>Refresh</button>
      </div>
    </main>
  }
      return (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
    )
}

export default App
