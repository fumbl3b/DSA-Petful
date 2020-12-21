import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(props) {
  return (
    <div>
      <h2>quickly adopt a new friend</h2>
      <p>welcome to petful, your one stop shop to adopting a cat or a dog.</p>
      
      <Link to={'/adopt'}><button>Lets adopt a Pet</button></Link>
    </div>
  )
}