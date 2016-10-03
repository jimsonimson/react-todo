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
          text: 'Walk the dawg',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Have food',
          completed: true
        },
        {
          id: uuid(),
          text: 'make beats',
          completed: false
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
          text: text,
          completed: false
        }
      ]
    })
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    
    this.setState({todos: updatedTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp; 