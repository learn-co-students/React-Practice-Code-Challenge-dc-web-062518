import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushi: [],
      range: [0, 4],
      displaySushi: [],
      wallet: 100,
      eatenSushi: []
    }
  }

  payForSushi= (sushi) => {
    this.setState({
      wallet: this.state.wallet - sushi.price,
      eatenSushi: [...this.state.eatenSushi, sushi]})
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(json => {
        this.setState({allSushi: json, displaySushi: json.slice(0,4)})
      })
  }

  eatSushi = (sushi) => {
    if (!this.eaten(sushi)) {
      if ((this.state.wallet - sushi.price) < 0) {
        alert("You don't have enough money for that sushi! If you'd like to eat that sushi, add more money to your wallet.")
      } else {
        this.payForSushi(sushi)
      }
    }
  }

  moreSushi = () => {
    let range = this.state.range
    if (range[0] === 96) {
      range = [0, 4]
    } else {
      range = this.state.range.map(num => num + 4)
    }
    this.setState({range})
  }

  addToWallet = (e) => {
    e.preventDefault()
    e.persist()
    let amt = parseInt(e.target.querySelector('#money').value)
    if (isNaN(amt)) {
      alert("Please enter an integer")
    } else {
      this.setState({wallet: this.state.wallet + parseInt(amt)})
    }
    e.target.reset()
  }

  eaten = (sushi) => this.state.eatenSushi.includes(sushi)

  render() {
    return (
      <div className="app">
        <SushiContainer
          displaySushi={this.state.allSushi.slice(...this.state.range)}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
          eaten={this.eaten}
          />
        <Table
          wallet={this.state.wallet}
          eatenSushi={this.state.eatenSushi}
          addToWallet={this.addToWallet}/>
      </div>
    );
  }
}

export default App;
