import React from 'react'
import CustomBadge from './CustomBadge'
import RoundarrowButton from './RoundarrowButton'

const Cta = () => {
    const RouteText = '/resources';

    return (
        <div className='bg-[#191919] lg:p-20 p-10'>
            {/* top part  */}
            <div className='flex flex-col md:flex-row gap-10 md:items-center'>
                <div>
                    <div className='w-32 h-32 rounded-full overflow-hidden'>
                        <img src="/images/logo.png" alt="logo" className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className='flex flex-col gap-5 '>
                    <CustomBadge text="Learn, Connect and Innovate" />
                    <h2 className='text-3xl text-white'>Be Part of the BlogMaze Revolution</h2>
                    <p className='text-gray-400'>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                </div>
            </div>

            {/* bottom part */}
            <div className='bg-[#141414] p-5 rounded-2xl flex flex-col lg:flex-row gap-5 mt-20'>
                <div className='bg-[#191919] p-3 md:p-5 rounded-2xl'>
                    <div className='flex justify-between items-center'>
                        <p className='text-white text-lg'>Resources Access</p>
                        <RoundarrowButton route={RouteText}/>
                    </div>
                    <div className='pt-5'>
                        <p className='text-gray-400'>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                    </div>
                </div>
                <div className='bg-[#191919] p-3 md:p-5 rounded-2xl'>
                    <div className='flex justify-between items-center'>
                        <p className='text-white text-lg'>Resources Access</p>
                        <RoundarrowButton route={RouteText}/>
                    </div>
                    <div className='pt-5'>
                        <p className='text-gray-400'>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                    </div>
                </div>
                <div className='bg-[#191919] p-3 md:p-5 rounded-2xl'>
                    <div className='flex justify-between items-center'>
                        <p className='text-white text-lg'>Resources Access</p>
                        <RoundarrowButton route={RouteText}/>
                    </div>
                    <div className='pt-5'>
                        <p className='text-gray-400'>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta
