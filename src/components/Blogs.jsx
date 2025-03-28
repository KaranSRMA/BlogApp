import { React, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ArrowupButton from './ArrowupButton';
import Comment from './Comment';
import Like from './Like';
import Share from './Share';
import { SectionContext } from '../context/sectionContext';
import SectionHeading from './SectionHeading';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const BadgeText = "A Knowledge Treasure Trove";
    const HeadingText = "Explore BlogMaze's In-Depth Blog Posts";
    const ButtonText = "View all blogs"
    const RouteText = "/blogs"

    const [content, setcontent] = useState([]);
    const [activeTag, setActiveTag] = useState('All');

    // Function to filter blogs based on selected tag
    const filteredBlogs = activeTag === 'All'
        ? content
        : content.filter(item =>
            item.attributes.blogcategories.data.some(category =>
                category.attributes.category === activeTag
            )
        );

    useEffect(() => {
        const fetchBlogdata = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BLOGPOST_URL);
                const data = response.data.data;
                if (response) {
                    setcontent(data);
                }
            } catch (error) {
                console.log("error fetching blog data", error)
            }
        }

        fetchBlogdata();
    }, [setcontent])


    return (
        <div>
            <SectionContext.Provider value={{ BadgeText, HeadingText, ButtonText, RouteText }}>

                {/* -------------------------- Header Layout -------------------------- */}
                <SectionHeading />
                {/* tags section  */}
                <div className="bg-[#141414]">
                    {/* Tags Section */}
                    <div className='border-t border-b w-full border-gray-500 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide flex gap-5 items-center p-8'>
                        <div className="flex gap-3">
                            <Button
                                variant="secondary"
                                className={`cursor-pointer snap-start md:px-16 md:py-7 text-lg border text-white ${activeTag === 'All' ? 'bg-[#262626] hover:bg-[#262626]' : 'bg-[#141414] hover:bg-[#141414]'}`}
                                onClick={() => setActiveTag('All')}>
                                All
                            </Button>
                        </div>
                        {content.flatMap(item => item.attributes.blogcategories.data).map((category, index) => (
                            category.attributes.category && (
                                <Button
                                    key={index}
                                    variant="secondary"
                                    className={`cursor-pointer snap-start md:px-16 md:py-7 text-lg border text-white ${activeTag === category.attributes.category ? 'bg-[#262626] hover:bg-[#262626]' : 'bg-[#141414] hover:bg-[#141414]'}`}
                                    onClick={() => setActiveTag(category.attributes.category)}>
                                    {category.attributes.category}
                                </Button>
                            )
                        ))}
                    </div>

                    {/* Blog Section */}
                    {filteredBlogs.map((item, index) => (
                        <div key={index} className="flex flex-col lg:grid grid-cols-[1fr_2fr] lg:gap-0 gap-10 justify-between py-16 lg:px-20 px-10 border-b border-gray-500">
                            {/* Author Details */}
                            <div className="flex gap-5 items-center">
                                <div className="rounded-full min-w-20 min-h-20 w-20 h-20 overflow-hidden">
                                    {item.attributes.authorimage.data.attributes.url && (
                                        <img src={import.meta.env.VITE_STRAPI_URL + item.attributes.authorimage.data.attributes.url} alt="author" className="w-full h-full rounded-full object-cover" />
                                    )}
                                </div>
                                <div>
                                    {item.attributes.authorname && <h4 className="text-white">{item.attributes.authorname}</h4>}
                                    {item.attributes.shorttagline && <p className="text-gray-400">{item.attributes.shorttagline}</p>}
                                </div>
                            </div>

                            {/* Blog Detail */}
                            <div className="flex flex-col gap-2 items-start">
                                {item.attributes.publishedAt && (
                                    <p className="text-gray-400 text-lg">
                                        {new Date(item.attributes.publishedAt).toLocaleDateString("en-GB", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </p>
                                )}
                                <div>
                                    {item.attributes.headline && <h3 className="text-2xl text-white">{item.attributes.headline}</h3>}
                                    {item.attributes.mainheading && <p className="text-gray-400">{item.attributes.mainheading}</p>}
                                    {item.attributes.likes > 0 && (
                                        <p className="text-white text-sm mt-10">
                                            Liked by {item.attributes.likes} people
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* View Blog Button */}
                            <div className="w-32">
                                <ArrowupButton text="View Blog" route={`/post/${item.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContext.Provider>
        </div>
    )
}

export default Blogs
