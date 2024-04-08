import './App.css';
import Navebar from './components/Navebar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navebar/>
      <Routes>
        <Route path='/ho' element={<Home/>}/>
        <Route path='/blgadd' element={<Blog/>}/>
      </Routes>
      {/* <Blog/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
