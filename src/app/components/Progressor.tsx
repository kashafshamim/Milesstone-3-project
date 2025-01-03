import React from 'react'

export default function Progressor() {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font bold'>1</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-yellow-200'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-mint-500'>Step 1: Select Your Pizza{""}</h6>
            <p className='text-xs text white'>Browse through our menu and pick your favorite pizza</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font bold'>2</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-yellow-200'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-mint-500'>Step 2: Customize your Pizza{""}
            </h6>
            <p className='text-xs text white'>Choose your crust, sauce, cheese, and toppings to make your pizza just the way you like it.</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base text-black font bold'>3</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-yellow-200'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-mint-500'>Step 3: Place your order{""}</h6>
            <p className='text-xs text white'>Complete your order and relax—your pizza will be ready for delivery in no time!</p>
          </div>
        </div>
      </div>


    </div>
  )
}