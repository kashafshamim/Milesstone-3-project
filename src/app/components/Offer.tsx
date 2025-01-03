'use client'
import React from 'react'

type Offer = {
    title: string;
    description: string;
}

const SpecialOffers: React.FC =() => {
    const offers: Offer[] = [
        {
            title: 'Double Feast',
            description: 'Purchase any large pizza and get another one for free!'
        },

        {
            title: 'Combo Special',
            description: 'Get a medium pizza, garlic bread, and a 1-liter soda for just Rs.999.'
        },

        {
            title: 'Family Feast Deal',
            description: 'Enjoy two large pizzas, a side of cheesy breadsticks, and a 2-liter soda for only Rs.2000'
        },
    ];

    const handleOfferClick = (description: string) => {
        alert(description);
    }

    return (
        <section className='py-10'>
            <div className='container mx-auto text-center'>
                <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {offers.map((offer, index) => (
                        <button key={index}
                        onClick={() => handleOfferClick(offer.description)}
                        className='bg-white shadow-lg rounded-lg text-center hover:bg-grey-300 transition duration-300 transform hover:scale-105'>
                            <h3 className='text-2xl font-semibold text-slate-700'>{offer.title}</h3>
                            <p className='text-slate-700 mt-3'>{offer.description}</p>

                        </button>
                    )
                )}
                </div>
            </div>

        </section>
    )
}
export default SpecialOffers
