
import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import FourCards from './Pages/Pricing';
import Offerings from './Pages/Services';
import About from './Pages/About';
import ContactUs from './Pages/Contact';

function App() {
  return (
    <div className="App">
     <Router>
      <div >
        <Routes>
          <Route exact path="/" element={ <Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/CreateUser' element={<Signup/>}/>
          <Route exact path='/pricing' element={<FourCards/>}/>
          <Route exact path='/services' element={<Offerings/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<ContactUs/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
