import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (

        <div>

            <MyInput

                onChange={e => setFilter({...filter, query: e.target.value})} 
                value={filter.query} placeholder="search"
            />

            <MySelect 

                value={filter.sort}
                onChange={sort => setFilter({...filter, sort: sort})}
                defaultOption="Sort By"
                options={[

                {name: 'By title', value: 'title'},
                {name: 'By description', value: 'body'},
                ]}
            />

        </div>
    )
}


export default PostFilter;