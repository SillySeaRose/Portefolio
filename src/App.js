import './App.css';
import { Route, Routes} from 'react-router-dom';
import MainPage from './Components/mPage/MainPage.js';

function App() {
  return (
    <>
      <MainPage/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </>
  );
}

export default App;
