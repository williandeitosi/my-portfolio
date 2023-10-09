import Header from "./components/Header/Header"
import Info from "./components/userInfo/userInfo"
import Tech from "./components/Technologies/technologies"
import "./app.css"


function App() {

  return (
    <div className="app">
      <div>
        <Header />
        <Info />
        <Tech />
      </div>
    </div>
  )
}

export default App
