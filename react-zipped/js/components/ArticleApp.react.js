var React = require('react');
var ArticleStore = require('../stores/ArticleStore');
var ArticleActions = require('../actions/ArticleActions');
var ArticleTextInput = require('./ArticleTextInput.react');

function getArticlesState() {
  return {
    allArticles: ArticleStore.getAll(),
  };
}

var ArticleApp = React.createClass({

  getInitialState: function() {
    return getArticlesState();
  },

  componentDidMount: function() {
    ArticleStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ArticleStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var articles = []
    for (key in this.state.allArticles) {
      articles.push(<div>{this.state.allArticles[key]}</div>)
    }

    return (
      <div>
        { articles }
        <ArticleTextInput onSave={this._onSave} />
      </div>
    );
  },

  // _onChange: function() {
  //   this.setState(getArticlesState());
  // },

  _onSave: function(text, author) {
    ArticleActions.create(text, author);
  }

});

module.exports = ArticleApp;
