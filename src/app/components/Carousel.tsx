import React from 'react'

export default function Carousel() {
  return (
    <div>
      <section className='bg-gradient-to-r from black to-yellow-700'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from black to-yellow-700 h-auto md:full flex flex-col'>
              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>

                <img src="https://images7.alphacoders.com/596/596343.jpg"
                  alt="pizza 1"
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-yellow-700/25 to-yellow-700/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                  Classic Pizzas{" "}
                </h3>
              </a>
            </div>


            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from black to-yellow-700 h-auto md:full flex flex-col'>
              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 flex-grow'>
                <img src="https://tse2.mm.bing.net/th?id=OIP.RWaaZCnAJwE8O0FxwD7y0AHaEo&pid=Api&P=0&h=220"
                  alt="pizza 2"
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-yellow-700/25 to-yellow-700/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                  Gourmet Pizzas {" "}
                </h3>
              </a>
              <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
                <a href=""
                  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                  <img src="https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg"
                    alt="pizza 3"
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-yellow-700/25 to-yellow-700/5'></div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                    Veggie Pizzas {" "}
                  </h3>
                </a>

                <a
                  href=""
                  className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                  <img src="https://tse1.mm.bing.net/th?id=OIP.Vq1qQarkoyfsYchccbjdjAHaKv&pid=Api&P=0&h=220"
                    alt="pizza 4"
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-yellow-700/25 to-yellow-700/5'></div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                    Speciality Pizzas {" "}
                  </h3>
                </a>
              </div>
            </div>


            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to yellow-700 h-auto md:h-full flex flex-col'>
              <a
                href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'
              >
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.WiEruQ7er7U7AKAlLLH70gHaEx&pid=Api&P=0&h=220"
                  alt="pizza 5"
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-yellow-700/25 to-yellow-700/5'></div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                  {" "}
                  Cheesiest Pizzas {" "}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
