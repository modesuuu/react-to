import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/home';
import List from './Pages/list';
import Tri from './Componen/Tri';
import Modal from './Componen/Modal';

const App = () =>{
  return(
    <Router basename="/react-to">
      <Routes>
        <Route path="/" element={<Tri />}/>
        <Route path="/h" element={<Home/>}/>
        <Route path="/f" element={<List />}/>
        <Route path="/m" element={<Modal />}/>
      </Routes>
    </Router>
  )
};

export default App;