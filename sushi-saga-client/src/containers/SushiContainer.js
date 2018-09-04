import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  state={
    init: 0
  }

  fourSushi =()=> {
    return this.props.sushis.slice(this.state.init, this.state.init+4).map(sushi=> <Sushi sushi={sushi} key= {sushi.id} onClick= {this.props.click} />)
  }

  nextFour =()=> {
    this.setState({init: this.state.init + 4})
  }

  render(){
    return (
      <div className="belt">
        {
          this.fourSushi()
        }
        <MoreButton nextFour= {this.nextFour}/>
      </div>
    )
  }
}

export default SushiContainer
