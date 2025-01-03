import React from 'react'

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black-to-yellow-700 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-20'>
        <img src="https://tse4.mm.bing.net/th?id=OIP.Hsk_d9r4IRfRxfuLexKqrQHaEK&pid=Api&P=0&h=220"
          alt="yummy pizza banner"
          className='w-full h-full object-cover' />

      </div>

      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-white sm:text-5xl font-bold mb-4'>
          Explore our pizza delights
        </h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl'>
          Grab Your Exclusive Pizza Deal Today!
        </p>

        <button
          type='button'
          className='bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-lime-600 duration-300ms'>
          Unlock Now
        </button>
      </div>
    </div>
  )
}
