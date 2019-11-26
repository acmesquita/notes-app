import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';

export default function ComponentList() {

  const qty = 20

  const list = useSelector(
      state => state.exampleReducer.data.slice(0, qty)
    , [qty]);
  const dispatch = useDispatch();

  function add(){
    dispatch({ type: Types.ADD, title: 'GrafQL'})
  }

  return (
    <>
      <ul>
        {list.map( item => <li key={item}>{item}</li>)}
      </ul>
      <button type="button" onClick={add}>ADD</button>
    </>
  );
}
