var React = require('react');
var NumberField = require('./NumberField.jsx');

var Calculator = react.createClass({
    setInitialState: function() {
      this.setState({value: ''});
    },
    onClick: function(e) {
      var operator = e.target.value;
      var result;
      var num1 = parseInt(this.number1.state.value);
      var num2 = parseInt(this.number2.state.value);
      if(operator === "+") {
        result = num1 + num2;
        console.log('plus');
      } else if(operator === "-") {
        result = num1 - num2;
        console.log('minus');
      } else if(operator === '*') {
        result = num1 * num2;
        console.log('mulitplication');
      } else if(operator === "/") {
        result = num1 / num2;
        console.log('division');
      } else {
        console.log('calculation failed');
      }
      this.setState({value: result});
    },
    render: function() {
      return (
        <div>
          <NumberField ref="number1" />
          <NumberField ref="number2" />
          <button type=button value="+" onClick={this.onClick}>+ Add</button>
          <button type=button value="-" onClick={this.onClick}>- Subtract</button>
          <button type=button value="*" onClick={this.onClick}>* Multiply</button>
          <button type=button value="/" onClick={this.onClick}>/ Divide</button>
        </div>
      );
    }
});

module.exports = Calculator;
