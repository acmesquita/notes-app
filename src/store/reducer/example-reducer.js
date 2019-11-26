import { createActions, createReducer } from 'reduxsauce';

/**
 *  Criando os Types e Creators
 *  Ex.: Type.ADD e add = { type: Type.ADD, params }
 */
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

/**
 * Criando os reducers
 * Ex.: [Types.ADD]: add == switch actions.type
 *                            case Type.ADD
 *                               return add(state, action)
 *                             default
 *                                return state
 */

export default createReducer(INITIAL_STATE, {
  [Types.ADD]: add,
})
