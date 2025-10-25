import { useEffect, useState } from 'react'
import './App.css'
import DynamicCounter from './components/exercise_1/DynamicCounter'
import RandomUserFetcher from './components/exercise_2/RandomUserFetcher'
import CatImg from './components/exercise_3/CatImg';

function App() {

  // Exercise 3
  const [cats, setCats] = useState([]);

  const url = `https://api.thecatapi.com/v1/images/search?limit=10`;

  const fetchCatImages = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((err) => console.log("Failed to fetch cat images:", err));
  };

  useEffect(() => {
    fetchCatImages()
  }, [])

  return (
    <>
      {/* Exercise 1 */}
      <DynamicCounter />

      {/* Exercise 2 */}
      <RandomUserFetcher />

      {/* Exercise 3 */}
      <div className="gallery-container">
        <h1>Cat Images Gallery</h1>
        <button className="cat-btn" onClick={fetchCatImages}>Fetch Cat Images</button>
        <div className="cat-gallery">
          {cats.map(cat => {
            return <CatImg key={cat.id} urlProp={cat.url} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
