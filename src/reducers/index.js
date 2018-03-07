import types from '../constants/';

export const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          },
        ]
      };

    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo =>
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
          )
        ]
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          ))
        ]
      };

    default:
      return state;
  }
};

export default reducer;
