import React from 'react';
import './App.css'
import AddPost from './components/AddPost/AddPost';
import EditPost from './components/EditPost/EditPost';
import ViewPost from './components/ViewPost/ViewPost';

function App() {
  return (
    <div className="container">
      <h1>Posts</h1>


      <a className="btn btn-primary" data-toggle="modal" href='#create-todo'>Create Post</a>
      <AddPost/>
      <EditPost/>
      <ViewPost/>
    </div>
  );
}

export default App
