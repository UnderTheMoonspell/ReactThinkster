import React from 'react';

const Photo = React.createClass({

  render() {

    return (
        <div className="single-photo">
            Single
            <Route path="photo/:photoId" />
        </div>
    )
  }
});

export default Photo;
