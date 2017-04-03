import React from 'react';
import { DEFAULT_VIEW_SIZE } from '../../config/constants';

const Navigation = ({selectViewSize, currentViewSize}) => (
  <nav>
        <a href="/" className="btn">Albums</a>
        <a href="/about" className="btn">About</a>
        <input type="range"
          min={DEFAULT_VIEW_SIZE - 2}
          max={DEFAULT_VIEW_SIZE + 2}
          value={currentViewSize}
          onChange={event => selectViewSize(parseInt(event.target.value, 0))}
        />
  </nav>
);

Navigation.propTypes = {
  selectViewSize: React.PropTypes.func.isRequired,
  currentViewSize: React.PropTypes.number
}

export default Navigation;
