import React from 'react'

export default function AdoptedPage(props) {
  return (
    <>
      <h2>Well done! You truly are a a good person!</h2>
      <h3>Meet your new friend!</h3>
      <img src={`${props.pet.imageURL}`}></img>
      <h4>{"Name: " + props.pet.name}</h4>
      <p>{"Age: " + props.pet.age}</p>
      <p>{"Breed: " + props.pet.breed}</p>
      <p>{"Gender: " + props.pet.gender}</p>
      <p>{"Story: " + props.pet.story}</p>
      <button type='button'
        onClick={() => props.reset()}
        >Return home?</button>
    </>
  );
}