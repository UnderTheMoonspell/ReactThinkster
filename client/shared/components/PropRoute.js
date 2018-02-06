import React from 'react';
import Route from 'react-router';

export default ({children, ...props}) => (
    React.cloneElement(children,props)
)
