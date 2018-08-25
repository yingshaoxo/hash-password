import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Form, TextArea} from 'informed';

var Crypto = require('crypto-js')
function get_passwd(string, length=12) {
    var result = Crypto.SHA512(Crypto.enc.Utf8.parse(string)).toString()
    result = result.slice(0, length-1)
    result = 'A' + result

    if ((result === "A441dfabd012") || (result === "Acf83e1357ee")) {
        return ""
    } else {
        return result
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hash Password</h1>
        </header>

        <Form id="state-form">
          {({ formState }) => (
            <div>
              <p className="App-intro">
                  <TextArea field="private_key" id="private_key" placeholder="private key" rows="1" cols="25" wrap="hard"></TextArea>
                  <br/>
                  <TextArea field="public_key" id="public_key" placeholder="public key" rows="1" cols="25" wrap="hard"/>
              </p>

              <p className="App-intro">
                  {get_passwd(formState.values.private_key + formState.values.public_key)}
              </p>
            </div>
          )}
        </Form>

      </div>
    );
  }
}

export default App;
