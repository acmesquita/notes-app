import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Types } from '../../store/reducer/example-reducer';
import { MdDeleteForever, MdEdit, MdDone } from 'react-icons/md';
import { parse } from 'marked';
import { sanitize } from 'dompurify'
import './styles.css';

export default function ItemList({ item }) {

  const [newText, setNewText] = useState(item.text)
  const [optionEdit, setOptionEdit] = useState(false)
  const dispatch = useDispatch();

  function remove() {
    let id = item.id
    dispatch({ type: Types.REMOVE, id })
  }

  function edit() {
    setOptionEdit(!optionEdit)
  }

  function save() {
    setOptionEdit(!optionEdit)
    let id = item.id
    dispatch({ type: Types.EDIT, data: { id, newText } })
  }

  return (
    <div className="content-wrapper">
      <div className="head">
        <button type="button" onClick={remove} className="trach">
          <MdDeleteForever width={16} />
        </button>
        {!optionEdit &&
          <button type="button" onClick={edit} className="edit">
            <MdEdit width={16} />
          </button>
        }
        {optionEdit &&
          <button type="button" onClick={save} className="save">
            <MdDone width={16} />
          </button>
        }
      </div>
      {!optionEdit &&
        (<span>
          <div className="content" dangerouslySetInnerHTML={{ __html: sanitize(parse(item.text)) }} />
          <div className="footer">
            <small>Criado em: {item.createAt}</small>
          </div>
        </span>
        )
      }
      {optionEdit &&
        <textarea
          cols={100}
          rows={10}
          value={newText}
          onChange={e => setNewText(e.target.value)}
          placeholder="Digite sua nota"
          className="textarea"
        />
      }
    </div>
  );
}
