import React from 'react'
import ComponentC from './ComponentC'
import {countcontext} from '../src/App'
import { useContext } from 'react'


const ComponentB = () => {
        const countext = useContext(countcontext);
    
  return (
    <div>
        from Component B
                    <button className='bg-blue-500 text-white p-2 m-2' onClick={() => countext.countdispatch({ type: "INCREMENT" })}>Increment</button>
      <button className='bg-red-500 text-white p-2 m-2' onClick={() => countext.countdispatch({ type: "DECREMENT" })}>Decrement</button>
      <button className='bg-green-500 text-white p-2 m-2' onClick={() => countext.countdispatch({ type: "RESET" })}>Reset</button>
    
    </div>
  )
}

export default ComponentB
