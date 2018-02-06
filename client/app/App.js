import React from 'react';
import { render } from 'react-dom';

import css from '../styles/style.styl';

import Header from './Header';
import Main from './Main';

const App = () => (
    <div>
        <Header />
        <Main  />
    </div>
)

export default App;