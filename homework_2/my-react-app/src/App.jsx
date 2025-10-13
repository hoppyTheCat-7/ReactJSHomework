import './App.css'
import UserProfileClass from './components/exercise_1/UserProfileClass'
import UserProfileFunction from './components/exercise_1/UserProfileFunction'
import ListItem from './components/exercise_2/ListItem'
import Parent from './components/exercise_3/Parent';


const tasks = [
  { name: "Learn React", priority: "High" },
  { name: "Do Groceries", priority: "Low" },
  { name: "Exercise", priority: "High" },
  { name: "Read a Book", priority: "Medium" },
];

const family = {
  name: "John (Parent)",
  children: [
    {
      name: "Alex (Child)",
      age: 30,
      grandchildren: [
        { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
        { name: "Sophia (Grandchild)", hobby: "Drawing" },
      ],
    },
    {
      name: "Emma (Child)",
      age: 28,
      grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
    },
  ],
}

function App() {
  return (
    <>
      {/* Exercise 1 */}
      <div className="card-wrapper">
        <UserProfileClass name="Kim Deal" age={64} hobby="Knitting" />
        <UserProfileFunction name="Frank Black" age={60} hobby="Collecting guitars" />
      </div>

      {/* Exercise 2 */}
      <ListItem items={tasks} />

      {/* Exercise 3 */}
      <Parent family={family}/>
    </>
  )
}

export default App
