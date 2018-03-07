import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';
import actions from './actions/';

export const App = ({ submitTodo, todos, deleteTodo, toggleTodo }) => (
  <div className="card">
    <h1>What do you want to do today?</h1>
    <AddTodo submitTodo={submitTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    <footer>made with ❤️ by <a href="https://github.com/baileytalks/tdd-react-todo">@baileytalks</a></footer>
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    },
  )).isRequired,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },
  toggleTodo: (id) => {
    dispatch(actions.toggleTodo(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
