import React from 'react';
import css from './styles.css';

export default ({posts, onClick}) => (
    <div>
        <h1>OI</h1>
        <button onClick={() => onClick(posts[1])}>BUTTON</button>
    </div>
);
