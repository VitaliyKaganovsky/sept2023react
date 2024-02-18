import {PostForm} from "./PostForm";
import {Posts} from "./Posts";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";

const PostContainer = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getALl().then(({data})=>setPosts(data))
    }, []);

    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostContainer};