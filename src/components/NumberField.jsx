var React = require('react');

var NumberField = React.createClass({
    //Set initial state value for input
    setInitialState: function() {
      this.setState({value: ''});
    },
    //Detects any changes in state value
    onChange: function(e) {
      this.setState({value: e.target.value});
    },
    //When values are cleared set state back to nothing.
    clear: function() {
      this.setState({value: ''});
    },
    //Render input element to page
    render: function() {
      return (
          <div>
              <input type='text' value={this.state.value} onChange={this.onChange} />
          </div>
      );
    }
});


module.exports = NumberField;
