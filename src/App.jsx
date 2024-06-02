import React from "react"
import "./App.css"
import StartApp from "./components/StartApp"
import MainApp from "./components/MainApp"

function App() {
  const [startApp, setStartApp] = React.useState(false)

  function switchScreens() {
    setStartApp(prevValue => !prevValue)
  }

  return <>{!startApp ? <StartApp switchScreens={() => switchScreens()} /> : <MainApp />}</>
}

export default App
