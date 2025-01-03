import React from 'react'

const products = [
  {
    id: 1,
    title: "Chicken Fajita",
    category: "classic",
    price: "Rs.695",
    imageurl:
      "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1625118498-ch-sup.jpg%3Fq%3D10&w=640&q=75",
    bgColor: "bg-teal-600",
  },

  {
    id: 2,
    title: "Veggie Lover",
    category: "delight",
    price: "Rs.695",
    imageurl:
      "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1625118615-VEGGI.jpg%3Fq%3D10&w=640&q=75",
    bgColor: "bg-amber-400",
  },

  {
    id: 3,
    title: "Super Supreme",
    category: "meat lover's",
    price: "Rs.695",
    imageurl:
      "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1625118660-fajita-Pizza.jpg%3Fq%3D10&w=640&q=75",
    bgColor: "bg-red-700",
  },
];

export default function ProductList() {
  return (
    <div className='p-1 flex flex-wrap items-center justify-center mb-6'>
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}

        >
          <svg
            className='absolute bottom-0 left-0 mb-8 scale-150 group:hover:scale-[1.65] transition-transform'
            viewBox='0 0 375 283'
            fill='none'
            style={{ opacity: 0.1 }}>

            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform='rotate(-45 159.52 175)'
              fill='white'
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>

          <div className='relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: "radial-gradient(black, transparent 50%",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>

            <img
              className='relative w-50 flex items-center justify-center'
              src={product.imageurl}
              alt={product.title}
            />
          </div>

          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>{product.category}</span>

            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>
                {product.title}
              </span>
              <span className='block bg-white rounded-full text-orange-600 text-xs font-bold px-3 py-2 leading-none items-center justify-center'>
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}