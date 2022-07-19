import { useState } from 'react'
import offLogo from './icons/off.svg'
import OnLogo from './icons/on.svg'
import DisplayLogo from './components/displayLogo.jsx'
import './App.css'

function App() {


  let [picture, setPicture] = useState(OnLogo)

  function handleSetPicture() {
    if (picture == OnLogo) {
        setPicture(offLogo)
    } else {
        setPicture(OnLogo)
    }
  }

  return (
    <div>
      <DisplayLogo 
      src = {picture}
      function = {handleSetPicture}
      />
    </div>
  )
}

export default App
