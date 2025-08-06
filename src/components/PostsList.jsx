import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList ({isPosting, onStopPosting, onButtonClick}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler (postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    
    return (
        <>
            {
                isPosting && (
                    <Modal onClose={onStopPosting}>
                        <NewPost onAddPost={addPostHandler} onCancel={onStopPosting}/>
                    </Modal>
                )
            }
            {posts?.length > 0 && (
                <ul className={classes.posts}>
                    {posts?.map((element) => <Post author={element.author} body={element.body} />)}
                </ul>
            )}
            {posts?.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>No posts found.....</h2>
                    <button onClick={onButtonClick}>Click here to add a new post.</button>
                </div>
            )}
        </>
    )
}

export default PostsList;