import { Route ,Routes } from 'react-router';
import Navbar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart.jsx';
import Products from './components/Products.jsx'
import Home from './components/Home.jsx';

import ComponentA from '../componentforstate/ComponentA.jsx';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import Reducer, { initialState } from '../componentforstate/Reducer.js';
import ComponentB from '../componentforstate/ComponentB.jsx';
import ComponentC from '../componentforstate/ComponentC.jsx';

export const Usercontext = createContext();

export const chanelecontext = createContext();

export const countcontext = createContext();





function App() {
    const [count , dispatch] = useReducer(Reducer, initialState)
  const inputref = useRef(null);
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState(0);

  const [loading,setloadig] =useState(true);
  const [error,seterror] = useState("");
  const [data,setdata] = useState({});
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
   
    inputref.current.focus();
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setdata(result);
      } catch (error) {
        seterror(error.message);
      } finally {
        setloadig(false);
      }
    };
    fetchData();
     return () => {

      clearInterval(intervalRef.current);
    }
  },[timer], [data]);

  return (
    <>
    < Navbar />
    <h1 className='text-2xl font-bold'>Timer: {timer} seconds</h1>
    <button className='bg-blue-500 text-white p-2 m-2' onClick={() => clearInterval(intervalRef.current)}>Reset Timer</button>
    <input type="text" ref={inputref} className='border-2 border-gray-300 p-2 m-2' placeholder='Focus on me' />
    {loading}
    {error && <div>Error: {error}</div>}
    <h1>count = {count} </h1>
    <countcontext.Provider 
    value={{countstate:count, countdispatch:dispatch}}
    >
      <ComponentA/>
      <ComponentB />
    
    </countcontext.Provider>



    <Usercontext.Provider value={"abdoo"}>
      <chanelecontext.Provider value={"abdocode"}>
    <ComponentA />
      </chanelecontext.Provider>
    </Usercontext.Provider>
    <Routes >
      <Route path="/home" element={< Home />} />
      <Route path="/Product" element={<Products />} />
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App
