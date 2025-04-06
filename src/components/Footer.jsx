import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-[#0e0e0e] border border-gray-600 pt-10'>
      <div className='flex flex-wrap md:flex-nowrap gap-10 md:gap-2 px-10 justify-start md:justify-around py-10'>
        {/* home */}
        <div className='space-y-3 py-5'>
          <h4 className='text-white text-lg'>Home</h4>
          <ul className='space-y-3'>
            <li className='text-gray-400 list-none'><Link to="/#features">Features</Link></li>
            <li className='text-gray-400 list-none'><Link to="/#blogs">Blogs</Link></li>
            <li className='text-gray-400 list-none'><Link to="/#resources">Resources</Link></li>
            <li className='text-gray-400 list-none'><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        {/* news  */}
        <div className='space-y-3 py-5'>
          <h4 className='text-white text-lg'>Resources</h4>
          <ul className='space-y-3'>
            <li className='text-gray-400 list-none'><Link to='/resources'>Tech Highlights</Link></li>
            <li className='text-gray-400 list-none'><Link to='/resources'>Security Insights</Link></li>
            <li className='text-gray-400 list-none'><Link to='/resources'>Smart Tech</Link></li>
            <li className='text-gray-400 list-none'><Link to='/resources'>App Arena</Link></li>
          </ul>
        </div>

        {/* blogs  */}
        <div className='space-y-3 py-5'>
          <h4 className='text-white text-lg'>Blogs</h4>
          <ul className='space-y-3'>
            <li className='text-gray-400 list-none'><Link to='/blogs'>Tools & Trends</Link></li>
            <li className='text-gray-400 list-none'><Link to='/blogs'>Behind the Stack</Link></li>
            <li className='text-gray-400 list-none'><Link to='/blogs'>Industry Pulse</Link></li>
            <li className='text-gray-400 list-none'><Link to='/blogs'>Perspectives</Link></li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center my-6'>
        <div className='bg-gray-600 w-[85vw] h-[0.5px]'></div>
      </div>

      <div className='text-gray-400 flex flex-col md:flex-row gap-5 md:gap-0 md:justify-around items-center py-3 md:py-10'>
        <div className='flex items-center gap-2 order-2 md:order-1'>
          <p><Link to='/terms'>Terms and Conditions</Link></p>
          <div className='w-[1px] h-5 bg-gray-600'></div>
          <p><Link to='/privacy'>Privacy Policy</Link></p>
        </div>

        <div className='flex gap-3 order-1 md:order-2'>
          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-600 text-3xl cursor-pointer" />
            </a>
          </div>

          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 text-3xl cursor-pointer" />
            </a>
          </div>
        </div>

        <div className='order-3'>
          <p>&copy; 2024 BlogMaze. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
