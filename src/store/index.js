import { createStore } from 'redux'

const INITIAL_STATE = {
  data: [
    'React Native',
    'ReactJS',
    'NodeJS'
  ]
}

function reducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'ADD_REDUCER':
      return { ...state, data: [ ...state.data, action.title ]}
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store;