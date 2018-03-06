/* global it, expect, jest */

import React from 'react';
import { App } from './App';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { initialState } from './reducers/';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
    />
  );

  expect(component.exists()).toEqual(true);
});
