import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './Input';
import Output from './Output';
import UppercaseOutput from './UppercaseOutput';
import ClearButton from './ClearButton';

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
        <Input updateText={this._updateText} textValue={this.state.textValue}/>
        <Output textValue={this.state.textValue} />
        <UppercaseOutput textValue={this.state.textValue} />
        <ClearButton clearInput={this._clearInput}/>
      </div>
    );
  }

  _clearInput = () => {
    this.setState({
      textValue: ''
    })
  }

  _updateText = (event) => {
      this.setState({
      textValue: event.target.value
    })
  }

}

export default App;