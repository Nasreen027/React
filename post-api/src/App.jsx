import React, { useCallback, useEffect, useState } from 'react';
import './App.css'
import AddPost from './components/AddPost/AddPost';
import EditPost from './components/EditPost/EditPost';
import ViewPost from './components/ViewPost/ViewPost';
export const apiBaseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const [posts, setPosts] = useState([]);
  const [isEditData, setIsEditData] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = useCallback(() => {
    fetch(`${apiBaseUrl}/posts`)
      .then((res) => res.json())
      // .then((data)=>console.log(data,'data'))
      .then((data) => setPosts(data))
      .catch(console.error);
  }, [posts]);

  const deletePostBtnHandler = (event, id) => {
    event.preventDefault();
    if (window.confirm("Are you sure ? ")) {
      fetch(`${apiBaseUrl}/posts/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          getPosts();
        })
        .catch(() => console.error);
    };
  };

  const editPostBtnHandler = useCallback( async (event,id) => {
    event.preventDefault();
    fetch(`${apiBaseUrl}/posts/${id}`)
    .then((res)=> res.json())
    .then((data)=>{
      let $ = window.$;
      $("#edit-post").modal("show");
      setIsEditData(data);
    })
    .catch(()=>console.error);
  },[posts]
  )
  return (
    <div className="container">
      <h1>Posts</h1>


      <a className="btn btn-primary" data-toggle="modal" href='#create-todo'>Create Post</a>
      <AddPost getPosts={getPosts} />
      <EditPost isEditData = {isEditData}
      getPosts = {getPosts}
      />
      <ViewPost posts={posts}
        deletePostBtnHandler={deletePostBtnHandler}
        editPostBtnHandler = {editPostBtnHandler}
      />
    </div>
  );
}

export default App
