import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import marked from 'marked';
import { sanitize } from 'dompurify'
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
    if (text.length > 0) {
      let mdText = sanitize(marked.parse(text))
      let note = new Note(mdText)
      dispatch({ type: Types.ADD, note })
      setText('')
    }
  }

  return (
    <>
      <div className="content-add">
        <textarea
          cols={100}
          rows={10}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Digite sua nota"
        />
        <button type="button" onClick={add}>ADD</button>
      </div>
      <div className="content-list">
        <ul>
          {list.map(item => <li key={item.id}><ItemList item={item} /> </li>)}
        </ul>
      </div>
    </>
  );
}
