import { useState } from 'react'
import './App.css'
import MouseTracker from './exercise_2/components/MouseTracker'
import WindowSizeDisplay from './classwork_exercise/components/WindowSizeDisplay'
import UserForm from './exercise_1/components/UserForm'

function App() {

  return (
    <>
      {/* Exercise 1: Custom Hook & Form w/ Local Storage Persistence */}
      <UserForm />

      {/* Exercise 2: A Custom Hook for Mouse Position Tracking */}
      {/* <MouseTracker /> */}

      {/* Classwork exercise: A Custom Hook for Window Size Tracking - Rainbow */}
      {/* <WindowSizeDisplay /> */}
    </>
  )
}

export default App
