import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, asyncInc } from './store/reducers/CounterReducer';


function App() {

  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
    <div className='flex  justify-center bg-gray-300 py-10 px10'>
      <h1 className='font-bold underline text-xl'>We will study about redux toolkit</h1>
      
    </div>
    <div className='flex flex-col items-center gap-5 mt-10'>
      <h2 className='text-2xl font-semibold'>Counter Value : {count.counterSlice.value}</h2>
      <div className='flex gap-5'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => dispatch(increment())}>Increment</button>
      <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button className='bg-yellow-500 text-white px-4 py-2 rounded' onClick={() => dispatch(asyncInc(5))}>Async Increment by 5</button>
      </div>
    </div>
    
    </>
  )
}

export default App
