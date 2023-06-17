import React, {useState} from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import Post from "./components/Post";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";





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

            <form>

                <MyInput type="text" placeholder="Title"/>
                <MyInput type="text" placeholder="Decription"/>
                
                <MyButton>Create</MyButton>

            </form>

            <PostList posts={posts} title="JS posts"/>

            
        
        </div>
    
    );
}


export default App;
