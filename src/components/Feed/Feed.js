import React from 'react';
import Postbox from '../PostBox/PostBox';
import Post from '../Post/Post'
import './Feed.css';

function Feed() {
    return(
        <div className="Feed">
            <div className="Feed-header">
            <h2>Home</h2>
            </div>

            <Postbox />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feed;