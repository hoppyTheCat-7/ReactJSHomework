import { useState } from 'react'
import './App.css'
import ColorPicker from './components/exercise_1/ColorPicker'
import LightBulbToggle from './components/exercise_2/LightBulbToggle';
import LightBulbToggle2 from './components/exercise_2/LightBulbToggle2';
import ArrowKeysDisplay from './components/exercise_3/ArrowKeysDisplay';

function App() {
  const colors = ["red", "green", "blue", "yellow", "violet"];

  return (
    <>
      <ColorPicker colors={colors}/>

      <div style={{display: "flex"}}>
        <LightBulbToggle />
        <LightBulbToggle2 />
      </div>

      <ArrowKeysDisplay />
    </>
  )
}

export default App
