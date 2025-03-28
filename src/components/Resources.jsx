import React from 'react';
import { SectionContext } from '../context/sectionContext';
import SectionHeading from './SectionHeading';
import ArrowupButton from './ArrowupButton';
import { Button } from "@/components/ui/button";

const Resources = () => {
  const BadgeText = "Your Gateway to In-Depth Information";
  const HeadingText = "Unlock Valuable Knowledge with FutureTech's Resources";
  const ButtonText = "View All Resources"
  const RouteText = '/resources'

  return (
    <div>
      <SectionContext.Provider value={{ BadgeText, HeadingText, ButtonText, RouteText }}>

        {/*------------------------ heading section ------------------------ */}
        <SectionHeading />

        <div className='bg-[#141414] lg:flex '>
          {/* ============= left side ============== */}
          <div className='flex flex-col gap-5 justify-center p-10 border-t lg:border-r border-gray-500 lg:w-1/3'>
            <div>
              <img src="/svgs/tech.svg" alt="tech" className='w-16' />
            </div>
            <h3 className='text-white text-2xl'>Ebooks</h3>
            <p className='text-sm text-gray-400'>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
            <ArrowupButton text="Download Ebooks Now" />
            <div className='bg-[#191919] rounded-lg p-5 border border-gray-500'>
              <p className='text-gray-400'>Downloaded By</p>
              <h5 className='text-white text-lg'>10K+ Users</h5>
            </div>
          </div>

          {/* =========== right side ============== */}
          <div className='p-7 border-t border-gray-500 flex flex-col gap-7'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-center'>
              <h4 className='text-white text-2xl lg:w-1/3'>Variety of Topics</h4>
              <p className='text-gray-400 '>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
            </div>

            <div>
              <img src="/images/logo.png" alt="image" className='w-1/1 h-80 object-cover rounded-2xl' />
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='bg-[#191919] p-5 rounded-lg border border-gray-500 min-w-60'>
                <p className='text-gray-400'>Total Ebooks</p>
                <h3 className='text-white text-lg lg:text-2xl'>Over 100 ebooks</h3>
              </div>

              <div className='bg-[#191919] p-5 flex items-center gap-5 lg:gap-10 justify-between border border-gray-500 rounded-lg w-full'>
                <div>
                  <p className='text-gray-400'>Downloads Formats</p>
                  <h3 className='text-white text-lg lg:text-2xl'>PDF Format for access</h3>
                </div>
                <div>
                  <Button variant="secondary" className="bg-[#141414b1] text-gray-400 p-5 hover:bg-[#141414] border border-gray-500 cursor-pointer">Preview <span><img src="/svgs/eye.svg" alt="eye" /></span></Button>
                </div>
              </div>
            </div>

            <div className='bg-[#191919] p-5 rounded-lg border border-gray-400'>
              <p className='text-gray-400 lg:text-lg'>Average Author Expertise</p>
              <h3 className='text-white text-lg lg:text-2xl'>Ebooks are authored by renowned experts with an average of 15 years of experience</h3>
            </div>
          </div>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~=================== Another content ==================~~~~~~~~~~~~~~~~~~~~~ */}
        <div className='bg-[#141414] lg:flex '>
          {/* ============= left side ============== */}
          <div className='flex flex-col gap-5 justify-center p-10 border-t lg:border-r border-gray-500 lg:w-1/3'>
            <div>
              <img src="/svgs/tech.svg" alt="tech" className='w-16' />
            </div>
            <h3 className='text-white text-2xl'>Ebooks</h3>
            <p className='text-sm text-gray-400'>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
            <ArrowupButton text="Download Ebooks Now" />
            <div className='bg-[#191919] rounded-lg p-5 border border-gray-500'>
              <p className='text-gray-400'>Downloaded By</p>
              <h5 className='text-white text-lg'>10K+ Users</h5>
            </div>
          </div>

          {/* =========== right side ============== */}
          <div className='p-7 border-t border-gray-500 flex flex-col gap-7'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-center'>
              <h4 className='text-white text-2xl lg:w-1/3'>Variety of Topics</h4>
              <p className='text-gray-400 '>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
            </div>

            <div>
              <img src="/images/logo.png" alt="image" className='w-1/1 h-80 object-cover rounded-2xl' />
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='bg-[#191919] p-5 rounded-lg border border-gray-500 min-w-60'>
                <p className='text-gray-400'>Total Ebooks</p>
                <h3 className='text-white text-lg lg:text-2xl'>Over 100 ebooks</h3>
              </div>

              <div className='bg-[#191919] p-5 flex items-center gap-5 lg:gap-10 justify-between border border-gray-500 rounded-lg w-full'>
                <div>
                  <p className='text-gray-400'>Downloads Formats</p>
                  <h3 className='text-white text-lg lg:text-2xl'>PDF Format for access</h3>
                </div>
                <div>
                  <Button variant="secondary" className="bg-[#141414b1] text-gray-400 p-5 hover:bg-[#141414] border border-gray-500 cursor-pointer">Preview <span><img src="/svgs/eye.svg" alt="eye" /></span></Button>
                </div>
              </div>
            </div>

            <div className='bg-[#191919] p-5 rounded-lg border border-gray-400'>
              <p className='text-gray-400 lg:text-lg'>Average Author Expertise</p>
              <h3 className='text-white text-lg lg:text-2xl'>Ebooks are authored by renowned experts with an average of 15 years of experience</h3>
            </div>
          </div>
        </div>
        <div className='w-full h-[0.5px] bg-gray-600'></div>

      </SectionContext.Provider>
    </div>
  )
}

export default Resources
