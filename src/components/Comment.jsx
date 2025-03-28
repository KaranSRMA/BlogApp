import React, { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const handleCommentChange = (e) => {
        setCommentInput(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (commentInput.trim()) {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    };

    return (
        <div>
            <div className='bg-[#504f4f3a] rounded-4xl px-2'>
                <button className='p-2 rounded-full flex items-center gap-2'>
                    <FaRegComment className='text-2xl text-gray-400' />
                    <span className='text-lg text-white'>
                        {comments.length}
                    </span>
                </button>
            </div>
            {/* <input
                type="text"
                value={commentInput}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
            />
            <button onClick={handleCommentSubmit}>Submit</button>
            <div>
                {comments.map((comment, index) => (
                    <div key={index}>{comment}</div>
                ))}
            </div> */}
        </div>
    );
};

export default Comment;
