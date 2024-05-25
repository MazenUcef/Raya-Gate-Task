import React from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App








































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PostList from './components/PostList';
// import PostDetails from './components/PostDetails';
// import SearchBar from './components/SearchBar';
// import Pagination from './components/Pagination';
// import './App.css';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };
//     fetchPosts();
//   }, []);

//   const handlePostClick = (post) => {
//     setSelectedPost(post);
//   };

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="App">
//       <SearchBar onSearch={handleSearch} />
//       {selectedPost ? (
//         <PostDetails post={selectedPost} onBack={() => setSelectedPost(null)} />
//       ) : (
//         <>
//           <PostList posts={currentPosts} onPostClick={handlePostClick} />
//           <Pagination
//             postsPerPage={postsPerPage}
//             totalPosts={filteredPosts.length}
//             paginate={paginate}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
