"use client"

import Head from 'next/head';
import { MyLanguage } from "@/context/myLanguage";
import { useContext} from "react";
import Link from 'next/link';

export default function EmptyCart() {
    const { language } = useContext(MyLanguage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>

        <title>سبد خرید | سبد خرید شما خالی است</title>
        <meta name="description" content="سبد خرید شما در حال حاضر خالی است" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center">
          {/* آیکون سبد خرید خالی */}
          <div className="mb-6">
            <svg
              className="w-24 h-24 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          {/* عنوان */}
         
         {
            language==="en" ?
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your shopping cart is empty.</h1>:

            <h1 className="text-3xl font-bold text-gray-900 mb-4">سبد خرید شما خالی است</h1>


         }

          {/* توضیحات */}

          {
            language==="en"?
            <div className='text-center'>
                 <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
                 It looks like you haven't added any products to your cart yet.
          </p>

         <Link href={"/store"}>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
          Return to the store
          </button>
          </Link>
            </div>:
       <div className='text-center'>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
             به نظر می‌رسد هنوز هیچ محصولی به سبد خرید خود اضافه نکرده‌اید.
           </p>
 
          <Link href={"/store"}>
           <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
             بازگشت به فروشگاه
           </button>
           </Link>
       </div>
          }
         
        </div>
      </main>
    </div>
  );
}