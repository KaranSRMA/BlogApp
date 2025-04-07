import { React, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ArrowupButton from './ArrowupButton';
import { SectionContext } from '../context/sectionContext';
import SectionHeading from './SectionHeading';
import axios from 'axios';

const Blogs = () => {
    const BadgeText = "A Knowledge Treasure Trove";
    const HeadingText = "Explore BlogMaze's In-Depth Blog Posts";
    const ButtonText = "View all blogs"
    const RouteText = "/blogs"

    const [content, setcontent] = useState([]);
    const [activeTag, setActiveTag] = useState('All');
    const [showHeading, setshowHeading] = useState(false);

    // Function to filter blogs based on selected tag
    const filteredBlogs = activeTag === 'All'
        ? content
        : content.filter(item =>
            item.blogcategories.some(category =>
                category.category === activeTag
            )
        );

    useEffect(() => {
        const fetchBlogdata = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BLOGPOST_URL);
                const data = response.data.data;
                if (response) {
                    setcontent(data);
                    setshowHeading(true);
                }
            } catch (error) {
                console.log("error fetching blog data", error)
            }
        }

        fetchBlogdata();
    }, [])


    return (
        <div>
            <SectionContext.Provider value={{ BadgeText, HeadingText, ButtonText, RouteText }}>

                {/* -------------------------- Header Layout -------------------------- */}
                {showHeading && <SectionHeading />}
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
                        {content.flatMap(item => item.blogcategories).map((category, index) => (
                            category.category && (
                                <Button
                                    key={index}
                                    variant="secondary"
                                    className={`cursor-pointer snap-start md:px-16 md:py-7 text-lg border text-white ${activeTag === category.category ? 'bg-[#262626] hover:bg-[#262626]' : 'bg-[#141414] hover:bg-[#141414]'}`}
                                    onClick={() => setActiveTag(category.category)}>
                                    {category.category}
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
                                    {item.authorimage.url && (
                                        <img src={item.authorimage.url} alt="author" className="w-full h-full rounded-full object-cover" />
                                    )}
                                </div>
                                <div>
                                    {item.authorname && <h4 className="text-white">{item.authorname}</h4>}
                                    {item.shorttagline && <p className="text-gray-400">{item.shorttagline}</p>}
                                </div>
                            </div>

                            {/* Blog Detail */}
                            <div className="flex flex-col gap-2 items-start">
                                {item.publishedAt && (
                                    <p className="text-gray-400 text-lg">
                                        {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </p>
                                )}
                                <div>
                                    {item.headline && <h3 className="text-2xl text-white">{item.headline}</h3>}
                                    {item.mainheading && <p className="text-gray-400">{item.mainheading}</p>}
                                </div>
                            </div>

                            {/* View Blog Button */}
                            <div className="w-32">
                                <ArrowupButton text="View Blog" route={`/post/${item.documentId}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContext.Provider>
        </div>
    )
}

export default Blogs
