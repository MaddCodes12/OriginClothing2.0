import React from 'react';
import { Link } from 'react-router-dom';

export function CustomLink(props) {
    
  return (
    <Link to={props.to}>
      {props.children}
    </Link>
  );
}