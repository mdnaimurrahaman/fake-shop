
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Purchase></Purchase>}></Route>
     </Routes>
    </div>
  );
}

export default App;
