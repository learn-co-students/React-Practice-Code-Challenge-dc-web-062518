import React from 'react'

const Form = props=>{

  return(
    <form onSubmit={e=>{props.handleSubmit(e.target.children[1].value)}}>
    <label>Do you want to add some money?</label>
      <input type="text"/>
      <input type="submit"/>
    </form>
  )
}

export default Form
