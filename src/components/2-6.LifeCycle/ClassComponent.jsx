import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({ date: new Date()});
  }

  handleClick = () => {
    alert(this.state.date);
  }

  render() {
    console.log('render');

    return (
    <div>
         <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
