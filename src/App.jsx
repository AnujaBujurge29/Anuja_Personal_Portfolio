// import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about"></Route>
        <Route element={<Skills />} path="/skills"></Route>
      </Routes>
      {/* <About /> */}
      {/* <Skills /> */}
    </div>
  )
}

export default App
