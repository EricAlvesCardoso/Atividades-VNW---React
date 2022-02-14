//Crie um component de class


//Crie um array de objetos no STATE com pelo menos 6 objetos


//Faça um map do seu state e exiba os dados na tela

import { render } from '@testing-library/react'
import React, { Component } from 'react'

class App extends Component {
   state = {
     dados: [
       {
         nome:"Eric",
         telefone: "75-8807-9569",
       },
       {
        nome:"Olivia",
        telefone: "75-8807-4060",
       },
       {
        nome:"Brenda",
        telefone: "75-8807-3059",
       },
       {
        nome:"Maria",
        telefone: "75-8807-5569",
       },
       {
        nome:"Edmundo",
        telefone: "75-8807-9889",
       },
       {
        nome:"Vitor",
        telefone: "75-8807-4587",
       },
       {
        nome:"Rita",
        telefone: "75-8807-2522"
       }
     ] 
   }



render(){
  return(
    <div>
      {this.state.dados.map((item) => (
        
        <div>
            <p>Nome: {item.nome}</p>
            <p>Tel: {item.telefone}</p>
          </div>
          
     
      ))}
    </div>
  )
}
}
export default App