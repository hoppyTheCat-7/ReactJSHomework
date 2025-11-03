import { useState } from 'react'
import './App.css'
import ControlledContactForm from './components/exercise_1/ControlledContactForm'
import UncontrolledContactForm from './components/exercise_1/UncontrolledContactForm'
import UncontrolledContactFormV2 from './components/exercise_1/UncontrolledContactForm_v2'
import MultiInputForm from './components/exercise_2/MultiInputForm'

function App() {

  return (
    <>
      {/* Exercise 1 */}
      <div className="main-container">
        <ControlledContactForm />

        {/* <UncontrolledContactForm /> */}
        <UncontrolledContactFormV2 />
      </div>

      {/* Exercise 2 */}
      <MultiInputForm />
    </>
  )
}

export default App
