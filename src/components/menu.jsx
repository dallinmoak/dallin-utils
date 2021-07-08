import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Menu(){
  const path = useLocation().pathname;
  const links = [
    { path: '/', name: 'Home'},
    { path: '/url-builder', name: 'URL Builder' }
  ]
  function printLinks() {
    return links.map((link, index) => {
      return(
        <Link
        key={index}
        to={link.path}
        className={path == link.path? 'menu-link-active': ''}
        >
          {link.name}
        </Link>
      )
    });
  }
  return (
    <div className='menu-main'>
      {printLinks()}
    </div>
  );
}