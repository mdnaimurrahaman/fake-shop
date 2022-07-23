
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Purchase from './Components/Purchase/Purchase';
import Data from './Components/Reviews/Data';

function App() {
  const {reviews} = Data;
  console.log(reviews)
  const [reviw, setReview] = useState([])
  return (
    <div>
     <Header/>
     <Routes>
        <Route path='/' element={<Home reviews={reviews}/>}/>
        <Route path='/product/:id' element={<Purchase></Purchase>}></Route>
     </Routes>
    </div>
  );
}

export default App;
