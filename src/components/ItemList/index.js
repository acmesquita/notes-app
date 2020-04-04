import React from 'react';
import { useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';
import './styles.css';

export default function ItemList({ item }) {

  const dispatch = useDispatch();

  function remove() {
    let id = item.id
    dispatch({ type: Types.REMOVE, id })
  }

  return (
    <span>
      <div>{item.text}</div>
      <small>{item.createAt}</small>
      <button type="button" onClick={remove} className="trach">DEL</button>
    </span>
  );
}
