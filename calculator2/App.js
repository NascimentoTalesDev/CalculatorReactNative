import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from "./src/components/Button";
import Display from './src/components/Display';

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class App extends Component {

  state = {...initialState }

  addDigit = n => {
    const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
    
    if(n === "." && this.state.displayValue.includes(".")){
      return
    }
    
    const currentValue = clearDisplay ? "" : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay : false })

    if(n !== ".") {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values }) 
    }
  }

  clearMemory = () => {
    this.setState({ displayValue: "0"})
  }

  setOperator = () => {
    
  }

  render() {
    return (
      <View style={styles.Container}>
          <Display value={this.state.displayValue}/>
        <View style={styles.Buttons}>
          <Button label='AC' onClick={this.clearMemory} triple/>
          <Button label='/' onClick={this.setOperator} operator/>
          <Button label='7' onClick={this.addDigit}/>
          <Button label='8' onClick={this.addDigit}/>
          <Button label='9' onClick={this.addDigit}/>
          <Button label='*' onClick={this.setOperator} operator/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' onClick={this.setOperator} operator/>
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' onClick={this.setOperator} operator/>
          <Button label='0' onClick={this.addDigit} double/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='=' onClick={this.setOperator} operator/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
