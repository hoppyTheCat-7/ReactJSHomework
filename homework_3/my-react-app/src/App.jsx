import { useState } from 'react'
import './App.css'
import Login from './components/exercise_1/Login';
import UserStatus from './components/exercise_1/UserStatus';
import MoodSelector from './components/exercise_2/MoodSelector'
import BookLibrary from './components/exercise_3/BookLibrary';

function App() {
  {/* Exercise 1 */ }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (isAdminUser) => {
    setIsLoggedIn(true)
    setIsAdmin(isAdminUser)
  };

// -------------------------------------------------------------------------

  const moodEmojiMap = {
    Happy: "😊",
    Sad: "😢",
    Excited: "🤩",
    Tired: "😴",
  };

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      available: true,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      available: false,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Science Fiction",
      available: true,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      available: true,
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      available: false,
    },
  ];

  return (
    <>
      {/* Exercise 1 */}
      <div className="dashboard-container">
        <h1>User Status Dashboard</h1>
        {!isLoggedIn ? <Login uponLogin={handleLogin} /> : <UserStatus isAdmin={isAdmin} setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin}/>}
      </div>

      {/* Exercise 2 */}
      <MoodSelector moods={moodEmojiMap} />

      {/* Exercise 3 */}
      <BookLibrary books={books} />
    </>
  )
}

export default App
