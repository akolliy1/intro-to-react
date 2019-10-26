import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Greeting from './Greeting';

class Hackacademy extends Component {
    render () {
        return (
            <div>
                <Greeting name="obinna" />
                <h1>My first React App!</h1>
            </div>
        )
    }
}

ReactDom.render(<Hackacademy />, document.getElementById('create-article-form'));
