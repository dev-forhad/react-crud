import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import DetailsUser from './components/users/DetailsUser';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route  exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/users/add' element={<AddUser/>} />
        <Route exact path='/users/edit/:id' element={<EditUser/>} />
        <Route exact path='/users/details/:id' element={<DetailsUser/>} />
        <Route exact path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
