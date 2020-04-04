import React from 'react';
import { GiBookmark } from 'react-icons/gi';
import { GoMarkGithub } from 'react-icons/go';

import './styles.css';

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="title-with-logo">
        < GiBookmark size={32} />
        <div className="title">
          <h2>Notes App</h2>
          <small>Desevolvido por Catharina Mesquita</small>
        </div>
      </div>
      <a href="https://github.com/acmesquita/notes-app"><GoMarkGithub size={18} /> Acesso ao repositório</a>
    </div>
  );
}
