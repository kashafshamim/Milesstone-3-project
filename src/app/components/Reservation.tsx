import React from 'react'

const ReservationSection = () => {
  return (
    <section className='bg-gradient-to-r from-black to-slate-900 py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-extrabold mb-6 text-white'>
          {" "}
          Make a Reservation{" "}
          </h2>
        <form className='max-w-md mx-auto'>
          <div className='mb-4 text-white'>
            <input
              type="text"
              placeholder='Your Name'
              className='w-full p-3 border border-grey-300 rounded-md text-black'
              required />
          </div>

          <div className='mb-4'>
            <input
              type="email"
              placeholder='Your Email'
              className='w-full p-3 border border-grey-300 rounded-md text-black'
              required />
          </div>

          <div className='mb-4'>
            <input
              type="date"
              className='w-full p-3 border border-grey-300 rounded-md text-black'
              required />
          </div>

          <div className='mb-4'>
            <input
              type="time"
              className='w-full p-3 border border-grey-300 rounded-md text-black'
              required />
          </div>

          <div>
            <button className='bg-cyan-500 text-grey-600 py-2 px-4 rounded-md hover:bg-lime-700'>
              Reserved Table
            </button>

          </div>

        </form>
      </div>
    </section>
  )
}


export default ReservationSection;