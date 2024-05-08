import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/add" element={<AddUser/>} /> 
          <Route path="/edit/:id" element={<EditUser/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
