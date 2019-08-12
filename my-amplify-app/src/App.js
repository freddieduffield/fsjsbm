import React, {Component} from 'react';

import './App.css';

import {withAuthenticator} from 'aws-amplify-react'
import { Auth, API, graphqlOperation } from 'aws-amplify'


const ListTodos = ` 
  query { 
    listTodos {
      items { 
        id name description completed 
      }
    }
  }`

  class App extends Component {
    state = {todos: []}

    async componentDidMount() {
      const todoData = await API.graphql(graphqlOperation(ListTodos))
      this.setState({todos: todoData.data.listTodos.items})
    }
    render() {
      return (
        <div>
          {
            this.state.todos.map((todo, i) => (
              <div>
                <h3>{todo.name}</h3>
                <p>{todo.description}</p>
              </div>
            ))
          }
        </div>
      )
    }
  }


// class App extends Component {
 
//   state = {username: '', password: '', phone_number: '', authenticationCode: '', step : 0}

//   onChange = e => {
//     this.setState({[e.target.name]: e.target.value})
//   }

//   signUp = async () => {
//     const {username, password, email, phone_number} = this.state
//     try {
//       await Auth.signUp({username, password, attributes: {email, phone_number  }})
//       console.log('successfully signed up')
//       this.setState({step: 1}) 
//     } catch (err) {console.log('error signing up: ', err)}
//   }

//   confirmSignup = async () => {
//     const {username, authenticationCode} = this.state
//     try {
//       await Auth.confirmSignUp(username, authenticationCode)
//       console.log('user successfully signed up')
//     } catch (err) {console.log('error confirming sign up : ', err)}
//   }

//   render() {
//     return (
//     <div className="App">
//       {
//         this.state.step === 0 && (
//           <div>
//             <input placeholder="username" onChange={this.onChange} name="username" styles={styles.input} />
//             <input placeholder="password" onChange={this.onChange} name="password" type="password" styles={styles.input} />
//             <input placeholder="email" onChange={this.onChange} name="email" styles={styles.input} />
//             <input placeholder="phone number" onChange={this.onChange} name="phone_number" styles={styles.input} />
//             <button onClick={this.signUp}>Sign Up</button>
//           </div>
//         )
//       }
//       {
//         this.state.step === 1 && (
//           <div>
//             <input placeholder="username" onChange={this.onChange} name="username" styles={styles.input} />
//             <input placeholder="authentication code" onChange={this.onChange} name="authenticationCode" type="password" styles={styles.input} />
//             <button onClick={this.confirmSignUp}>Confirm Sign Up</button>
//           </div>
//         )
//       }
//     </div>);

//   }
// }

const styles = {
  input: {
    height: 35, margin: 100
  }
}


export default withAuthenticator(App);
