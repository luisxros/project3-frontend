import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";




function Post(
    name,
    username,
    content,
    image,
    avatar
) {
    return(
        <div className="Post">
            <div className="Post-avatar">
                <Avatar src="" />
            </div>
            <div className="Post-body">
                <div className="Post-header">
                    <div className="Post-headerText">
                        <h6>
                            Luis R{' '}
                            <span className="Post-headerSpecial">
                                @luisxros
                            </span>
                        </h6>
                    </div>
                    <div className="Post-description">
                        <p> this is a great app!</p>
                    </div>
                    <img className="Post-img" src="https://media.giphy.com/media/3o6MbrQELrt6NcJm5W/giphy.gif" alt="none"/>
                    <div className="Post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    
                        
                    </div>
                </div>
            </div>
          
        </div>
    )
}


export default Post;