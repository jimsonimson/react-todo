var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })
  
  it('should call onAddTodo prop with valid data', () => {
    var todoText = 'Check mail'
    var spy = expect.createSpy(); //1. create a spy
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>); //2. Render addtodo component and inject spy into onAddTodo prop
    var $el = $(ReactDOM.findDOMNode(addTodo)); //3. use jQuery to take DOM element of addtodo
    
    addTodo.refs.todoText.value = todoText; //4. Set the ref ="todoText" to Check mail
    TestUtils.Simulate.submit($el.find('form')[0]); //5. Submit the Check mail input
    
    expect(spy).toHaveBeenCalledWith(todoText);
  });
  
  it('should not call onAddTodo prop with invalid input', () => {
    var todoText = '';
    var spy = expect.createSpy(); //1. create a spy
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>); //2. Render addtodo component and inject spy into onAddTodo prop
    var $el = $(ReactDOM.findDOMNode(addTodo)); //3. use jQuery to take DOM element of addtodo
    
    addTodo.refs.todoText.value = todoText; //4. Set the ref ="todoText" to Check mail
    TestUtils.Simulate.submit($el.find('form')[0]); //5. Submit the Check mail input
    
    expect(spy).toNotHaveBeenCalled();
  });
});