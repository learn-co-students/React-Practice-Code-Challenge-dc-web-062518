import React from 'react'

const SushiWallet = (props) => {
  return (
    <div className="form">
    <h2>Enter Amount To Add To Wallet</h2>
    <form onSubmit={props.addToWallet}>
      <input type="text" id="money"/>
      <input type="submit" value="Add"/>
    </form>
    </div>
  )
}

export default SushiWallet
