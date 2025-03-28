import React, { useState, useEffect } from 'react';
import { SectionContext } from '../context/sectionContext';
import SectionHeading from './SectionHeading';
import axios from 'axios';

const Features = () => {
    const BadgeText = "Unlock the Power of";
    const HeadingText = "FutureTech Features";

    const [content, setcontent] = useState([]);

    useEffect(() => {
        const fetchFeatureDetails = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_FEATURE_DETAILS);
                const data = response.data.data;
                if (response) {
                    setcontent(data);
                }
                else{
                    return
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

                {/*----------------------------- first layout ----------------------------- */}
                <SectionHeading />

                {/*----------------------------- second layout ----------------------------- */}
                {content.map((item) => (

                    <div key={item.id} className='bg-[#141414] md:grid grid-cols-[1fr_2fr] gap-5 border border-gray-500'>
                        <div className='p-16 flex flex-col gap-5'>
                            <div>
                                {item.attributes.icon.data.attributes.url && <img src={import.meta.env.VITE_STRAPI_URL+item.attributes.icon.data.attributes.url} alt="tech" className='w-16' />}
                            </div>

                            {item.attributes.mainheading && <h3 className='text-white text-3xl font-bold'>{item.attributes.mainheading}</h3>}
                            {item.attributes.shorttagline && <p className='text-gray-400'>{item.attributes.shorttagline}</p>}
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 p-5'>
                            {item.attributes.featuredetails.data.map((features) => (
                                <div key={features.id} className='bg-[#191919] flex flex-col justify-center px-10 py-7 gap-5 rounded-2xl'>
                                    {features.attributes.mainheading && <h4 className='text-white text-2xl'>{features.attributes.mainheading}</h4>}
                                    {features.attributes.shorttagline && <p className='text-gray-400'>{features.attributes.shorttagline}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </SectionContext.Provider>
        </div>
    )
}

export default Features
