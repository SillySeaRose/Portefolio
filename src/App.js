import './App.css';
import { Route, Routes} from 'react-router-dom';
import MainPage from './Components/mPage/MainPage.js';
import About from "./Components/about/About";
import ArtPage from "./Components/artPage/ArtPage";
import WebProject from "./Components/webProject/WebProject"

function App() {
  return (
    <>
      <MainPage/>

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='about' element={<About/>}></Route>
        <Route path='artPage' element={<ArtPage/>}></Route>
        <Route path='webProject' element={<WebProject/>}></Route>
      </Routes>
    </>
  );
}

export default App;
