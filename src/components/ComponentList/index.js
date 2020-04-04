import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';

import Note from '../../models/Note';
import ItemList from '../ItemList'

import './styles.css'

export default function ComponentList() {

  const qty = 20
  const [text, setText] = useState('')

  const list = useSelector(
    state => state.exampleReducer.data.slice(0, qty)
    , [qty]);
  const dispatch = useDispatch();

  function add() {
    let note = new Note(text)
    dispatch({ type: Types.ADD, note })
    setText('')
  }

  return (
    <>
      <div className="content-add">
        <textarea
          cols={100}
          rows={10}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="button" onClick={add}>ADD</button>
      </div>
      <ul>
        {list.map(item => <li key={item.id}><ItemList item={item} /> </li>)}
      </ul>
    </>
  );
}
