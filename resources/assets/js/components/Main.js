import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Products from '../components/Products';

/* An example React component */
class Main extends Component {
    render() {
        return (
            <div>
                <h3>All Products</h3>
                <Products />
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
