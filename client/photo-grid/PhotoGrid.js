import React from 'react';
import { Route } from 'react-router-dom';
import { Single } from '../post/Single';

class PhotoGrid extends React.Component{
  render() {
    return (
        <div className="photo-grid">
            <div>OI</div>
            {/*<Route path="/view/:photo-id" component={Single}/>*/}
        </div>
    )
  }
};

export default PhotoGrid;
