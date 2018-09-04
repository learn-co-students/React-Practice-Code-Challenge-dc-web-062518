import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/form'
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis: [],
    money: 0
  }

  componentDidMount = ()=>{
    fetch(API)
    .then(r=> r.json())
    .then(json=>{
      let allSushis = json.map(sushi=>{
        sushi.eaten= false
        return sushi
      })
      this.setState({sushis: allSushis})})
  }

  emptyPlates = ()=>{
    return this.state.sushis.filter(sushi=>sushi.eaten === true)
  }

  click = id=> {
    let allSushis = this.state.sushis
    let sushi = allSushis.find(sushi=> sushi.id === id)

    if(parseInt(this.state.money, 10) - parseInt(sushi.price, 10) >= 0){
      sushi.eaten = true
      this.setState({
        sushis: allSushis,
        money: parseInt(this.state.money, 10) - parseInt(sushi.price, 10)})
    }
  }

  notEaten= ()=>{
    return this.state.sushis.filter(sushi=> sushi.eaten === false)
  }

  handleSubmit= (value)=>{
    this.setState({money: value})
  }

  renderAllButForm= ()=>{
    if(parseInt(this.state.money, 10)!==0){
      return <div className="app">
        <SushiContainer click= {this.click} sushis= {this.state.sushis}/>
        <Table money= {this.state.money} emptyPlates= {this.emptyPlates()}/>
      </div>
    }else{
      return <Form handleSubmit={this.handleSubmit}/>
    }
  }

  render() {
    return (
      this.renderAllButForm()
    );
  }
}

export default App;
