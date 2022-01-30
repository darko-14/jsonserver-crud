import { Component } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import { getContacts, addContact, editUser, deleteUser } from './service/api'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
     
    }
  }

  handleClick(state){
    
  }

  render() {
    return(
      <div className="App">
        Contact List 
        <button onClick={this.handleClick}>Inc</button>
        <Form />
        <List />
      </div>
    )
  }
}
export default App