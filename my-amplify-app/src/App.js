import React, {Component} from 'react';

import './App.css';

import {withAuthenticator} from 'aws-amplify-react'
// import { API } from 'aws-amplify'
import { storage } from 'aws-amplify'


// const ListTodos = ` 
//   query { 
//     listTodos {
//       items { 
//         id name description completed 
//       }
//     }
//   }`

  class App extends Component {
    state = {fileUrl: '', file:'', filename: ''}

    handleChange = e => {
      const file = e.target.files[0]
      this.setState({
        fileUrl: URL.createObjectURL(file),
        file,
        filename: file.name
      })
    }

    saveFile = () => {
      Storage.put(this.state.filename, this.state.file)
        .then(() => {

          console.log('successfully saved file!');
          this.setState({fileUrl: '', file: '', filename: ''})
        }
          )
        .catch(err => {
          console.log('error updating file', err);
        })
    }

    // async componentDidMount() {
    //   const data = await API.get('peopleapi', '/people')
    //   this.setState({people: data.people})
    // }
    render() {
      return (
        <div>
          {/* {
            this.state.people.map((person, i) => (
              <div>
                <h3>{person.name}</h3>
                <p>{person.hair_color}</p>
              </div>
            ))
          } */}

          <input type="file" onChange={this.handleChange} /> 
          <img src={this.state.fileUrl} />
          <button onClick={this.saveFile}>Save File</button>
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
