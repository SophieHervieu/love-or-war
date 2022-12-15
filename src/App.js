import './App.css';
import Result from './screen/Result';
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Game from "./screens/Game"
import Footer from './components/Footer'

import './App.css';
import Characters from './components/Characters';


function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <Game />
      <Result />
      <Footer />

      {/* <Routes>
        <Route path="#" element={<Home />} />
        <Route path="/" element={<Games />} />
        <Route path="/count" element={<Result />} />
      </Routes> */}

    </div>
  )
}

export default App;