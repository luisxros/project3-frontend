import { Avatar } from '@material-ui/core';
import React from 'react';
import './Postbox.css';

function Postbox() {
    return(
        <div className="Postbox">
            <form>
                <div className="Postbox-input">
                    <Avatar src=""/>
                    <input  placeholder="type..."type="text"/>
                </div>

                    <input
                     className="Postbox-img" 
                     placeholder="Optional: Enter image url" 
                     type="text"/>

                <button className="Post-button">Post</button>
            </form>
        </div>
    )
}

export default Postbox;