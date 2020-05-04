import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // showing on by default
            status: true,
            text: "ON"
        }
    }

    handleClick() {
        // todo
        this.setState({
            status: !this.state.status,
            text: "OFF"

        });

    }

    render() {
        const t = this.state.text;

        return (
            <button onClick={this.handleClick.bind(this)}>{this.state.text}</button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);