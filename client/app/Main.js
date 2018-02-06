import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhotoGrid from '../home/PhotoGrid';
import Single from '../post/Single';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PropRoute from '../shared/components/PropRoute';

const mapStateToProps = state => ({
    posts: state.posts.posts
})

const mapDispatchToProps = dispatch => {
    return {
        onTesteClick: id => {
            console.log(1)
            alert(id);
            // dispatch({ type: 'INCREMENT_LIKES' });
        }
    }
}

class Main extends React.Component{
  render() {
    return (
        <div className="main">          
            <Switch>
                {/*<Route path="/teste2" component={Single} posts={this.props.posts}/>*/}
                {/*<Route path="/" component={PhotoGrid} posts={this.props.posts}/>*/}
                <PropRoute path="/">
                    <PhotoGrid posts={this.props.posts} onClick={(e) => this.props.onTesteClick(e)} />
                </PropRoute>
            </Switch>            
        </div>
    )
  }
};

Main.propTypes = {
    store: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
