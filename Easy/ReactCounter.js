import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    increase = () => {

        // increment the total by 1
        this.setState(({ total }) => ({
            total: total + 1
        }))
    }

    render() {
        return (
            <div id="mainArea">
                <p>button count: <span>{this.state.total}</span></p>
                <button id="mainButton" onClick={this.increase.bind(this)}>Increase</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);