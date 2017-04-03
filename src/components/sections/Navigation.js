import React from 'react';

const styleOfList = {
  paddingTop: '10px',
  textAlign: 'center'
}

const Navigation = () => (
  <nav>
    <ul>
      <li style={styleOfList}><a href="/" className="btn">Albums</a></li>
      <li style={styleOfList}><a href="/about" className="btn">About</a></li>
    </ul>
  </nav>
);

export default Navigation;
