import Header from "./components/Header/Header"
import Info from "./components/userInfo/userInfo"
import Tech from "./components/Technologies/technologies"
import Projects from "./components/projects/Projects"
import "./app.css"


function App() {

  return (
    <div className="app">
      <div>
        <Header />
        <Info />
        <Tech />
        <Projects />
      </div>
    </div>
  )
}

export default App
