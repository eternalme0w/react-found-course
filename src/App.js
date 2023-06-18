import React, {useMemo, useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";






function App() {

    const [posts, setPosts] = useState([

        {id: 1, title: "aaa", body: "odw"},
        {id: 2, title: "bbb", body: "serea"},
        {id: 3, title: "zxc", body: "portan"},
        {id: 4, title: "sf", body: "eva"},
        {id: 5, title: "emprt", body: "dqwelro"},

    ])

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {

        console.log("get sorted posts");

        if (selectedSort) {

            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }

        return posts;

    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {

        return sortedPosts.filter(post => post.title.includes(searchQuery));

    }, [searchQuery, sortedPosts]);

    const sortPosts = sort => {

        setSelectedSort(sort);
    }

    

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

            

            <MyInput 

                onChange={e => setSearchQuery(e.target.value)} 
                value={searchQuery} placeholder="search"
            />

            <MySelect 

                value={selectedSort}
                onChange={sortPosts}
                defaultOption="Sort By"
                options={[

                    {name: 'By title', value: 'title'},
                    {name: 'By description', value: 'body'},
                ]}
            />

            {posts.length !== 0 
                ? 
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS posts"/>
                : 
                <h1 style={{fontSize: '30px', textAlign: 'center'}}>
                    List of posts is empty
                </h1>
            }
            
        </div>
    
    );
}


export default App;
