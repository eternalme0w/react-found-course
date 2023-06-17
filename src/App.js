import React, {useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";






function App() {

    const [posts, setPosts] = useState([

        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "JavaScript", body: "Description"},
        {id: 3, title: "JavaScript", body: "Description"},
        {id: 4, title: "JavaScript", body: "Description"},
        {id: 5, title: "JavaScript", body: "Description"},

    ])

    const createPost = newPost => {

        setPosts([...posts, newPost]);
    }

    return (

        <div className="App">

            <PostForm create={createPost} />

            <PostList posts={posts} title="JS posts"/>

            
        
        </div>
    
    );
}


export default App;
