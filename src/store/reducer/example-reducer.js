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
  data: JSON.parse(localStorage.getItem('list')) || []
}

const add = (state = INITIAL_STATE, action) => {
  let newData = [...state.data, action.note]
  localStorage.clear()
  localStorage.setItem('list', JSON.stringify(newData))
  return { ...state, data: newData }
}

const remove = (state = INITIAL_STATE, action) => {
  let newData = state.data.filter(note => note.id !== action.id)
  localStorage.clear()
  localStorage.setItem('list', JSON.stringify(newData))
  return { ...state, data: newData }
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
