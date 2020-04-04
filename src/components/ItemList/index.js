import React from 'react';

// import { Container } from './styles';

export default function ItemList({ item }) {
  return (
    <span>
      {item.text} - {item.createAt}
    </span>
  );
}
