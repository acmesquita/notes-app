import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';

export default function ComponentList() {

  const qty = 20
  const [text, setText] = useState('')

  const list = useSelector(
    state => state.exampleReducer.data.slice(0, qty)
    , [qty]);
  const dispatch = useDispatch();

  function add() {
    dispatch({ type: Types.ADD, title: text })
  }

  return (
    <>
      <textarea
        cols={100}
        rows={10}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="button" onClick={add}>ADD</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}
