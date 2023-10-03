import { useState } from 'react' 
import BaseScreen from './components/BaseScreen/BaseScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BaseScreen />
    </>
  )
}

export default App
