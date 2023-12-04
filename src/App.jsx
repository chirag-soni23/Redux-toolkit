import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className='bg-slate-900 flex space-x-3 justify-center items-center h-screen'>
      <div className="">

        {/* Read  */}
        <p className=' text-6xl font-bold text-center mb-5 text-white'>{count}</p>

        {/* Increment Button  */}
        <button  onClick={()=> dispatch(increment())}
          className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Increment
        </button>

        {/* Decrement Button  */}
        <button   onClick={()=> dispatch(decrement())}
          className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Decrement
        </button>

        {/* Increment By User */}
        <button  onClick={()=> dispatch(incrementbyAmount(5))}
          className=' ml-20 bg-orange-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Inc. By User
        </button>
      </div>
    </div>
  )
}

export default App