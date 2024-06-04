// src/components/PostList.js

import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Modal from './Modal';

const PostList = () => {
    const {
        handlePostClick,
        closeModal,
        showModal,
        comments,
        selectedPost,
        loadPost,
        filteredPosts,
    } = useContext(GlobalContext);

    const postsPerPage = 5; // Number of posts per page
    const [currentPage, setCurrentPage] = useState(1); // Current page number

    useEffect(() => {
        loadPost();
    }, []);

    // Calculate the index of the first and last post to display on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Function to handle pagination click
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='postListContainer'>
            <h1>Post Lists</h1>
            <div className='list-container'>
                {currentPosts.map((post) => (
                    <div className='post' key={post.id} onClick={() => handlePostClick(post)}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {/* Generate pagination buttons */}
                {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
            <Modal show={showModal} onClose={closeModal}>
                {selectedPost && (
                    <div>
                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.body}</p>
                        <h3>Comments</h3>
                        {comments.length > 0 ? (
                            <ul>
                                {comments.map((comment) => (
                                    <li key={comment.id}>
                                        <strong>{comment.name}</strong>: {comment.body}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No comments available</p>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default PostList;
