import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(props) {
  return (
    <div>
      <h2>quickly adopt a new friend</h2>
      <p>welcome to petful, your one stop shop to adopting a cat or a dog.</p>
      <label htmlFor='yourName'>Your Name:</label>
      <input 
      id='yourName'
      onChange={(e) => props.grabName(e.target.value)}
      />
      
      <Link to={'/adopt'}><button>Go!</button></Link>
    </div>
  )
}