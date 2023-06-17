import React, {useRef, useState} from "react";
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

    const [post, setPost] = useState({title: '', body: ''});

    //const bodyInputRef = useRef();

    const addNewPost = (event) => {

        event.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    }

    return (

        <div className="App">

            <form>

                <MyInput 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})} 
                    type="text" 
                    placeholder="title"
                />

                <MyInput 
                    //ref={bodyInputRef}
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text" 
                    placeholder="Decription"
                /> 
                
                <MyButton onClick={addNewPost}>Create</MyButton>

            </form>

            <PostList posts={posts} title="JS posts"/>

            
        
        </div>
    
    );
}


export default App;
