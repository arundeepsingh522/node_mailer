import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SendMail from './components/SendMail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SendMail/>
      
    </>
  )
}

export default App
