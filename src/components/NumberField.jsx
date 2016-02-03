var React = require('react');

var NumberField = React.createClass({
    //Set initial state value for input
    getInitialState: function() {
      return({value: ''});
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
              <input type='text' placeholder={'NUMBER: ' + this.props.placeholder} value={this.state.value} onChange={this.onChange} />
          </div>
      );
    }
});


module.exports = NumberField;
