import React from 'react';
import { useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';
import { MdDeleteForever } from 'react-icons/md';
import './styles.css';

export default function ItemList({ item }) {

  const dispatch = useDispatch();

  function remove() {
    let id = item.id
    dispatch({ type: Types.REMOVE, id })
  }

  return (
    <div className="content-wrapper">
      <div className="head">
        <button type="button" onClick={remove} className="trach">
          <MdDeleteForever width={16} />
        </button>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: item.text }} />
      <div className="footer">
        <small>Criado em: {item.createAt}</small>
      </div>
    </div>
  );
}
