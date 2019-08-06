import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>;
const Title = ({ text }) => <div>{text}</div>;

class App extends Component {
  state = {
    on: false,
    input: ''
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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
