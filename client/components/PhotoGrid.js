import React from 'react';
import { Route } from 'react-router-dom';
import { Single } from './Single';

const PhotoGrid = React.createClass({

  render() {
    return (
        <div className="photo-grid">
            <div>OI</div>
            {/*<Route path="/view/:photo-id" component={Single}/>*/}
        </div>
    )
  }
});

export default PhotoGrid;
