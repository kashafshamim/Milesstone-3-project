import React from 'react'

const FloatingImageContentBlock = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>

      <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Pizzas</h2>
        <p className='text-white mb-4'>
          {" "}
          Savor the cheesiest pizza in town{" "}
        </p>
        <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-lime-700 transition duration-200'>
          Order Now
        </button>

        <h3 className='text-2xl font-semi-bold mt-6 mb-2 text-center text-white'>
          {" "}
          Stay tuned for our new pizza flavor, coming soon!{" "}
        </h3>

        <ul>
          <li><strong> Cheesy BBQ Bacon Pizza:</strong>
            An irresistible blend of savory cheddar cheese, crispy bacon, and smoky BBQ sauce.
          </li>
          <br />

          <li><strong> Spicy Buffalo Chicken Pizza::</strong>
            Enjoy bold buffalo sauce with grilled chicken, mozzarella, and red onions, topped with a ranch drizzle.
          </li>
          <br />

          <li><strong> Mediterranean Veggie Delight Pizza</strong>
            Savor fresh spinach, feta, olives, artichokes, and sun-dried tomatoes on a garlic olive oil base.
          </li>
          <br />

          <li><strong> Truffle Mushroom & Prosciutto Pizza:</strong>
            Indulge in rich truffle sauce with sautéed mushrooms, prosciutto, mozzarella, and arugula.
          </li>
          <br />


          <li><strong> Mexican Fiesta Pizza:</strong>
            Relish zesty salsa with ground beef, cheddar, jalapeños, red onions, and cilantro.
          </li>
          <br />
        </ul>
        </div>

<div className='md:w-1/2 mt-6 md:mt-0'>
<img src="https://tse1.mm.bing.net/th?id=OIP.KuBiumXiV9_XXfRWzRj5jgHaFP&pid=Api&P=0&h=220"
 alt="Cheesiest pizza" 
 className='w-full h-auto rounded-lg shadow:lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>

</div>


      
    </section>

  )
}

export default FloatingImageContentBlock
