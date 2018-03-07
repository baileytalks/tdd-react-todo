/* global expect, it, describe */

import types from '../constants/';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
        completed: false
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false
          }
        ]
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('delete todo', () => {
    it('should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false
          }
        ]
      };

      const action = {
        type: types.DELETE_TODO,
        id: 1
      };

      const expectedState = {
        todos: [],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    })
  });

  describe.only('toggle todo', () => {
    it('should toggle the todo to complete', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: false
          }
        ]
      };

      const action = {
        type: types.TOGGLE_TODO,
        id: 1
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            completed: true
          }
        ]
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  })
});
