var React = require('react');
var ReactPropTypes = React.PropTypes;

var ArticleTextInput = React.createClass({

  propTypes: {
    id: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  render: function() {
    return (
      <div>
        <textarea onClick={this._onChange} value={this.state.value}/>
        <button onClick={ this._save }>Add Article</button>
      </div>
    );
  },

  _save: function() {
    this.props.onSave(this.state.value, 'Sahil');
    this.setState({
      value: ''
    });
  },

  _onChange: function(event) {
    debugger
    this.setState({
      value: event.target.value
    });
  }

});

module.exports = ArticleTextInput;