import React from 'react';
import css from './styles.css';

const PhotoGrid = ({posts, onClick}) => (
    <div>
        <h1>OI</h1>
        <button onClick={() => onClick(posts.posts[1])}>BUTTON</button>
    </div>
);


export default PhotoGrid;
