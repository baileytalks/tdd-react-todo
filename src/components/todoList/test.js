import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '.';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('TodoList component', () => {
  const deleteMock = jest.fn();
  const toggleMock = jest.fn();

  const props = {
    todos: [
      {
        id: 1,
        text: 'A todo',
        completed: false
      }
    ],
    deleteTodo: deleteMock,
    toggleTodo: toggleMock
  };

  const component = shallow(<TodoList {...props} />);

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should display a todo when passed in as a prop', () => {
    expect(component.find('.todo-text').text()).toEqual(props.todos[0].text);
  });

  it('should call the deleteTodo function when Delete button is clicked', () => {
    expect(deleteMock.mock.calls.length).toEqual(0);
    component.find('.todo-delete').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  });

  it('should call the toggleTodo function when the radio button is clicked', () => {
    expect(toggleMock.mock.calls.length).toEqual(0);
    component.find('.todo-toggle').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  });
});
