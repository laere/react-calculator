var React = require('react');
var NumberField = require('./NumberField.jsx');

var Calculator = React.createClass({

    getInitialState: function() {
      return({value: ''});
    },

    onClick: function(e) {
      var operator = e.target.value;
      var result;
      var num1 = parseInt(this.refs.number1.state.value);
      var num2 = parseInt(this.refs.number2.state.value);
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
      console.log('operator: ' +  operator + ' num1: ' + num1 + ' num2: ' + num2 + ' result: ' + result);
    },

    clearInputFields: function() {
      this.refs.number1.clear();
      this.refs.number2.clear();
      this.setState({value: ''});
    },

    render: function() {

      var resultStyle = {
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      };

      return (
        <div className="calc">

          <NumberField ref="number1" placeholder="123" />
          <NumberField ref="number2" placeholder='1234' />

          <button className="btn" type="button" value="+" onClick={this.onClick}> + Add </button>
          <button className="btn" type="button" value="-" onClick={this.onClick}> - Subtract </button>
          <button className="btn" type="button" value="*" onClick={this.onClick}> * Multiply </button>
          <button className="btn" type="button" value="/" onClick={this.onClick}> / Divide </button>

          <input style={resultStyle} placeholder="result" value={this.state.value} readOnly />

          <button className="btn" type="button" onClick={this.clearInputFields}> Clear </button>

        </div>
      );
    }
});

module.exports = Calculator;
