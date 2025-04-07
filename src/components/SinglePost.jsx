import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import ArrowupButton from './ArrowupButton'
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Share from './Share';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [similarBlogCategory, setsimilarBlogCategory] = useState([]);
  const [similarblogs, setsimilarblogs] = useState([])
  const [heading, setheading] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SINGLE_POST}/${id}?populate=*`
        );
        if (response.data) {
          setPost(response.data.data);
        }

        if (response.data.data.blogcategories) {
          const relatedcategory = response.data.data.blogcategories;
          setsimilarBlogCategory(relatedcategory);
        }

      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchPost();
  }, [id]);


  useEffect(() => {
    const fetchsimilarblogs = async () => {
      try {
        if (similarBlogCategory.length === 0) return;

        const categoryIds = similarBlogCategory.map(cat => cat.documentId);
        const query = qs.stringify(
          {
            filters: {
              blogcategories: {
                documentId: {
                  $in: categoryIds,
                },
              },
            },
            populate: '*',
          },
          {
            encodeValuesOnly: true,
          }
        );


        const response = await axios.get(`${import.meta.env.VITE_SINGLE_POST}?${query}`);
        if (response.data?.data) {
          const filteredBlogs = response.data.data.filter(blog => blog.documentId !== id);
          setsimilarblogs(filteredBlogs.slice(0, 3));
          setheading(true);
        }
      } catch (error) {
        console.log("Error fetching related blogs:", error);
      }
    };

    fetchsimilarblogs();
  }, [similarBlogCategory]);



  if (!post) return <p className="text-center text-2xl">Loading...</p>;

  const imageUrl = post.banner?.url ? `${post.banner.url}` : null;

  return (
    <div>
      {/* image section  */}
      <div className="relative">
        {imageUrl && (
          <img src={imageUrl} alt="Blog banner" className="w-full h-80 object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-center">
          {post.headline && (
            <h2 className="text-xl lg:text-4xl text-white font-bold">{post.headline}</h2>
          )}
        </div>
      </div>

      <div className='bg-[#141414] grid lg:grid-cols-[4fr_1fr] grid-cols-1'>
        {/* left section  */}
        <div className='order-2 lg:order-1'>
          <div className='border border-gray-600 space-y-3 p-7 lg:p-16'>
            {post.mainheading && <h3 className='text-white text-lg'>{post.mainheading}</h3>}
            {post.shortdescription && <p className='text-gray-400'>{post.shortdescription}</p>}
          </div>

          {/* maincontent  */}
          <div className="border-t border-gray-600 p-7 lg:p-16 space-y-3">
            <div className="overflow-hidden text-white">
              {post.detaileddescription.map((block, index) => {
                if (block.type === "paragraph" && block.children[0]?.text === "") {
                  return <br key={index} />;
                }

                if (block.type === "heading") {
                  const HeadingTag = `h${block.level}`;
                  return <HeadingTag key={index}>{block.children[0]?.text}</HeadingTag>;
                }

                if (block.type === "list") {
                  return (
                    <ul key={index} className="list-disc ml-6">
                      {block.children.map((item, i) => (
                        <li key={i}>{item.children[0]?.text}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "image") {
                  return (
                    <img
                      key={index}
                      src={block.image.url}
                      alt={block.image.alternativeText || "Image"}
                      className="rounded-lg w-full object-cover"
                    />
                  );
                }

                return <p key={index}>{block.children[0]?.text}</p>;
              })}
            </div>
          </div>
        </div>

        {/* right section  */}
        <div className='order-1 lg:order-2'>
          <div className='border border-gray-600 p-7 lg:p-10 sticky top-20'>
            <div className='flex justify-between '>
              <div>
                <p className='text-gray-400'>Publication Date</p>
                {post.publishedAt && <p className='text-white'>{new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}</p>}
              </div>
              <div>
                <div className='flex gap-5 items-center'>
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    {post.authorimage.url && <img src={post.authorimage.url} className='object-cover w-full h-full' alt="author image" />}
                  </div>
                  {post.authorname && <p className='text-white'>{post.authorname}</p>}
                </div>
              </div>
            </div>

            <div className='py-10 flex gap-5 justify-between items-start'>
              <div>
                {post.blogcategories.length > 1 ? <p className='text-gray-400'>Categories</p> : <p className='text-gray-400'>Category</p>}
                {post.blogcategories.map((item, index) => (
                  item.category && <p key={index} className="text-white">{item.category}</p>
                ))}
              </div>
              <Share />
            </div>
          </div>
        </div>
      </div>

      {/* similar blog section  */}
      {similarblogs.map((blog, index) => (
        <div key={index} className='bg-[#141414] border-t border-gray-600 p-5'>
          {heading && <div className='flex justify-between p-5'>
            <h3 className='text-2xl text-white'>Similar Blogs</h3>
            <ArrowupButton text="View All Blogs" route="/blogs" />
          </div>}

          <div className='grid lg:grid-cols-3 justify-center md:grid-cols-2 grid-cols-1 md:gap-5 gap-10'>

            <div className='p-3 flex flex-col'>
              <div className='h-72 rounded-2xl overflow-hidden'>
                {blog.banner.url && <img src={blog.banner.url} alt="image" className='w-full h-full object-cover' />}
              </div>
              <div className='md:p-4 p-2'>
                {blog.headline && (
                  <p className='text-white text-sm truncate overflow-hidden whitespace-nowrap w-full'>{blog.headline}</p>
                )}
                {blog.blogcategories[0].category && (
                  <p className='text-gray-400 text-xs pt-1 truncate overflow-hidden whitespace-nowrap w-full'>
                    {blog.blogcategories[0].category}
                  </p>
                )}
              </div>


              <div className='flex items-center px-3 gap-16 justify-between w-fit'>
                <ArrowupButton text="Read More" route={`/post/${blog.documentId}`} />
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default SinglePost;
