import React, {useMemo, useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";






function App() {

    const [posts, setPosts] = useState([

        {id: 1, title: "aaa", body: "odw"},
        {id: 2, title: "bbb", body: "serea"},
        {id: 3, title: "zxc", body: "portan"},
        {id: 4, title: "sf", body: "eva"},
        {id: 5, title: "emprt", body: "dqwelro"},

    ])

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {

        if (filter.sort) {

            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }

        return posts;

    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {

        return sortedPosts.filter(post => post.title.includes(filter.query));

    }, [filter.query, sortedPosts]);
    
    const createPost = newPost => {

        setPosts([...posts, newPost]);
    }

    const removePost = post => {

        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (

        <div className="App">

            <PostForm create={createPost} />

            <hr style={{margin: '15px 0'}}/>

            <PostFilter filter={filter} setFilter={(filter) => setFilter(filter)}/>


            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS posts"/>
                
                
            
            
        </div>
    
    );
}


export default App;
