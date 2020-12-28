import React from 'react';

export default function Animal (props) {
  const { age, breed, description, gender, imageURL, name, story } = props.pet;
  return (
    <div className='pet'>
      <h1>{name}</h1>
      <img src={imageURL} />
      <h3>Breed: {breed}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Age: {age}</h3>
      <h3>{description}</h3>
      <p>{story}</p>
    </div>
  )
}

Animal.defaultProps = {
  pet: {
    age: 0,
    breed: 'nonoe',
    description: 'no description',
    gender: 'no gender',
    imageURL: 'no imgURL',
    name: 'no name',
    story: 'no story'
  } 
}