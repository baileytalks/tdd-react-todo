import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
      />
    );
  });

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  it('a submit button should exist', () => {
    expect(component.find('.todo-submit').length).toEqual(1);
  });

  it('the button should call the submitTodo function when clicked', () => {
    component = mount(<AddTodo submitTodo={submitMock} />);

    expect(submitMock.mock.calls.length).toEqual(0);
    component.find('form').simulate('submit');
    expect(submitMock.mock.calls.length).toEqual(1);
  });
});
