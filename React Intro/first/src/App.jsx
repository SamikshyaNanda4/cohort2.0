import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//when you have to create a dynamic website, you write a lot of JS code, and it's hard to maintain. along with HTML
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
    <button onClick={()=>setCount((count)=>count+1)}> 
      count is {count}

    </button>
  </div>
    </>
  )
}

export default App
 