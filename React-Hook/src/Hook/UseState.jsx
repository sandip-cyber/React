import React from 'react'
import { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0)
  return (
    <>
    <div className='flex flex-col items-center justify-center h-dvh bg-black text-white gap-4 font-bold'>

    <div className='text-orange-600 font-bold text-2xl'>Count : {count}</div>
    <div className='flex gap-4'>
    <button className='bg-red-500 p-2 rounded-md' onClick={() =>{setCount(count + 1)}}>Increase</button>

    <button className='bg-green-500 p-2 rounded-md' onClick={() => {setCount(count - 1)}}>Decrease</button>
    </div>
    <button className='bg-blue-500 px-6 py-1 rounded-md ' onClick={()=>{setCount(0)}}>Reset</button>

    <h1 className='text-orange-500'>useState :- State Management</h1>
    <p className='text-center'>use when you need local component state,such as tracking user input, toggling elements, or storing values. {count}</p>
    </div>
    </>
  )
}
