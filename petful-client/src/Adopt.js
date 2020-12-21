import React from 'react'
import AdoptedPage from './AdoptedPage'

export default class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPeople: [],
      currPet: '',
      hasPet: false,
      congrats: false
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.props.getPets();
  }

  storePet = (pet) => {
    this.setState({
      currentPet: this.props.pet,
      hasPet: true
    })
    this.props.removePet(`${pet}`)
  }

  thisDog = () => {
    const { imageURL, name, age, breed, gender, story } = this.props.dog;
    if (!this.props.dog.length) {
      return (
        <>
          <img src={`${imageURL}`} />
          <h4>This is {name}</h4>
          <ul>
            <li>They are {age} years old</li>
            <li>Their breed is {breed}</li>
            <li>Gender is {gender}</li>
            <li>{story}</li>
          </ul>
          {this.props.currentPeople[0].includes('you') && <button
            onClick={() => this.storePet('dog')}
          >Adopt me</button>}
        </>
      )
    } else {
      return <h2>No more dogs to adopt, good job!</h2>
    }
  }

  thisCat = () => {
    const { imageURL, name, age, breed, gender, story } = this.props.cat;
    if (!this.props.cat.length) {
      return (
        <>
          <img src={`${imageURL}`} />
          <h4>This is {name}</h4>
          <ul>
            <li>They are {age} years old</li>
            <li>Their breed is {breed}</li>
            <li>Gender is {gender}</li>
            <li>{story}</li>
          </ul>
          {this.props.currentPeople[0].includes('you') && <button
            onClick={() => this.storePet('cat')}
          >Adopt me</button>}
        </>
      )
    } else {
      return <h2>No more cats to adopt, good job!</h2>
    }
  }

  resetFields = () => {
    this.setState({
      hasPet: false,
      congrats: false
    })
    this.props.history.push('/')
  }

  render() {
    if (!this.state.hasPet) {
      return (
        <div>
          <p>Current Adoption Queue: {this.props.listPeople()}</p>
          <h2>Say hello to your new pet:</h2>
          <div>
            <div>
              <h3>Doggo</h3>
              {this.thisDog()}
            </div>
            <div>
              <h3>Kitty</h3>
              {this.thisCat()}
            </div>
          </div>
        </div>
      )
    } else {
      if (!this.state.congrats) {
        this.props.deletePerson();
        this.setState({ congrats: true })
      }
      return (
        <>
          <AdoptedPage
            pet={this.state.currentPet}
            reset={this.resetFields}
          />
          <footer>
            <p>Current Adoption Queue: {this.props.listPeople()}</p>
          </footer>
        </>
      )
    }
  }

}
