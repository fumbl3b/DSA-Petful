import React from 'react'
import config from '../config'
import Landing from '../Landing'
import Adopt from '../Adopt'
import { Route, Switch } from 'react-router-dom'


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      cat: '',
      dog: '',
      currName: ''
    };
    this.getPeople = this.getPeople.bind(this);
  }

  componentDidMount() {
    return this.getPeople();
  }

  getPeople = () => {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/people`)
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(people => this.setState({ people }))
      .catch(error => console.error({ error }));
  }

  listPeople = () => {
    let list = '';
    for (let i = 0; i < this.state.people.length; i++) {
      list += `${this.state.people[i]}, `;
    }

    return list;
  }

  addPerson = (person) => {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: person,
      })
    }).then(() => {
      return this.getPeople();
    });
  };

  removePerson = () => {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/people`, {
      method: "DELETE",
    }).then(() => {
      return this.getPeople();
    }).then(() => {
      return this.handleAdds();
    });
  };

  handleAdds = () => {
    const examplePeople = [ 'David', 'Annelie', 'Evelyn', 'Richard', 'Oroka']
    if (this.state.people[0].includes('you')) {
      for(let i = 0; i < examplePeople.length; i++) {
        setTimeout(() => {
          this.addPerson(examplePeople[i])
        },1000 + 3000 * i)
      }
    }
  }

  handleRemove = () => {
    if (this.state.people[0].includes('you')) {
      this.handleRemovePets();
      for(let i = 0; i < 5; i++) {
        setTimeout(() => {
          this.removePerson();
        },1000 + 3000 * i)
      }
    }
  }

  removePets = (type) => {
    fetch(`${config.REACT_APP_API_ENDPOINT}/pets/${type}`, {
      method: "DELETE",
    }).then(res => {
      if(!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }
      return res.json()
    }).then(() => {
      return this.getPets();
    })
  }

  getPets = () => {
    Promise.all([
      fetch(`${config.REACT_APP_API_ENDPOINT}/pets/cats`),
      fetch(`${config.REACT_APP_API_ENDPOINT}/pets/dogs`)
    ]).then(([res1,res2]) => {
      if(!res1.ok) {
        return res1.json().then(e => Promise.reject(e));
      }
      if(!res2.ok) {
        return res2.json().then(e => Promise.reject(e));
      }
    }).then(([cat, dog]) => {
      this.setState({ cat, dog })
    }).catch((error => {
      console.error({ error });
    }))
  }

  handleRemovePets = () => {
    if(!this.state.people[0].includes('you')) {
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 2000);
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 4000);
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 6000);
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 8000);
    }
  }

  grabName = (name) => {
    this.setState({ currName: name })
  }

  render() {
    return (
      <div>
        <h1>Petful</h1>
        <Switch>
          <Route
            path={'/'}
            render={(routerProps) => (
              <Landing {...routerProps} 
              addPerson={this.addPerson}
              handleRemove={this.handleRemove}
              grabName={this.grabName}
              currentPerson={this.state.currName}
              
              />
            )}
            exact={true}
          />
          <Route
            path={'/adopt'}
            render={(routerProps) => <Adopt
              {...routerProps} 
              deletePerson={this.removePerson}
              getPets={this.getPets}
              dog={this.state.dog}
              cat={this.state.cat}
              currentPeople={this.state.people}
              removePet={this.removePets}
              listPeople={this.listPeople}
              />}
            exact={true}
          />
        </Switch>
      </div>
    )
  }
}

// function Root() {
//   return <div>
//     <h1>Petful</h1>
//   </div>
// }

export default Root
