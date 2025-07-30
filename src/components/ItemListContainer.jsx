import React from 'react';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>
    </section>
  );
};

export default ItemListContainer;