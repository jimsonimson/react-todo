var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dawg'
        },
        {
          id: 2,
          text: 'Clean the yar'
        },
        {
          id: 3,
          text: 'Have food'
        },
        {
          id: 4,
          text: 'make beats'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;
    
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp; 