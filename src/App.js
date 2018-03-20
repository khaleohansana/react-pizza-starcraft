import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import person, {SupDawg} from './Data'
import Pizza from './Pizza'
import Game from './Game'

class App extends Component {
  state = {
    thumbsUpCountApp: 0,
    pizzaName: "Dankest Pizza Thou Shalt Eat"
  }

  pizzaNameOnChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({
        pizzaName: e.target.value
    })
  }

  thumbsUpCountButtonOnClickHandler = (e) => {
    console.log(this.state.thumbsUpCountApp)
    this.setState((prevState) => {
        return {
          thumbsUpCountApp: prevState.thumbsUpCountApp + 1
        }
      })
  }

  render() {
    return (
      <div className="App">
        
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello my name is {person.name} and I am goat. My favorite color is {person.favoriteColor} and you already know I {person.isFunny ? " am funny" : " I am not funny"}
        </p>
        <p>
          Good lord if you must know my favorite car is a {person.car}. Soooo your boii is a dope ass {person.dope}
        </p>
        <SupDawg specialMessage={person.name}/>
        {SupDawg({specialMessage: "was good from special Message"})}
        
      <button onClick={this.thumbsUpCountButtonOnClickHandler}>
        Vote Up
        </button>
        <p>
        Pizza Name: <input types="text" onChange={this.pizzaNameOnChangeHandler}/>
        </p>
        <p>Vote Up Count = {this.state.thumbsUpCountApp}</p>
      <p>
        <Pizza pizzaName={this.state.pizzaName} price= {13.33} rating="*****" thumbsUpCountApp ={this.state.thumbsUpCountApp}/>
      </p>
       <p>
         <Game gameName="Ill fuck yo shit up on Starcraft" rating="*****" playable="hard learning curve RTS you just gotta play for a bit than youll get the hang of it"/>
      </p>
      </div>
    );
  }
}

export default App;
