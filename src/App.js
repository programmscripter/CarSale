import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Profile_page from './Pages/Profile_page/Profile_page';
import Register_page from './Pages/Register_page/Register_page';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile page' element={<Profile_page />} />
          <Route path='/register page' element={<Register_page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
