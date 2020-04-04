import React from 'react';
import { useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';
// import { Container } from './styles';

export default function ItemList({ item }) {

  const dispatch = useDispatch();

  function remove() {
    let id = item.id
    dispatch({ type: Types.REMOVE, id })
  }

  return (
    <span>
      {item.text} - {item.createAt}
      <button type="button" onClick={remove}>DELETE</button>
    </span>
  );
}
