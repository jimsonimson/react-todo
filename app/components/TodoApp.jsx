var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
  handleAddTodo: function(text) {
    alert('new todo ' + text);
  },
  render: function () {
    var {todos} = this.state;
    
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp; 