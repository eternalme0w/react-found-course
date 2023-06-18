import React, {useMemo, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {

    const [posts, setPosts] = useState([

        {id: 1, title: "aaa", body: "odw"},
        {id: 2, title: "bbb", body: "serea"},
        {id: 3, title: "zxc", body: "portan"},
        {id: 4, title: "sf", body: "eva"},
        {id: 5, title: "emprt", body: "dqwelro"},

    ])

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    

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
        setModal(false);
    }

    const removePost = post => {

        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (

        <div className="App">

            <MyButton onClick={() => setModal(true)}>Add post</MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{margin: '15px 0'}}/>

            <PostFilter filter={filter} setFilter={(filter) => setFilter(filter)}/>


            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS posts"/>
                
                
            
            
        </div>
    
    );
}


export default App;
