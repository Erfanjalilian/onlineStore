import { useState } from 'react';
import CartItem from "../cartItem/cartItem"

export default function SlideInModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-gray-100">
      {/* دکمه باز کردن مدال */}





     


  <button onClick={() => setIsOpen(true)} className='text-white bg-blue-700 rounded py-2 px-4'>shopping cart</button>












      {/* مدال کشویی از سمت راست */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 w-2/6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
          <div className='w-full'>
          <CartItem />
          </div>
        

          <div className='text-center'>
                 <a className='text-blue-600' href='/cart'>View shopping cart</a>
           </div>


         



          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
