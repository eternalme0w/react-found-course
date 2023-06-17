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

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    //const bodyInputRef = useRef();

    const addNewPost = (event) => {

        event.preventDefault();
        
        console.log(title);
        console.log(body);
    }

    return (

        <div className="App">

            <form>

                <MyInput 
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    type="text" 
                    placeholder="title"
                />

                <MyInput 
                    //ref={bodyInputRef}
                    value={body}
                    onChange={e => setBody(e.target.value)}
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
