import { createActions, createReducer } from 'reduxsauce';

/**
 *  Criando os Types e Creators
 *  Ex.: Type.ADD e add = { type: Type.ADD, params }
 */
export const { Types, Creators } = createActions({
  add: ["note"],
  remove: ["id"]
})

const INITIAL_STATE = {
  data: []
}

const add = (state = INITIAL_STATE, action) => {
  return { ...state, data: [...state.data, action.note] }
}

const remove = (state = INITIAL_STATE, action) => {
  return { ...state, data: state.data.filter(note => note.id !== action.id) }
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
  [Types.REMOVE]: remove
})
