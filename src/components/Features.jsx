import React, { useState, useEffect } from 'react';
import { SectionContext } from '../context/sectionContext';
import SectionHeading from './SectionHeading';
import axios from 'axios';

const Features = () => {
    const BadgeText = "Unlock the Power of";
    const HeadingText = "BlogMaze Features";

    const [content, setcontent] = useState([]);
    const [showHeading, setshowHeading] = useState(false)

    useEffect(() => {
        const fetchFeatureDetails = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_FEATURE_DETAILS);
                const data = response.data.data;
                if (response) {
                    setcontent(data);
                    setshowHeading(true);
                }
            } catch (error) {
                console.log("error fetcing feature details ", error)
            }
        }

        fetchFeatureDetails();
    }, [setcontent])


    return (
        <div>
            <SectionContext.Provider value={{ BadgeText, HeadingText }}>

                {showHeading && <SectionHeading />}
                {content.map((item, index) => (
                    <div key={index}>
                        <div className='bg-[#141414] md:grid grid-cols-[1fr_2fr] gap-5 border border-gray-500'>
                            <div className='p-16 flex flex-col gap-5'>
                                <div>
                                    {item.icon.url && <img src={item.icon.url} alt="tech" className='w-16' />}
                                </div>

                                {item.mainheading && <h3 className='text-white text-3xl font-bold'>{item.mainheading}</h3>}
                                {item.shorttagline && <p className='text-gray-400'>{item.shorttagline}</p>}
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 p-5'>
                                {item.featuredetails.map((features) => (
                                    <div key={features.id} className='bg-[#191919] flex flex-col justify-center px-10 py-7 gap-5 rounded-2xl'>
                                        {features.mainheading && <h4 className='text-white text-2xl'>{features.mainheading}</h4>}
                                        {features.shorttagline && <p className='text-gray-400'>{features.shorttagline}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </SectionContext.Provider>
        </div>
    )
}

export default Features
