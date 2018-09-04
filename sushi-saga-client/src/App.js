import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    dollarsLeft: 500,
    allSushi: [],
    eatenSushi: [],
    sushiX: 0,
    sushiY: 4
  }

  fetchSushi = () => {
    fetch (API)
    .then(response => response.json())
    .then(json => {
      this.setState(
        {allSushi: json.slice(this.state.sushiX, this.state.sushiY)})
    })
    console.log(this.state.eatenSushi)
  }

  componentDidMount() {
    this.fetchSushi()
  }

  eatSushi = (sushi) => {
    let eatenSushi = this.state.eatenSushi
    eatenSushi.push(sushi)

    let dollarsLeft = this.state.dollarsLeft
    dollarsLeft -= sushi.price

    this.setState ({
      eatenSushi: eatenSushi,
      dollarsLeft: dollarsLeft
    })
  }

  fetchMoreSushi = () => {
    let x = this.state.sushiX
    let y = this.state.sushiY
    x+=4
    y+=4
    this.setState ({
      sushiX: x,
      sushiY: y
    })
    this.fetchSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.allSushi} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi} fetchMoreSushi={this.fetchMoreSushi}/>
        <Table dollarsLeft={this.state.dollarsLeft} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
