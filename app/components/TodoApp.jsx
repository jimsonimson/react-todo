var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch')

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
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
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase() // we set the search value to lowercase so we can also find any lowercased words
    })
  },
  render: function () {
    var {todos} = this.state;
    
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp; 