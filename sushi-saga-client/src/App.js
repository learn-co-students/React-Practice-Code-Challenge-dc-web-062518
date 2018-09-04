import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      wallet: 100,
      allSushi: [],
      sushiEaten: [],
      range: [0, 4],
      inner: 0,
      outer: 4
    }
  }

  addPlateToTable = (piece) => {
    let newSushi = this.state.allSushi.map(sushi => {
        if(piece.id === sushi.id) {
        sushi.eaten = true
        return sushi
      } else {
        return sushi
      }
    })
    if(this.state.wallet >= piece.price){
      this.setState({
        allSushi: newSushi,
        sushiEaten: [...this.state.sushiEaten,1],
        wallet: this.state.wallet - piece.price
      })
    }
  }

  moreSushi = () => {
    this.setState({
      inner: this.state.inner + 4,
      outer: this.state.outer + 4
    })
  }

  componentDidMount() {
  fetch(API)
    .then(r => r.json())
    .then(sushi => this.setState ({
      allSushi: sushi.map(sushi => {
        sushi.eaten = false
        return sushi
      })
    })
  )
}

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.allSushi.slice(this.state.inner, this.state.outer)} sushiStart={this.state.sushiStart}  addPlateToTable={this.addPlateToTable} moreSushi={this.moreSushi}/>
        <Table wallet={this.state.wallet} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;
