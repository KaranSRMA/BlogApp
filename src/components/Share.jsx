import React from 'react';
import { FaShare } from 'react-icons/fa';

const Share = () => {
    const handleShare = async () => {
        const url = window.location.href; // auto fetch current URL

        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title || 'Check this out!',
                    text: "Take a look at this:",
                    url: url
                });
                console.log("Shared successfully");
            } catch (error) {
                console.error("Sharing failed:", error);
            }
        } else {
            alert("Sharing is not supported in this browser.");
        }
    };

    return (
        <div className='bg-[#504f4f3a] rounded-4xl px-2'>
            <button
                onClick={handleShare}
                className='p-2 rounded-full cursor-pointer flex items-center gap-2'
            >
                <FaShare className='text-2xl text-gray-400' />
            </button>
        </div>
    );
};

export default Share;
