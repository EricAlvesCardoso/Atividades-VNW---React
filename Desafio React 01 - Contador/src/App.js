
import './App.css';

import React, { Component } from 'react'

class App extends Component {


  state = {
   cont : 0
  }
  

  adicionar = () => {
    if (this.state.cont < 10){
      this.setState({
        cont: this.state.cont + 1
      })
    }
  }

  diminuir = () =>{
    if(this.state.cont > 0){
      this.setState({
        cont: this.state.cont - 1
      })
    }
  }





  render(){
    return(
      <div className='container'>
        <h1 className='titulo'>Contador</h1>
        <h2 className='cont'>{this.state.cont}</h2>
        <button className='first-button' onClick={this.adicionar}>+</button>
        <button className='second-button' onClick={this.diminuir}>-</button>
      </div>
    )
  }





}


export default App