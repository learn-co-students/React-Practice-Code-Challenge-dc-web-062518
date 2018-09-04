import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {

//   function fourSushi() {
//   for(var i = props.sushiStart; i < props.sushiStart + 4; i++) {
//     <div>
//       <h4>{props.allSushi[i].name}</h4>
//     </div>
//   }
// }

  return (
    <Fragment>
      <div className="belt">
        {props.allSushi.map(sushi =>
          <Sushi sushi={sushi} key={sushi.id} click={props.addPlateToTable} />
        )}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
