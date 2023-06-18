import React from "react";
import Post from "./Post";


function PostList({posts, title, remove}) {

    if (posts.length === 0) {

        return (
            <h1 style={{fontSize: '30px', textAlign: 'center'}}>
                List of posts is empty
            </h1>
        )
    }

    return (

        <div>
            
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            
            {posts.map( (post, index) =>
                
                <Post remove={remove} index={index + 1} post={post} key={post.id}/>
            )}

        </div>
    )
    
}

export default PostList;