import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';

const mapStateToProps = state => ({
    appName: state.appName,
    articles: null
})

class App extends React.Component {
    render() {
        return (
            <div>
                <Header appName={this.props.appName}></Header>
                <Home></Home>
            </div>
        );
    }
}

export default connect(mapStateToProps, () => ({}))(App);