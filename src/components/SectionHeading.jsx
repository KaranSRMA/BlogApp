import React from 'react'
import { useContext } from 'react'
import { SectionContext } from '../context/sectionContext'
import CustomBadge from './CustomBadge';
import ArrowupButton from './ArrowupButton';

const SectionHeading = () => {
    const value = useContext(SectionContext)

    return (
        <div className='bg-[#191919] lg:px-10 px-7 py-16'>
            <div>
                <CustomBadge text={value.BadgeText} />
            </div>

            <div className='flex flex-col md:flex-row gap-10 justify-between md:items-center'>
                <h2 className='text-white text-3xl md:text-4xl mt-5'>{value.HeadingText}</h2>
                {value.ButtonText && <ArrowupButton text={value.ButtonText} route={value.RouteText} />}
            </div>
        </div>
    )
}

export default SectionHeading
