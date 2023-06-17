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

    const removePost = post => {

        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (

        <div className="App">

            <PostForm create={createPost} />

            {posts.length !== 0 
                ? 
                <PostList remove={removePost} posts={posts} title="JS posts"/>
                : 
                <h1 style={{fontSize: '30px', textAlign: 'center'}}>
                    List of posts is empty
                </h1>
            }

            

            
        
        </div>
    
    );
}


export default App;
