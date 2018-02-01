import React from 'react';
import Banner from './Banner';
import MainView from './MainView';
import { connect } from 'react-redux';
import http from '../../services/http';

const Promise = global.Promise;

const mapStateToProps = state => ({
    appName: state.appName
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: 'HOME_PAGE_LOADED', payload })
});

class Home extends React.Component {
    componentWillMount() {
        this.props.onLoad(http.Articles.all());
    }
    render() {
        return (
            <div className="home-page">
                <Banner appName={this.props.appName} />
                <div className="container page">
                    <div className="row">
                        <MainView />

                        <div className="col-md-3">
                            <div className="siderbar">
                                <p>Popular Tags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);