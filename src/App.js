
import React,{useState} from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
import Products from './Components/Products';


function App() {
  const[cartNumber , setCartNumber] = useState(0)
  return (
    <>
    <Navbar cartNumber = {cartNumber}/>
    <Header/>
    <Products  setCartNumber={setCartNumber} />
    <Footer/>
    </>
  );
}

export default App;
