import React from 'react';
import '../style.css';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mary',
            surname: 'Poppins',
            width: window.innerWidth,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.title = this.state.name + ' ' + this.state.surname;
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        document.title = this.state.name + ' ' + this.state.surname;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({
            width: window.innerWidth
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        });
    }

    render() {
        return (
            <div>
                <section className="someStyle">
                    <input className="input"
                        value={this.state.name}
                        onChange={this.handleNameChange} 
                    />
                </section>

                <section className="someStyle">
                    <input className="input"
                        value={this.state.surname}
                        onChange={this.handleSurnameChange} 
                    />
                </section>

                <section className="someStyle">
                    <input className="input"
                        value={this.state.width}
                        onChange={this.handleSurnameChange} 
                    />
                </section>
            </div>
        )
    }
}