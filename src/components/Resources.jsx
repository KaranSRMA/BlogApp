import React, { useState, useEffect } from 'react';
import { SectionContext } from '../context/sectionContext';
import SectionHeading from './SectionHeading';
import ArrowupButton from './ArrowupButton';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Resources = () => {
  const BadgeText = "Your Gateway to In-Depth Information";
  const HeadingText = "Unlock Valuable Knowledge with BlogMaze's Resources";
  const ButtonText = "View All Resources"
  const RouteText = '/resources'

  const [content, setcontent] = useState([]);
  const [showHeading, setshowHeading] = useState(false);

  useEffect(() => {
    const fetchResourcesdata = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_RESOURCES_DETAILS);
        const data = response.data.data;
        if (response) {
          setcontent(data);
          setshowHeading(true);
        }
      } catch (error) {
        console.log("error fetching blog data", error)
      }
    }

    fetchResourcesdata();
  }, [])


  return (
    <div>
      <SectionContext.Provider value={{ BadgeText, HeadingText, ButtonText, RouteText }}>

        {/*------------------------ heading section ------------------------ */}
        {showHeading && <SectionHeading />}

        {content.map((item, index) => (

          <div key={index} className='bg-[#141414] lg:flex '>
            {/* ============= left side ============== */}
            <div className='flex flex-col gap-5 justify-center p-10 border-t lg:border-r border-gray-500 lg:w-1/3'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                {item.banner.url && <img src={item.banner.url} alt="tech" className='w-full h-full object-cover' />}
              </div>
              {item.bookname && <h3 className='text-white text-2xl'>{item.bookname}</h3>}
              {item.shorttagline && <p className='text-sm text-gray-400'>{item.shorttagline}</p>}
              {item.refrence && <ArrowupButton text="Visit Now" route={item.refrence} />}
            </div>

            {/* =========== right side ============== */}
            <div className='p-7 border-t border-gray-500 flex flex-col gap-7'>
              {item.topics && <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-center'>
                <h4 className='text-white text-2xl lg:w-1/3'>Variety of Topics</h4>
                <p className='text-gray-400 '>{item.topics}</p>
              </div>}

              <div>
                {item.banner.url && <img src={item.banner.url} alt="image" className='w-1/1 h-80 object-cover rounded-2xl' />}
              </div>

              <div className='flex flex-col lg:flex-row gap-5'>

                <div className='bg-[#191919] p-5 flex items-center gap-5 lg:gap-10 justify-between border border-gray-500 rounded-lg w-full'>
                  {item.format && <div>
                    <p className='text-gray-400'>Downloads Formats</p>
                    <h3 className='text-white text-lg lg:text-2xl'>{item.format} Format for access</h3>
                  </div>}
                  <div>
                    {item.refrence && <Link to={item.refrence}>
                      <Button variant="secondary" className="bg-[#141414b1] text-gray-400 p-5 hover:bg-[#141414] border border-gray-500 cursor-pointer">Preview <span><img src="/svgs/eye.svg" alt="eye" /></span></Button>
                    </Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}
        <div className='w-full h-[0.5px] bg-gray-600'></div>

      </SectionContext.Provider>
    </div>
  )
}

export default Resources
