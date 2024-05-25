// src/components/PostList.js
import React, { useContext, useEffect } from 'react';
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

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <div className='postListContainer'>
      <h1>Post Lists</h1>
      <div className='list-container'>
        {filteredPosts.map((post) => (
          <div className='post' key={post.id} onClick={() => handlePostClick(post)}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
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
