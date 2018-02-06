import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhotoGrid from '../photo-grid/PhotoGrid';
import Single from '../post/Single';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    posts: state.posts,
})

const mapDispatchToProps = dispatch => {
    return {
        onTesteClick: id => {
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
                <Route path="/teste2" component={Single} posts={this.props.posts}/>
                <Route path="/" component={PhotoGrid} posts={this.props.posts}/>
            </Switch>            
        </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
