import { React, useState } from 'react';
import { FaShare } from 'react-icons/fa';


const Share = () => {
    const [share, setShare] = useState([]);
    return (
        <div className='bg-[#504f4f3a] rounded-4xl px-2'>
            <button className='p-2 rounded-full flex items-center gap-2'>
                <FaShare className='text-2xl text-gray-400' />
                <span className='text-lg text-white'>
                    {share.length}
                </span>
            </button>
        </div>
    )
}

export default Share
