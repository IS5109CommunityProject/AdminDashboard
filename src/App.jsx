import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/Login';
import Adashboard from './Pages/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element ={<LoginPage/>}/>
          <Route path="/adashboard" element={<Adashboard/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
