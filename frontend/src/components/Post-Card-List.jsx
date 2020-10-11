import React from 'react';
import { PostCardPreview } from './Post-Card-Preview';
export const PostCardList = (props) => {
return(
    <ul className="post-card-list flex wrap">
        {props.posts.map(post => {
            return <PostCardPreview key={post.id} post={post}/>
        })
        }
    </ul>
)
}