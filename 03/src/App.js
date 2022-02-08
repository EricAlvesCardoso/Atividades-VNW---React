// Crie uma class component 


// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)


// **Bônus
// Adicione uma imagem da sua fruta favorita via import









// Crie uma class component 


// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)


// **Bônus
// Adicione uma imagem da sua fruta favorita via import


// import Img from './melancia.jpg';

import img from './img/melancia.jpg';

import React, { Component } from 'react' 

export default class App extends Component {

  state = {
    pessoa: [
      {
        nome: "Brenda",
        idade: 25,
        comidaFavorita: "Ensopado de Frango",
        musica: ["rap", "pagode", "trap"]
      }
    ]
  }



  render() {
    return(
      <div>
      <h1>O Nome é : {this.state.pessoa[0].nome}</h1>
      <h2>Idade é: {this.state.pessoa[0].idade}</h2>
      <h3>Comida Favorita é : {this.state.pessoa[0].comidaFavorita}</h3>
      <ul>
        <li>Estilo Musical: {this.state.pessoa[0].musica[0]}</li>
        <li>Estilo Musical: {this.state.pessoa[0].musica[1]}</li>
        <li>Estilo Musical: {this.state.pessoa[0].musica[2]}</li>
      </ul>
      <img src={img}></img>
      </div>
      
    )
    }

}