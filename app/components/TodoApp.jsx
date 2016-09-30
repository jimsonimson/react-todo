var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch')
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dawg'
        },
        {
          id: uuid(),
          text: 'Clean the yar'
        },
        {
          id: uuid(),
          text: 'Have food'
        },
        {
          id: uuid(),
          text: 'make beats'
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase() // we set the search value to lowercase so we can also find any lowercased words
    });
    console.log("show completed: " + showCompleted + ' | ' + "search for: " + searchText)
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