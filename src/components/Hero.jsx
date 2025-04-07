import { React, useState, useEffect } from 'react';
import axios from "axios";
import ArrowupButton from './ArrowupButton';
import RoundarrowButton from './RoundarrowButton';

const Hero = () => {
    const [mainHeading, setmainHeading] = useState("");
    const [shortTagline, setshortTagline] = useState("");
    const [description, setdescription] = useState("")
    const [resources, setresources] = useState("");
    const [blogs, setblogs] = useState("");
    const [category, setcategory] = useState("");

    const RouteText = "/resources"

    const [content, setcontent] = useState([]);
    useEffect(() => {
        const fetchHeadings = async () => {
            try {
                const RESPONSE = await axios.get(import.meta.env.VITE_HERO_SECTION);

                const MAIN_HEADING = RESPONSE.data.data[0]?.mainheading;
                const SHORT_TAGLINE = RESPONSE.data.data[0]?.shorttagline;
                const DESCRIPTION = RESPONSE.data.data[0]?.description;

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

    useEffect(() => {
      const totalResources = async ()=>{
        try {
            const response = await axios.get(import.meta.env.VITE_TOTAL_RESOURCES);
            const data = response.data.meta.pagination.total;
            if (response.data.meta.pagination.total){
                setresources(data);
            }
        } catch (error) {
            console.log(error);
        }
      }
      totalResources();
    }, [])


    useEffect(() => {
      const totalCategories = async ()=>{
        try {
            const response = await axios.get(import.meta.env.VITE_TOTAL_CATEGORIES);
            const data = response.data.meta.pagination.total;
            if (response.data.meta.pagination.total){
                setcategory(data);
            }
        } catch (error) {
            console.log(error);
        }
      }
      totalCategories();
    }, [])
    useEffect(() => {
      const totalBlogs = async ()=>{
        try {
            const response = await axios.get(import.meta.env.VITE_TOTAL_BLOGS);
            const data = response.data.meta.pagination.total;
            if (response.data.meta.pagination.total){
                setblogs(data);
            }
        } catch (error) {
            console.log(error);
        }
      }
      totalBlogs();
    }, [])
    


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
                            {resources && <h3 className="text-white text-2xl">{resources}<span className="text-yellow-300">+</span></h3>}
                            <p className="text-gray-400">Resources available</p>
                        </div>

                        <div className="border border-gray-500 py-7 px-4">
                            {blogs && <h3 className="text-white text-2xl">{blogs}<span className="text-yellow-300">+</span></h3>}
                            <p className="text-gray-400">Total Blogposts</p>
                        </div>

                        <div className="border border-gray-500 py-7 px-4 sm:col-span-2 md:col-span-1 flex justify-center">
                            <div>
                                {category && <h3 className="text-white text-2xl">{category}<span className="text-yellow-300">+</span></h3>}
                                <p className="text-gray-400">Total categories</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/*------------------------ Right side --------------------------*/}
                <div className='bg-[url("/images/thumbnail1.png")] border border-gray-500 lg:border-0 bg-cover lg:bg-center lg:w-[732px]'>
                    <div className='lg:mt-72 mt-52 px-10 py-10 flex flex-col gap-3'>
                        <h3 className='text-white text-2xl'>Unlock Limitless Resources</h3>
                        <p className='text-gray-400 text-sm'>Dive into a world of expert-curated insights, cutting-edge breakthroughs, and emerging tech trends. Whether you're exploring AI, cybersecurity, or web development, find everything you need to stay ahead. Start exploring today!</p>
                        <ArrowupButton text="Explore Resources" route={RouteText} />
                    </div>
                </div>
            </div>

            {/*-------------------------- Lower div  --------------------------*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 text-white">
                {content.map((item,index) => (
                    <div key={index} className="border border-gray-500 flex flex-col gap-5 items-start px-8 lg:px-16 py-9 w-full">
                        <div>
                            {item.icon.url && <img src={item.icon.url} alt="icon" className="w-12 lg:w-[50px]" />}
                        </div>

                        <div className="flex w-full items-center justify-between">
                            <div className="flex flex-col items-start">
                                {item.mainheading && <h4 className="text-lg">{item.mainheading}</h4>}
                                {item.shorttagline && <p className="text-gray-400">{item.shorttagline}</p>}
                            </div>
                                <RoundarrowButton route="/blogs" />
                        </div>

                        <div>
                            {item.description && <p className="text-gray-400">{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero
