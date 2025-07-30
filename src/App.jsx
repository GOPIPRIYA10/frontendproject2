import { useState } from 'react'
import './App.css'
import{Link}from'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Frontend Class in KLU </h1>
      <h2>Today's Topic is Introduction to React</h2>
      <h3> Today's Date is 23.07.2025</h3>
      <h4> U.V.GOPI PRIYA</h4>
      <Link to="/Page1">Go to Page 1</Link>
     <br/><br/><br/>
     <Link to="/Page2">Go to Page 2</Link>
     <br/><br/><br/>
     <Link to="/Page3">Go to Page 3</Link>
     <br/><br/><br/>
     <Link to="/Page4">Go to Page 4</Link>
     


</>
  )
}

export default App
