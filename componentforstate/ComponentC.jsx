// ComponentC.jsx
import React, { useContext, useReducer } from 'react';
import { Usercontext } from '../src/App';
import { chanelecontext } from '../src/App';
import  Reducer  from './Reducer';
import { initialState } from './Reducer';


const ComponentC = () => {
  const [count, dispatch] = useReducer(Reducer, initialState);
    const [count2, dispatch2] = useReducer(Reducer, initialState);
  const user = useContext(Usercontext);
  const channel = useContext(chanelecontext);

  return (
    <div>
      <p>{user} - {channel}</p>
      <h1 className='text-2xl font-bold'>Component C</h1>
      <p className='text-lg'>This is Component C, which consumes the context values provided by Component A.</p>

      <h1>count = {count}</h1>
      <h1>count2 = {count2}</h1>
      <button className='bg-blue-500 text-white p-2 m-2' onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button className='bg-red-500 text-white p-2 m-2' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button className='bg-green-500 text-white p-2 m-2' onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    
    <button className='bg-blue-500 text-white p-2 m-2' onClick={() => dispatch2({ type: "INCREMENT" })}>Increment</button>
      <button className='bg-red-500 text-white p-2 m-2' onClick={() => dispatch2({ type: "DECREMENT" })}>Decrement</button>
      <button className='bg-green-500 text-white p-2 m-2' onClick={() => dispatch2({ type: "RESET" })}>Reset</button>

    </div>
  );
};

export default ComponentC;
