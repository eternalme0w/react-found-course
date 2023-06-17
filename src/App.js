import React, {useState} from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import Post from "./components/Post";





function App() {

    const [posts, setPosts] = useState([

        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "JavaScript", body: "Description"},
        {id: 3, title: "JavaScript", body: "Description"},
        {id: 4, title: "JavaScript", body: "Description"},
        {id: 5, title: "JavaScript", body: "Description"},

    ])

    return (

        <div className="App">

            <h1 style={{textAlign: 'center'}}>List of posts</h1>
            
            {posts.map(post =>
                
                <Post post={post} key={post.id}/>
            )}
        
        </div>
    
    );
}


export default App;
