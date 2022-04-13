import React,{useEffect, useState} from "react";
import axios from "axios";
import PostData from "../components/PostData";
import Pagination from "../components/Pagination";
const PostScreen = () =>{
    const [posts,setPosts] = useState([])
    const [currentpage,setcurrentPage] = useState([])
    // const [currentPost, setCurrentPost] = useState([])
    const [postPerPage, setPostPerPost] = useState(100)

    const paginate = (currentpage) =>{
        console.log(currentpage,'currentpage')
        setcurrentPage(currentpage);
    }
    useEffect(()=>{
        const fetchingData =async ()=>{
            try{
            await axios.get('https://jsonplaceholder.typicode.com/comments').then(resp=>setPosts(resp.data));
            }
            catch(error){
                console.log(error.message,'errroMessage');
            }
        }
        fetchingData();
    },[])
    const indexOfLastPost = currentpage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    return(
        <div>
            hello
            <PostData posts={currentPost}/>
            <Pagination numOfPostPerPage={postPerPage} paginate={paginate} totalPosts={posts.length}/>
        </div>
    )
}

export default PostScreen;