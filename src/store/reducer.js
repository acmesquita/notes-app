import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  add: ["title"]
})

const INITIAL_STATE = {
  data: [
    'React Native',
    'ReactJS',
    'NodeJS'
  ]
}

const add = (state = INITIAL_STATE, action) => {
  return { ...state, data: [ ...state.data, action.title ]}
}

export default createReducer(INITIAL_STATE, {
  [Types.ADD]: add,
})
