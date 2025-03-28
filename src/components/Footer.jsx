import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0e0e0e] border border-gray-600 pt-10'>
      <div className='flex flex-wrap md:flex-nowrap gap-10 md:gap-2 px-10 justify-start md:justify-around py-10'>
        {/* home */}
        <div className='space-y-3 py-5'>
          <h4 className='text-white text-lg'>Home</h4>
          <ul className='space-y-3'>
            <li className='text-gray-400 list-none'>Features</li>
            <li className='text-gray-400 list-none'>Blogs</li>
            <li className='text-gray-400 list-none'>Resources</li>
            <li className='text-gray-400 list-none'>Contact Us</li>
          </ul>
        </div>
        {/* news  */}
        <div className='space-y-3 py-5'>
          <h4 className='text-white text-lg'>News</h4>
          <ul className='space-y-3'>
            <li className='text-gray-400 list-none'>Trending news</li>
            <li className='text-gray-400 list-none'>Cybersecurity Updates</li>
            <li className='text-gray-400 list-none'>AI & Machine Learning</li>
            <li className='text-gray-400 list-none'>Software and apps</li>
          </ul>
        </div>

        {/* blogs  */}
        <div className='space-y-3 py-5'>
          <h4 className='text-white text-lg'>Blogs</h4>
          <ul className='space-y-3'>
            <li className='text-gray-400 list-none'>AI Ethics</li>
            <li className='text-gray-400 list-none'>Big Tech & Industry Trends</li>
            <li className='text-gray-400 list-none'>Cloud Computing & DevOps</li>
            <li className='text-gray-400 list-none'>Software and apps</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center my-6'>
        <div className='bg-gray-600 w-[85vw] h-[0.5px]'></div>
      </div>

      <div className='text-gray-400 flex flex-col md:flex-row gap-5 md:gap-0 md:justify-around items-center py-3 md:py-10'>
        <div className='flex items-center gap-2 order-2 md:order-1'>
          <p>Terms and Conditions</p>
          <div className='w-[1px] h-5 bg-gray-600'></div>
          <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3 order-1 md:order-2'>
          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <img src="/svgs/global.svg" alt="icon" className='w-full h-full object-cover' />
          </div>
          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <img src="/svgs/global.svg" alt="icon" className='w-full h-full object-cover' />
          </div>
          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <img src="/svgs/global.svg" alt="icon" className='w-full h-full object-cover' />
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
