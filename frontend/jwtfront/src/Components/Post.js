import React from 'react'
import {useState,  useEffect } from 'react'
import axiosInstance from './Axios'
export const Post = () => {

  const [post, setpost] = useState([])
  useEffect(() => {
    const getPost = () =>{
    
      axiosInstance.get('post/').then(res =>{
        // console.log(res.data.post);
        setpost(res.data.post)
        
      }).catch(err =>{
        console.log(err);
      })
    }
    // console.log("Here is post");
    console.log(post)
    getPost();
   
  }, [])
  
 
  return (
    <>
    <div>Post</div>
    <h3>ad</h3>
    {
      // post.map((postItem)=>{
      //   postItem.map((e)=>{
      //     console.log(e)
      //     return (
      //       <h3>{e.title}</h3>
      //     )
            
          
  
      //   })
      // })
      post.map((el  )=>{
       
        return(
          <h3>{el.title}</h3>
        )
      })
    }
    </>
  )
}
