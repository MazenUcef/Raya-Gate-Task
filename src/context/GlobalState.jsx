import axios from "axios";
import { createContext, useState } from "react";




export const GlobalContext = createContext(null);









const GlobalState = ({children})=>{
const [data , setData] = useState([])
const [search,setSearch] = useState('')
const [selectedPost, setSelectedPost] = useState(null);
const [comments, setComments] = useState([]);
const [showModal, setShowModal] = useState(false);


const loadPost = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await response.data;
    console.log(data);
    setData(data);
  };

  const loadComments = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await response.data;
    setComments(comments);
  };
  const handlePostClick = (post) => {
    setSelectedPost(post);
    loadComments(post.id);
    setShowModal(true);
  };
const filteredPosts = data.filter((post)=>post.title.toLowerCase().includes(search.toLocaleLowerCase()))

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
    setComments([]);
  };


return<GlobalContext.Provider value={{filteredPosts,handlePostClick,closeModal,data , setData , search,setSearch , showModal, setShowModal , comments, setComments , selectedPost, setSelectedPost , loadPost ,loadComments }}>{children}</GlobalContext.Provider>
}


export default GlobalState;