import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Btn.css';
import './Chatbox.css';

function Button(props){
  return (
  <button type="submit" className="ha_submit_btn">{props.submit_btn_label}</button>
  ); 
}

function Input(props){
  return (
  <div className="input-wrapper">
  <input className="input-text" type={props.input_type} name={props.input_name} defaultValue={props.input_value}></input>
  </div>
  );
  
}

class Chatbox extends Component{
  render(){
    return (
    <div className="chatbox-wrapper">
      <form className="chatbox-form">
        <Input input_type="text" input_name="m" input_value="Ask Questions."/>
        <Button submit_btn_label="Send" />
        </form>
    </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Chatbox />
      </div>
    );
  }
}

export default App;