import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/Cartcontexts'

const Navbar = () => {
  const { cart } = useCart();
  const totalitems = cart.reduce((sum, item) => sum + item.quantity, 0)



  return (
    <nav className='bg-blue-400 p-4'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 ">
          <Link to="/" className='text-white text-xl font-bold'>
            ร้านค้าออนไลน์
          </Link>
          <Link to="/1" className='text-white '>
            หน้า 1
          </Link>
          <Link to="/2" className='text-white '>
            หน้า 2
          </Link>
          <Link to="/3" className='text-white '>
            หน้า 3
          </Link>
        </div>

        <Link to="/cart" className="text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 mr-1" fill="none" 
          viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          ตะกร้าสินค้า ({totalitems})
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
