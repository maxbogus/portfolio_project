import React from 'react';
import ReactDOM from 'react-dom';

import Portfolio from './portfolio.js';

const portfolio = document.getElementById('portfolio');
if (portfolio) {
    ReactDOM.render(<Portfolio />, portfolio);
}
