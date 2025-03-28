import React from 'react'
import CustomBadge from '../../components/CustomBadge';
import ArrowupButton from '../../components/ArrowupButton';
import { Button } from "@/components/ui/button";

const Resourcespage = () => (
    <div className='bg-[#141414]'>
        {/* header  */}
        <div className='lg:p-20 p-10 border-b border-gray-600 space-y-5'>
            <h2 className='text-white text-3xl lg:text-6xl'>Unlock a World of Knowledge</h2>
            <p className='text-gray-400'>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>
        </div>

        {/* resources  */}
        <div className='bg-[#191919] p-5 md:p-16 flex flex-col md:flex-row gap-10 items-start md:items-center md:justify-between'>
            <div className='space-y-5'>
                <CustomBadge text="Dive into the Details" />
                <h3 className='text-white text-2xl lg:text-4xl'>In-Depth Resources and Analisys</h3>
            </div>
            <div className='bg-[#141414] p-2 flex gap-2 rounded-md'>
                <div className='bg-[#262626] px-2 md:px-5 py-2 md:py-3 rounded-md'>
                    <p className='text-white'>Whitepapers</p>
                </div>
                <div className='bg-[#262626] px-2 md:px-5 py-2 md:py-3 rounded-md'>
                    <p className='text-white'>Ebooks</p>
                </div>
                <div className='bg-[#262626] px-2 md:px-5 py-2 md:py-3 rounded-md'>
                    <p className='text-white'>Refrences</p>
                </div>
            </div>
        </div>

        {/* resources content */}
        <div className='bg-[#141414] lg:flex '>
            {/* ============= left side ============== */}
            <div className='flex flex-col gap-5 justify-center p-10 border-t lg:border-r border-gray-500 lg:w-1/3'>
                <div>
                    <img src="/svgs/tech.svg" alt="tech" className='w-16' />
                </div>
                <h3 className='text-white text-2xl'>Ebooks</h3>
                <p className='text-sm text-gray-400'>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
                <ArrowupButton text="Download Ebooks Now" />
            </div>

            {/* =========== right side ============== */}
            <div className='p-7 border-t border-gray-500 flex flex-col gap-7'>
                <div>
                    <img src="/images/logo.png" alt="image" className='w-1/1 h-80 object-cover rounded-2xl' />
                </div>

                <div className="grid md:grid-cols-[5fr_1fr] md:items-center grid-cols-1 gap-5">
                    <div>
                        <h4 className='text-white text-2xl lg:w-1/3'>Variety of Topics</h4>
                        <p className='text-gray-400 '>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                    </div>
                    <div>
                        <Button variant="secondary" className="bg-[#141414b1] text-gray-400 p-5 hover:bg-[#141414] border border-gray-500 cursor-pointer">Preview <span><img src="/svgs/eye.svg" alt="eye" /></span></Button>
                    </div>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
                    <div className='bg-[#191919] py-3 px-3 rounded-lg border border-gray-500 '>
                        <p className='text-gray-400 text-sm sm:text-lg'>Publication Date</p>
                        <h3 className='text-white text-sm sm:text-lg lg:text-xl'>10 may 2025</h3>
                    </div>

                    <div className='bg-[#191919] py-3 px-3 flex items-center gap-5 lg:gap-10 justify-between border border-gray-500 rounded-lg'>
                        <div>
                            <p className='text-gray-400 text-sm sm:text-lg'>Category</p>
                            <h3 className='text-white text-sm sm:text-lg lg:text-xl'>Quantom computing</h3>
                        </div>

                    </div>
                    <div className='bg-[#191919] py-3 px-3 rounded-lg border col-span-3 sm:col-span-1 border-gray-400'>
                        <p className='text-gray-400 text-sm sm:text-lg'>Author</p>
                        <h3 className='text-white text-sm sm:text-lg lg:text-xl'>Karan sharma</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[0.5px] bg-gray-600'></div>

        {/* other resources  */}
        <div className='p-6 sm:p-10 md:p-16 border border-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10'>
            <div className='space-y-3 w-full max-w-sm py-3'>
                <div className='w-full rounded-lg overflow-hidden'>
                    <img src="/images/logo.png" alt="img" className='w-full h-48 object-cover' />
                </div>
                <h3 className='text-white text-lg'>FutureTech Trends 2024</h3>
                <p className='text-gray-400 text-sm'>An ebook that predicts upcoming technology trends for the next year, including AI developments.</p>
                <div className='flex gap-3'>
                    <Button variant="secondary" className="text-white text-[0.9em] border px-2 border-gray-600 bg-[#141414]">View Details</Button>
                    <Button variant="secondary" className="text-white text-[0.9em] border px-2 border-gray-600 bg-[#191919]">Download PDF</Button>
                </div>
            </div>
            <div className='space-y-3 w-full max-w-sm py-3'>
                <div className='w-full rounded-lg overflow-hidden'>
                    <img src="/images/logo.png" alt="img" className='w-full h-48 object-cover' />
                </div>
                <h3 className='text-white text-lg'>FutureTech Trends 2024</h3>
                <p className='text-gray-400 text-sm'>An ebook that predicts upcoming technology trends for the next year, including AI developments.</p>
                <div className='flex gap-3'>
                    <Button variant="secondary" className="text-white text-[0.9em] border px-2 border-gray-600 bg-[#141414]">View Details</Button>
                    <Button variant="secondary" className="text-white text-[0.9em] border px-2 border-gray-600 bg-[#191919]">Download PDF</Button>
                </div>
            </div>
        </div>

    </div>
)

export default Resourcespage
