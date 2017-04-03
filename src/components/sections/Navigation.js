import React from 'react';
import { DEFAULT_VIEW_SIZE } from '../../config/constants';

const styleOfList = {
  paddingTop: '10px',
  textAlign: 'center'
}

const Navigation = ({selectViewSize, currentViewSize}) => (
  <nav>
    <ul>
      <li style={styleOfList}>
        <a href="/" className="btn">Albums</a>
      </li>
      <li style={styleOfList}>
        <a href="/about" className="btn">About</a>
      </li>
      <li style={styleOfList}>
        <input type="range"
          min={DEFAULT_VIEW_SIZE - 2}
          max={DEFAULT_VIEW_SIZE + 2}
          value={currentViewSize}
          onChange={event => selectViewSize(parseInt(event.target.value, 0))}
        />
      </li>
    </ul>
  </nav>
);

export default Navigation;

Navigation.propTypes = {
  selectViewSize: React.PropTypes.func.isRequired,
  currentViewSize: React.PropTypes.number
}
