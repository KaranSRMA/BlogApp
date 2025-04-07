import React, { useEffect, useState } from 'react'
import CustomBadge from '../../components/CustomBadge';
import ArrowupButton from '../../components/ArrowupButton';
import { Button } from "@/components/ui/button";
import { useAuth } from '../../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Resourcespage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const [activeTag, setActiveTag] = useState('All');
    const [content, setcontent] = useState([])
    const [filteredContent, setfilteredContent] = useState([])

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: location.pathname } });
        }
    }, []);

    useEffect(() => {
        const fetchFeaturesDetails = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_RESOURCES_CATEGORIES);
                const data = response.data.data;
                if (response.data.data) {
                    setcontent(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchFeaturesDetails();
    }, [])

    const fetchFilterdBlogs = async (id) => {
        setfilteredContent([])
        try {
            if (id === "All") {
                const response = await axios.get(`${import.meta.env.VITE_RESOURCES_FULL_DETAILS}`);
                const data = response.data.data;
                if (response.data.data) {
                    setfilteredContent(data);
                }
            } else {
                const response = await axios.get(`${import.meta.env.VITE_RESOURCES_FULL_DETAILS}&filters[resourcescategory][documentId][$eq]=${id}`)
                const data = response.data.data;
                if (response.data.data) {
                    setfilteredContent(data);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFilterdBlogs("All");
    }, [])






    return (
        <div className='bg-[#141414]'>
            {/* header  */}
            <div className='lg:p-20 p-10 border-b border-gray-600 space-y-5'>
                <h2 className='text-white text-3xl lg:text-6xl'>Unlock a World of Knowledge</h2>
                <p className='text-gray-400'>Dive deep into the AI universe with our collection of insightful resources. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI resources offer a gateway to knowledge and innovation.</p>
            </div>

            {/* resources  */}
            <div className='bg-[#191919] p-5 md:p-16 flex flex-col md:flex-row gap-10 items-start md:items-center md:justify-between'>
                <div className='space-y-5'>
                    <CustomBadge text="Dive into the Details" />
                    <h3 className='text-white text-2xl lg:text-4xl'>In-Depth Resources and Analisys</h3>
                </div>

                <div className='bg-[#141414] p-2 flex gap-2 rounded-md'>
                    <Button onClick={() => {
                        setActiveTag("All");
                        fetchFilterdBlogs("All")
                    }} className={`text-white border border-gray-700 px-2 md:px-5 py-2 md:py-3 rounded-md ${activeTag === "All" ? 'bg-[#262626] hover:bg-[#262626]' : 'bg-[#141414] hover:bg-[#141414]'}`}>
                        <p className='text-white'>All</p>
                    </Button>

                    {content.map((item, index) => (
                        item.category && <Button key={index} onClick={() => {
                            setActiveTag(item.category);
                            fetchFilterdBlogs(item.documentId)
                        }} className={`text-white border border-gray-700 px-2 md:px-5 py-2 md:py-3 rounded-md ${activeTag === item.category ? 'bg-[#262626] hover:bg-[#262626]' : 'bg-[#141414] hover:bg-[#141414]'}`}>
                            <p className='text-white'>{item.category}</p>
                        </Button>
                    ))}
                </div>
            </div>

            {/* resources content */}
            {filteredContent[0] &&
                <div className='bg-[#141414] lg:flex '>
                    {/* ============= left side ============== */}
                    <div className='flex flex-col gap-5 justify-center p-10 border-t lg:border-r border-gray-500 lg:w-1/3'>
                        <div className='w-16 h-16 rounded-full overflow-hidden'>
                            {filteredContent[0].banner.url && <img src={filteredContent[0].banner.url} alt="tech" className='w-full h-full object-cover' />}
                        </div>
                        {filteredContent[0].bookname && <h3 className='text-white text-2xl'>{filteredContent[0].bookname}</h3>}
                        {filteredContent[0].shorttagline && <p className='text-sm text-gray-400'>{filteredContent[0].shorttagline}</p>}
                        {filteredContent[0].refrence && <ArrowupButton text="Visit Now" route={filteredContent[0].refrence} />}
                    </div>

                    {/* =========== right side ============== */}
                    <div className='p-7 border-t border-gray-500 flex flex-col gap-7'>
                        <div>
                            {filteredContent[0].banner.url && <img src={filteredContent[0].banner.url} alt="image" className='w-1/1 h-80 object-cover rounded-2xl' />}
                        </div>

                        <div className="grid md:grid-cols-[5fr_1fr] md:items-center grid-cols-1 gap-5">
                            <div>
                                <h4 className='text-white text-2xl lg:w-1/3'>Variety of Topics</h4>
                                {filteredContent[0].topics && <p className='text-gray-400 '>{filteredContent[0].topics}</p>}
                            </div>
                            <div>
                                {filteredContent[0].refrence && <Link to={filteredContent[0].refrence}>
                                    <Button variant="secondary" className="bg-[#141414b1] text-gray-400 p-5 hover:bg-[#141414] border border-gray-500 cursor-pointer">Preview <span><img src="/svgs/eye.svg" alt="eye" /></span></Button>
                                </Link>}
                            </div>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
                            {filteredContent[0].publishedAt && <div className='bg-[#191919] py-3 px-3 rounded-lg border border-gray-500 '>
                                <p className='text-gray-400 text-sm sm:text-lg'>Publication Date</p>
                                <h3 className='text-white text-sm sm:text-lg lg:text-xl'>{new Date(filteredContent[0].publishedAt).toLocaleDateString("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}</h3>
                            </div>}

                            <div className='bg-[#191919] py-3 px-3 flex items-center gap-5 lg:gap-10 justify-between border border-gray-500 rounded-lg'>
                                {filteredContent[0].format && <div>
                                    <p className='text-gray-400 text-sm sm:text-lg'>Format</p>
                                    <h3 className='text-white text-sm sm:text-lg lg:text-xl'>{filteredContent[0].format} format for access</h3>
                                </div>}

                            </div>
                            {filteredContent[0].authorname && <div className='bg-[#191919] py-3 px-3 rounded-lg border col-span-3 sm:col-span-1 border-gray-400'>
                                <p className='text-gray-400 text-sm sm:text-lg'>Author</p>
                                <h3 className='text-white text-sm sm:text-lg lg:text-xl'>{filteredContent[0].authorname}</h3>
                            </div>}
                        </div>
                    </div>
                </div>
            }
            <div className='w-full h-[0.5px] bg-gray-600'></div>

            {/* other resources  */}

            <div className='p-6 sm:p-10 md:p-16 border border-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10'>
                {filteredContent.slice(1).length > 0 ? (
                    filteredContent.slice(1).map((item, index) => (
                        <div key={index} className='space-y-3 w-full max-w-sm py-3'>
                            {item.banner?.url && (
                                <div className='w-full rounded-lg overflow-hidden'>
                                    <img
                                        src={item.banner.url}
                                        alt="img"
                                        className='w-full h-48 object-cover'
                                    />
                                </div>
                            )}
                            {item.bookname && <h3 className='text-white text-lg'>{item.bookname}</h3>}
                            {item.shorttagline && <p className='text-gray-400 text-sm'>{item.shorttagline}</p>}
                            <div className='flex gap-3'>
                                {item.refrence && <Link to={item.refrence}>
                                    <Button variant="secondary" className="text-white text-[0.9em] border px-2 border-gray-600 bg-[#141414] hover:bg-[#1b1b1bd3]">
                                        View Details
                                    </Button>
                                </Link>}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-400 py-10">
                        No resources are available
                    </div>
                )}
            </div>
        </div >
    )
}

export default Resourcespage
