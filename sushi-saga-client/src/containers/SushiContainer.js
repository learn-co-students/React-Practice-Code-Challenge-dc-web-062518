import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.displaySushi.map(sushi => <Sushi
          name={sushi.name}
          img={sushi.img_url}
          price={sushi.price}
          key={sushi.id}
          eaten={props.eaten(sushi)}
          eatSushi={() => props.eaten(sushi) ? null : props.eatSushi(sushi)}
          />)}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
