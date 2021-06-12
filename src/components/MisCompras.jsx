import React from 'react';
import { Card } from 'react-bootstrap';
import CardMisCompras from './CardMisCompras'

export default function componentName({ producto }) {

  return (
    <>
        <Card.Body>
            <div>
              <CardMisCompras />
              <CardMisCompras />
              <CardMisCompras />
            </div>
        </Card.Body>
    </>
  );
}
