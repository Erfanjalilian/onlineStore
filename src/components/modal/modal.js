import { useState } from 'react';
import CartItem from "../cartItem/cartItem"

export default function SlideInModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-gray-100">
      {/* دکمه باز کردن مدال */}





      <svg
       onClick={() => setIsOpen(true)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 bg-white text-blue-700"
  >
    <path d="M6 6h15l2 12H7L6 6z"></path>
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
  </svg>












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
