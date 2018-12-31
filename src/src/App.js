import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Form, TextArea} from 'informed';

import {CopyToClipboard} from 'react-copy-to-clipboard';

var Crypto = require('crypto-js')
function get_passwd(private_key, public_key, length=12) {
    if (private_key == undefined) {
        private_key = ''
    }
    if (public_key == undefined) {
        public_key = ''
    }
    const string = private_key + public_key
    let result = Crypto.SHA512(Crypto.enc.Utf8.parse(string)).toString()
    result = result.slice(0, length-1)
    result = 'A' + result
    if (result == 'Acf83e1357ee') {
        return ''
    }
    return result
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
                  <TextArea field="private_key" id="private_key" placeholder="private key" rows="1" cols="25"/>
                  <br/>
                  <TextArea field="public_key" id="public_key" placeholder="public key" rows="1" cols="25"/>
              </p>

              <CopyToClipboard 
                text={get_passwd(formState.values.private_key, formState.values.public_key)}
                onCopy={() => {
                  alert("Password Copyed");
                }}
              >
                <p className="App-intro">
                    {get_passwd(formState.values.private_key, formState.values.public_key)}
                </p>
              </CopyToClipboard>
            </div>
          )}
        </Form>

      </div>
    );
  }
}

export default App;
