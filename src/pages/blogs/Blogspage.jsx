import React, { useState, useEffect, useCallback } from 'react'
import Share from '../../components/Share'
import { Button } from "@/components/ui/button";
import ArrowupButton from '../../components/ArrowupButton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogspage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogPosts = useCallback(async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SINGLE_POST}?populate=*&pagination[page]=${page}&pagination[pageSize]=10`);
      const posts = response.data.data;
      const { page: currentPage, pageCount } = response.data.meta.pagination;

      setBlogPosts((prevPosts) => {
        const existingIds = new Set(prevPosts.map(p => p.documentId));
        const newPosts = posts.filter(p => !existingIds.has(p.documentId));
        return [...prevPosts, ...newPosts];
      });

      setPage((prevPage) => prevPage + 1);

      if (currentPage >= pageCount) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const trendingPostId = blogPosts[0]?.id;

  return (
    <InfiniteScroll
      dataLength={blogPosts.length}
      next={fetchBlogPosts}
      hasMore={hasMore}
      loader={<div className='text-center bg-[#141414] p-[1rem]'><CircularProgress /></div>}
      endMessage={<p className='text-white text-center text-xl bg-[#141414] py-5'>No more posts</p>}
    >
      <div className='bg-[#141414]'>
        {/* todays headline  */}
        <div className='lg:p-20 p-10 space-y-5'>
          <h2 className='text-white text-3xl lg:text-6xl'>Today's Headlines: Stay Informed</h2>
          <p className='text-gray-400'>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our blogs coverage.</p>
        </div>

        {/* trending seciton */}
        {blogPosts[0] &&
          <div className='p-5 border-t border-b border-gray-600 flex flex-col lg:flex-row gap-10'>
            <div className='lg:max-w-[60em] lg:h-auto w-full max-h-80 rounded-2xl overflow-hidden'>
              {blogPosts[0].banner?.url && <img src={import.meta.env.VITE_STRAPI_URL + blogPosts[0].banner.url} alt="image" className='w-full h-full object-cover' />}
            </div>

            <div className='space-y-4'>
              {blogPosts[0].headline && <h3 className='text-white text-xl'>{blogPosts[0].headline}</h3>}
              {blogPosts[0].shortdescription && <p className='text-gray-400'>{blogPosts[0].shortdescription}</p>}
              <div className='flex gap-7 mt-10'>
                <div className='text-sm lg:text-lg'>
                  <p className='text-gray-400'>Category</p>
                  {blogPosts[0].blogcategories?.[0]?.category && <p className='text-white'>{blogPosts[0].blogcategories[0].category}</p>}
                </div>

                <div className='text-sm lg:text-lg'>
                  <p className='text-gray-400'>Publication Date</p>
                  {blogPosts[0].publishedAt && <p className='text-white'>{new Date(blogPosts[0].publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}</p>}
                </div>

                <div className='text-sm lg:text-lg'>
                  <p className='text-gray-400'>Author</p>
                  {blogPosts[0].authorname && <p className='text-white'>{blogPosts[0].authorname}</p>}
                </div>
              </div>

              <div className='flex gap-5 items-center mt-10'>
                <div>
                  <Share />
                </div>
                <div>
                  <Link to={`/post/${blogPosts[0].documentId}`}>
                    <Button variant="secondary" className="text-white bg-black hover:bg-[#141414] cursor-pointer">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }

        {/* other blogs  */}
        <div className='bg-[#141414] border-t border-gray-600 p-5'>
          <div className='grid lg:grid-cols-3 justify-center sm:grid-cols-2 grid-cols-1 md:gap-5 gap-10'>
            {blogPosts.filter(post => post.id !== trendingPostId).map((item, index) => (
              <div key={item.id} className='px-3 py-5 flex flex-col'>
                <div className='h-72 rounded-2xl overflow-hidden'>
                  {item.banner?.url && <img src={import.meta.env.VITE_STRAPI_URL + item.banner.url} alt="image" className='w-full h-full object-cover' />}
                </div>
                <div className='md:p-4 p-2'>
                  {item.headline && <p className='text-white text-sm truncate overflow-hidden whitespace-nowrap w-full'>{item.headline}</p>}
                  {item.blogcategories?.[0]?.category && <p className='text-gray-400 text-xs pt-1 truncate overflow-hidden whitespace-nowrap w-full'>{item.blogcategories[0].category}</p>}
                </div>
                <div className='flex gap-3'>
                  <Share />
                  <ArrowupButton text="Read More" route={`/post/${item.documentId}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default Blogspage;
