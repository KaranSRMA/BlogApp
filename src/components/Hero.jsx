import { React, useState, useEffect } from 'react';
import axios from "axios";
import ArrowupButton from './ArrowupButton';
import RoundarrowButton from './RoundarrowButton';

const Hero = () => {
    const [mainHeading, setmainHeading] = useState("Your Gateway to the Future of Tech");
    const [shortTagline, setshortTagline] = useState("Discover Innovations. Stay Ahead. Shape Tomorrow.");
    const [description, setdescription] = useState("Technology is evolving fast—AI, cybersecurity, and web innovation are shaping the future. Stay ahead with insights that matter and be part of the revolution.")

    const RouteText = "/resources"

    const [content, setcontent] = useState([]);
    useEffect(() => {
        const fetchHeadings = async () => {
            try {
                const RESPONSE = await axios.get(import.meta.env.VITE_HERO_SECTION);

                const MAIN_HEADING = RESPONSE.data.data[0]?.attributes?.mainheading;
                const SHORT_TAGLINE = RESPONSE.data.data[0]?.attributes?.shorttagline;
                const DESCRIPTION = RESPONSE.data.data[0]?.attributes?.description;

                if (MAIN_HEADING) {
                    setmainHeading(MAIN_HEADING);
                }

                if (SHORT_TAGLINE) {
                    setshortTagline(SHORT_TAGLINE);
                }

                if (DESCRIPTION) {
                    setdescription(DESCRIPTION);
                }

            } catch (error) {
                console.log("Error fetching headings", error)
            }
        }

        fetchHeadings();

        const fetchCotent = async () => {
            try {
                const RESPONSE = await axios.get(import.meta.env.VITE_HERO_INSIGHTS);
                const fetchedContent = RESPONSE.data.data;
                if (RESPONSE) {
                    setcontent(fetchedContent);
                }
            } catch (error) {
                console.log("Error fetching hero content", error)
            }
        }

        fetchCotent();
    }, [setmainHeading, setshortTagline, setdescription, setcontent])


    return (
        <div className='bg-[#141414]'>
            {/*-------------------------- Upper div  --------------------------*/}
            <div className="lg:flex">

                {/*-------------------------- Left side  --------------------------*/}
                <div className='p-5 border-r border-gray-500'>
                    {/*-------------------------- Heading  --------------------------*/}
                    <div className='flex flex-col gap-7'>
                        {mainHeading && <h4 className='text-gray-400 font-bold'>{mainHeading}</h4>}
                        {shortTagline && <h2 className='text-3xl lg:text-4xl text-white'>{shortTagline}</h2>}
                        {description && <p className='text-gray-400 text-sm'>{description}</p>}
                    </div>

                    {/*-------------------------- Numbers of some users and resources -------------------------- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center mt-20 gap-4">
                        <div className="border border-gray-500 py-7 px-4">
                            <h3 className="text-white text-2xl">300<span className="text-yellow-300">+</span></h3>
                            <p className="text-gray-400">Resources available</p>
                        </div>

                        <div className="border border-gray-500 py-7 px-4">
                            <h3 className="text-white text-2xl">12K<span className="text-yellow-300">+</span></h3>
                            <p className="text-gray-400">Total Downloads</p>
                        </div>

                        <div className="border border-gray-500 py-7 px-4 sm:col-span-2 md:col-span-1 flex justify-center">
                            <div>
                                <h3 className="text-white text-2xl">10K<span className="text-yellow-300">+</span></h3>
                                <p className="text-gray-400">Active Users</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/*------------------------ Right side --------------------------*/}
                <div className='bg-[url("/images/thumbnail1.png")] border border-gray-500 lg:border-0 bg-cover lg:bg-center lg:w-[732px]'>
                    <div className='lg:mt-72 mt-52 px-10 py-10 flex flex-col gap-3'>
                        <h3 className='text-white text-2xl'>Explore 1000+ resources</h3>
                        <p className='text-gray-400 text-sm'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        <ArrowupButton text="Explore Resources" route={RouteText} />
                    </div>
                </div>
            </div>

            {/*-------------------------- Lower div  --------------------------*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 text-white">
                {content.map((item) => (
                    <div key={item.id} className="border border-gray-500 flex flex-col gap-5 items-start px-8 lg:px-16 py-9 w-full">
                        <div>
                            {item.attributes.icon.data.attributes.url && <img src={import.meta.env.VITE_STRAPI_URL + item.attributes.icon.data.attributes.url} alt="icon" className="w-12 lg:w-[50px]" />}
                        </div>

                        <div className="flex w-full items-center justify-between">
                            <div className="flex flex-col items-start">
                                {item.attributes.mainheading && <h4 className="text-lg">{item.attributes.mainheading}</h4>}
                                {item.attributes.shorttagline && <p className="text-gray-400">{item.attributes.shorttagline}</p>}
                            </div>
                                <RoundarrowButton route="/blogs" />
                        </div>

                        <div>
                            {item.attributes.description && <p className="text-gray-400">{item.attributes.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero
