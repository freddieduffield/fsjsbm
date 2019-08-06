import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>;
const Title = ({ text }) => <div>{text}</div>;

class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    lifeCycle: ''
  };

  componentDidMount() {
    this.setState({ lifeCycle: 'componentDidMount' });
  }

  componentWillReceiveProps() {
    this.setState({ lifeCycle: 'componentWillReceiveProps' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h3 className={this.state.mainColor}>Everyone is welcomeu</h3>
        </header>
        <Title text="Some title" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
        <button onClick={() => this.setState({ on: true })}>Click</button>
        <h2>{this.state.input}</h2>
        <input
          onChange={e => this.setState({ input: e.currentTarget.value })}
          type="text"
        />
        <p className="lifeCycle">{this.state.lifeCycle}</p>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}

export default App;
