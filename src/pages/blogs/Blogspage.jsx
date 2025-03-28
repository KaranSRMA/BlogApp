import React from 'react'
import Like from '../../components/Like'
import Share from '../../components/Share'
import { Button } from "@/components/ui/button";
import ArrowupButton from '../../components/ArrowupButton';

const Blogspage = () => {
  return (
    <div className='bg-[#141414]'>
      {/* todays headline  */}
      <div className='lg:p-20 p-10 space-y-5'>
        <h2 className='text-white text-3xl lg:text-6xl'>Today's Headlines: Stay Informed</h2>
        <p className='text-gray-400'>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
      </div>

      {/*----------------------- blogs section ----------------------- */}
      {/* trending seciton */}
      <div className='p-5 border-t border-b border-gray-600 flex flex-col lg:flex-row gap-10'>
        <div className='md:w-80 w-64 rounded-2xl overflow-hidden'>
          <img src="/images/logo.png" alt="image" className='w-full h-full object-cover' />
        </div>

        <div className='space-y-4'>
          <h3 className='text-white text-xl'>Global Climate Summit Addresses Urgent Climate Action</h3>
          <p className='text-gray-400'>World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</p>
          <div className='flex gap-7 mt-10'>
            <div className='text-sm lg:text-lg'>
              <p className='text-gray-400'>Category</p>
              <p className='text-white'>Environment</p>
            </div>

            <div className='text-sm lg:text-lg'>
              <p className='text-gray-400'>Publication Date</p>
              <p className='text-white'>10 sep 2025</p>
            </div>

            <div className='text-sm lg:text-lg'>
              <p className='text-gray-400'>Author</p>
              <p className='text-white'>Karan sharma</p>
            </div>
          </div>

          <div className='flex justify-between items-center mt-10'>
            <div className='flex gap-5'>
              <Like />
              <Share />
            </div>
            <div>
              <Button variant="secondary" className="text-white bg-black">Read More</Button>
            </div>
          </div>
        </div>
      </div>

      {/* tags section  */}
      <div className='border-t border-b w-full border-gray-500 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide flex gap-5 items-center p-8'>
        <div className="flex gap-3">
          <div>
            <Button variant="secondary" className="cursor-pointer snap-start bg-transparent text-white hover:bg-[#0000004a] border md:px-16 md:py-7 text-lg">All</Button>
          </div>
          <div>
            <Button variant="secondary" className="cursor-pointer snap-start bg-transparent text-white hover:bg-[#0000004a] border md:px-16 md:py-7 text-lg">All</Button>
          </div>
          <div>
            <Button variant="secondary" className="cursor-pointer snap-start bg-transparent text-white hover:bg-[#0000004a] border md:px-16 md:py-7 text-lg">All</Button>
          </div>
          <div>
            <Button variant="secondary" className="cursor-pointer snap-start bg-transparent text-white hover:bg-[#0000004a] border md:px-16 md:py-7 text-lg">All</Button>
          </div>
          <div>
            <Button variant="secondary" className="cursor-pointer snap-start bg-transparent text-white hover:bg-[#0000004a] border md:px-16 md:py-7 text-lg">All</Button>
          </div>
        </div>
      </div>

      {/* other blogs  */}
      <div className='bg-[#141414] border-t border-gray-600 p-5'>
        <div className='flex flex-wrap gap-5'>
          <div className='p-3 '>
            <div className='sm:w-80 sm:h-48 w-72 h-72 rounded-2xl overflow-hidden'>
              <img src="/images/logo.png" alt="image" className='w-full h-full object-cover' />
            </div>
            <div className='md:p-4 w-72 sm:w-80 p-2'>
              <p className='text-white text-sm truncate overflow-hidden whitespace-nowrap w-full'>A Decisive Victory for Progressive Policies</p>
              <p className='text-gray-400 text-xs pt-1 truncate overflow-hidden whitespace-nowrap w-full'>Politics</p>
            </div>
            <div className='flex gap-3'>
              <Like />
              <Share />
              <ArrowupButton text="Read More" />
            </div>
          </div>
          <div className='p-3 '>
            <div className='sm:w-80 sm:h-48 w-72 h-72 rounded-2xl overflow-hidden'>
              <img src="/images/logo.png" alt="image" className='w-full h-full object-cover' />
            </div>
            <div className='md:p-4 w-72 sm:w-80 p-2'>
              <p className='text-white text-sm truncate overflow-hidden whitespace-nowrap w-full'>A Decisive Victory for Progressive Policies</p>
              <p className='text-gray-400 text-xs pt-1 truncate overflow-hidden whitespace-nowrap w-full'>Politics</p>
            </div>
            <div className='flex gap-3'>
              <Like />
              <Share />
              <ArrowupButton text="Read More" />
            </div>
          </div>
          <div className='p-3 '>
            <div className='sm:w-80 sm:h-48 w-72 h-72 rounded-2xl overflow-hidden'>
              <img src="/images/logo.png" alt="image" className='w-full h-full object-cover' />
            </div>
            <div className='md:p-4 w-72 sm:w-80 p-2'>
              <p className='text-white text-sm truncate overflow-hidden whitespace-nowrap w-full'>A Decisive Victory for Progressive Policies</p>
              <p className='text-gray-400 text-xs pt-1 truncate overflow-hidden whitespace-nowrap w-full'>Politics</p>
            </div>
            <div className='flex gap-3'>
              <Like />
              <Share />
              <ArrowupButton text="Read More" />
            </div>
          </div>
          <div className='p-3 '>
            <div className='sm:w-80 sm:h-48 w-72 h-72 rounded-2xl overflow-hidden'>
              <img src="/images/logo.png" alt="image" className='w-full h-full object-cover' />
            </div>
            <div className='md:p-4 w-72 sm:w-80 p-2'>
              <p className='text-white text-sm truncate overflow-hidden whitespace-nowrap w-full'>A Decisive Victory for Progressive Policies</p>
              <p className='text-gray-400 text-xs pt-1 truncate overflow-hidden whitespace-nowrap w-full'>Politics</p>
            </div>
            <div className='flex gap-3'>
              <Like />
              <Share />
              <ArrowupButton text="Read More" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blogspage
