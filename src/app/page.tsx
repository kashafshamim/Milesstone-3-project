import React from 'react'
import Navbar from "../app/components/Navbar"
import Carousel from './components/Carousel'
import Progressor from './components/Progressor'
import Productlist from './components/Productlist'
import Banner from './components/Banner'
import Offer from './components/Offer'
import Card from './components/Card'
import Footer from './components/Footer'
import Reservation from './components/Reservation'
import Menu from './components/Menuitems'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-black to-yellow-600 min-h-screen text-white'>
<Navbar/>
<Carousel/>
<Progressor/>
<Banner/>
<Productlist/>
<Menu/>
<Offer/>
<Card/>
<Reservation/>
<Footer/>








    </div>
  )
}