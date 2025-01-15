import React, { useState, useEffect } from "react";
import banner from "./../assets/Images/image.jpg";
import { IoSearch } from "react-icons/io5";
import getBlogs from "../hooks/getBlogs";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import deleteBlogs from "../hooks/deleteBlogs";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const tags = [
    { id: 1, name: "All" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Food" },
  ];

  const [activeIndex, setActiveIndex] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [postsPerPage] = useState(5); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();

  const { posts, loading, error, fetchPosts, setPosts } = getBlogs();
  const { error: deleteError, deleteBlogById } = deleteBlogs();

  const handleUpdate = (id) => {
    navigate(`/update-blog/${id}`); 
  };

  useEffect(() => {
    fetchPosts(); 
  }, [currentPage]);

  
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeIndex === 0 || post.category === tags[activeIndex].name;
    const matchesSearchQuery = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

 
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(filteredPosts.length / postsPerPage)) {
      setCurrentPage(page);
    }
  };

  const handleDeleteClick = async (Id) => {
    await deleteBlogById(Id);
    // Update the posts state by filtering out the deleted post
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== Id));
  };

  const handleFilterClick = (index) => {
    setActiveIndex(index);
    handlePageChange(1);
  }

  return (
    <div className="flex justify-center mt-3 flex-col px-[70] md:px-[150px]">
      <img src={banner} alt="Banner" className="rounded-2xl h-[300px]" />
      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center">
        <IoSearch className="text-[20px] text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none ml-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-10 justify-center mt-5">
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => handleFilterClick(index)}
            className={`${
              index === activeIndex ? "bg-orange-500 text-white" : ""
            } p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-orange-500 transition-all duration-200 ease-in-out`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6 mt-5">
          Blogs
        </h1>
        {loading && (
          <p className="text-orange-500 text-center animate-pulse">
            Loading...
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center">Error: {error.message}</p>
        )}
        {deleteError && (
          <p className="text-red-500 text-center">Error: {deleteError.message}</p>
        )}
        <ul className="space-y-6">
          {paginatedPosts.map((post) => (
            <li
              key={post._id}
              className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm italic mb-4">
                By {post.author} - Category: {post.category}
              </p>
              <p className="text-gray-700 leading-relaxed">{post.content}</p>
              <div className="flex justify-end gap-4 mt-4">
                {/* Delete Icon */}
                <button
                  onClick={() => handleDeleteClick(post._id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                  title="Delete"
                >
                  <FaTrashAlt size={16} />
                </button>

                {/* Update Icon */}
                <button
                  onClick={() => handleUpdate(post._id)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                  title="Update"
                >
                  <FaEdit size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-4 text-lg font-semibold">
          Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
