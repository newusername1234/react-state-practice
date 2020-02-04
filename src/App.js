import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './Input';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'this is the text value in state'
    };
  }

  render() {
    return (
      <div>
        <Input helpb={this._updateText} textValue={this.state.textValue}/>
        <Output textValue={this.state.textValue} />
      </div>
    );
  }

  _updateText = (string) => {
    this.setState({
      textValue: string
    })
  }



}




export default App;