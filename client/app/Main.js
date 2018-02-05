import React from 'react';
import { Route } from 'react-router-dom';
import { PhotoGrid } from '../photo-grid/PhotoGrid';

const Main = React.createClass({

  render() {
    return (
        <div className="photo-grid">
            <h1>OI</h1>
            <Route exact path="/" component={PhotoGrid}/>
        </div>
    )
  }
});

export default Main;
