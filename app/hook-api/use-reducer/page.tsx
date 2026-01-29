"use client"

import React, { useReducer } from 'react';


type actionType = {
  type: string;
  value?: any;
}

const initialState = {
  count: 0,
  name: 'Reducer Example',
};
const reducer = (state: any, action: actionType) => {
  switch (action.type) {
    case 'count':
      return { ...state, count: action.value };
    case 'name':
      return { ...state, name: action.value };
    default:
      return state;
  }
};

const ReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>
    <h1>{state.name}</h1>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'count', value: state.count + 1 })}>Increment Count</button>
    <button
      onClick={() => dispatch({
        type: 'name',
        value: `Updated Reducer Example: ${new Date().toLocaleTimeString()}`
      })}
    >
      Change Name
    </button>
  </div>;
};

export default ReducerPage;