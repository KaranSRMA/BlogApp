import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Like from './Like';
import Comment from './Comment';
import Share from './Share';
import ArrowupButton from './ArrowupButton'

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [similarBlogCategory, setsimilarBlogCategory] = useState([]);
  const [similarblogs, setsimilarblogs] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SINGLE_POST}/${id}?populate=*`
        );
        if (response.data) {
          setPost(response.data.data);
        }

        if (response.data.data.attributes.blogcategories) {
          const relatedcategory = response.data.data.attributes.blogcategories.data;
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
        const categoryIds = similarBlogCategory
          .map(cat => `filters[blogcategories][id][$in]=${cat.id}`)
          .join("&");

        const response = await axios.get(
          `${import.meta.env.VITE_SINGLE_POST}?populate=*&${categoryIds}`
        );
        if (response.data?.data) {
          setsimilarblogs(response.data.data.slice(0, 3));
        }
      } catch (error) {
        console.log("Error fetching related blogs:", error);
      }
    };

    fetchsimilarblogs();
  }, [similarBlogCategory]);


  if (!post) return <p className="text-center text-2xl">Loading...</p>;

  const imageUrl = post.attributes.banner?.data?.attributes?.url ? `${import.meta.env.VITE_STRAPI_URL}${post.attributes.banner.data.attributes.url}` : null;

  return (
    <div>
      {/* image section  */}
      <div className="relative">
        {imageUrl && (
          <img src={imageUrl} alt="Blog banner" className="w-full h-80 object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-center">
          {post.attributes.headline && (
            <h2 className="text-xl lg:text-4xl text-white font-bold">{post.attributes.headline}</h2>
          )}
        </div>
      </div>

      <div className='bg-[#141414] grid lg:grid-cols-[4fr_1fr] grid-cols-1'>
        {/* left section  */}
        <div className='order-2 lg:order-1'>
          <div className='border border-gray-600 space-y-3 p-7 lg:p-16'>
            {post.attributes.mainheading && <h3 className='text-white text-lg'>{post.attributes.mainheading}</h3>}
            {post.attributes.shortdescription && <p className='text-gray-400'>{post.attributes.shortdescription}</p>}
          </div>

          {/* maincontent  */}
          <div className="border-t border-gray-600 p-7 lg:p-16 space-y-3">
            <div className="prose lg:prose-lg prose-invert text-white">
              {post.attributes.dd.map((block, index) => {
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
          <div className='flex gap-3 border border-gray-600 p-7 lg:p-10 lg:sticky top-16 bg-[#141414]'>
            <Like postId={post.id} />
            <Comment />
            <Share />
          </div>

          <div className='border border-gray-600 p-7 lg:p-10'>
            <div className='flex justify-between '>
              <div>
                <p className='text-gray-400'>Publication Date</p>
                {post.attributes.publishedAt && <p className='text-white'>{new Date(post.attributes.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}</p>}
              </div>
              <div>
                <div className='flex gap-5 items-center'>
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    {post.attributes.authorimage.data.attributes.url && <img src={import.meta.env.VITE_STRAPI_URL + post.attributes.authorimage.data.attributes.url} className='object-cover w-full h-full' alt="author image" />}
                  </div>
                  {post.attributes.authorname && <p className='text-white'>{post.attributes.authorname}</p>}
                </div>
              </div>
            </div>

            <div className='py-10'>
              {post.attributes.blogcategories.data.length > 1 ? <p className='text-gray-400'>Categories</p> : <p className='text-gray-400'>Category</p>}
              <div>
                {post.attributes.blogcategories.data.map((item, index) => (
                  item.attributes.category && <p key={index} className="text-white">{item.attributes.category}</p>
                ))}
              </div>
            </div>

            {/* table of content  */}
            <div>
              <p className="text-gray-400 pb-2">Table of Contents</p>
              <div className="bg-[#191919] p-6 rounded-2xl overflow-x-auto lg:max-w-72">
                {post.attributes.tableofcontents && (
                  <ul className="list-disc list-inside text-white space-y-2 w-max">
                    {post.attributes.tableofcontents.split("\n").map((item, index) => (
                      <li
                        key={index}
                        className="overflow-hidden whitespace-nowrap"
                        title={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* similar blog section  */}
      <div className='bg-[#141414] border-t border-gray-600 p-5'>
        <div className='flex justify-between p-5'>
          <h3 className='text-2xl text-white'>Similar Blogs</h3>
          <ArrowupButton text="View All Blogs" />
        </div>

        <div className='md:grid lg:grid-cols-3 justify-center md:grid-cols-2 grid-cols-1 gap-5'>
          {similarblogs.map((blog, index) => (

            <div key={index} className='p-3 '>
              <div className='sm:w-80 sm:h-48 w-72 h-72 rounded-2xl overflow-hidden'>
                {blog.attributes.banner.data.attributes.url && <img src={import.meta.env.VITE_STRAPI_URL + blog.attributes.banner.data.attributes.url} alt="image" className='w-full h-full object-cover' />}
              </div>
              <div className='md:p-4 w-72 sm:w-80 p-2'>
                {blog.attributes.headline && (
                  <p className='text-white text-sm truncate overflow-hidden whitespace-nowrap w-full'>{blog.attributes.headline}</p>
                )}
                {blog.attributes.blogcategories.data[0].attributes.category && (
                  <p className='text-gray-400 text-xs pt-1 truncate overflow-hidden whitespace-nowrap w-full'>
                    {blog.attributes.blogcategories.data[0].attributes.category}
                  </p>
                )}
              </div>


              <div className='flex gap-3'>
                <Like />
                <Share />
                <ArrowupButton text="Read More" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SinglePost;
