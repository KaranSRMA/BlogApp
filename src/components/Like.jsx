import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heart } from "lucide-react";

const Like = ({ postId }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [loading, setLoading] = useState(false);

    const API_URL = `${import.meta.env.VITE_SINGLE_POST}/${postId}`;

    // Fetch likes from Strapi
    const fetchLikes = async () => {
        try {
            const response = await axios.get(API_URL);
            setLikes(response.data.data.attributes.likes || 0);
        } catch (error) {
            console.error("Error fetching likes:", error);
        }
    };

    useEffect(() => {
        fetchLikes();
    }, [postId]);

    // Update likes in Strapi
    const updateLikes = async (newLikesCount) => {
        try {
            setLoading(true);
            await axios.put(API_URL, {
                data: { likes: newLikesCount },
            });
        } catch (error) {
            console.error("Error updating likes:", error);
        } finally {
            setLoading(false);
        }
    };

    // Handle Like/Unlike
    const toggleLike = async () => {
        if (loading) return; // Prevent multiple clicks while updating

        const newLikedState = !liked;
        const newLikesCount = likes + (newLikedState ? 1 : -1);

        setLiked(newLikedState);
        setLikes(newLikesCount);

        await updateLikes(newLikesCount);
    };

    return (
        <div className="bg-[#504f4f3a] rounded-4xl px-2">
            <button
                onClick={toggleLike}
                disabled={loading}
                className={`p-2 rounded-full flex items-center gap-2 transition-colors cursor-pointer duration-300 ${liked ? "text-red-500" : "text-gray-400"
                    }`}
            >
                <Heart fill={liked ? "#ef4444" : "none"} className="w-6 h-6" />
                <span className="text-lg font-medium text-white select-none">{likes}</span>
            </button>
        </div>
    );
};

export default Like;
