import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import marked from 'marked';
import { sanitize } from 'dompurify';
import { MdDone, MdVisibility, MdCode } from 'react-icons/md';

import { Types } from '../../store/reducer/example-reducer';

import Note from '../../models/Note';
import ItemList from '../ItemList'

import './styles.css'

export default function ComponentList() {

  const qty = 20
  const [text, setText] = useState('')
  const [previewText, setPreviewText] = useState('')

  const list = useSelector(
    state => state.exampleReducer.data.slice(0, qty)
    , [qty]);
  const dispatch = useDispatch();

  function add() {
    if (text.length > 0) {
      let note = new Note(text)
      dispatch({ type: Types.ADD, note })
      setText('')
      setPreviewText('')
    }
  }

  function preview() {
    if (previewText.length > 0) {
      setPreviewText('')
    } else {
      setPreviewText(`${sanitize(marked.parse(text))}`)
    }
  }

  function show() {
    if (previewText.length > 0) {
      return 'hide'
    } else {
      return ''
    }
  }

  function hide() {
    if (previewText.length > 0) {
      return ''
    } else {
      return 'hide'
    }
  }

  return (
    <>
      <div className="content-add">
        <div className={show()}>
          <textarea
            autoFocus
            cols={100}
            rows={10}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Digite sua nota"
            className="textarea"
          />
        </div>
        <div className={`preview ${hide()}`} dangerouslySetInnerHTML={{ __html: previewText }} />
        <div className="actions">
          <button type="button" className="color-success" onClick={add}>
            <MdDone width={24} />
          </button>
          <button type="button" onClick={preview}>
            {hide() ? <MdVisibility width={24} /> : <MdCode width={24} />}
          </button>
        </div>
      </div>
      <div className="content-list">
        <ul className="list">
          {list.map(item => <li className="item" key={item.id}><ItemList item={item} /> </li>)}
        </ul>
      </div>
    </>
  );
}
