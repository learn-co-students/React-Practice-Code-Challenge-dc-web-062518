import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {

  const handleClick = (sushi) => {
    props.eatSushi(sushi)
  }

  const moreSushi = () => {
    props.fetchMoreSushi()
  }

  return (
    <Fragment>
      <div className="belt">
        {
          props.allSushi.map(sushi =>
            <Sushi sushi={sushi}  eatenSushi={props.eatenSushi} onClick={() => handleClick(sushi)}/>
          )

        }
        <MoreButton onClick={() => moreSushi()}/>
      </div>
    </Fragment>
  )
}


export default SushiContainer
