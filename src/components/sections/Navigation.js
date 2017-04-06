import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_VIEW_SIZE } from '../../config/constants';

const Navigation = ({selectViewSize, currentViewSize}) => (
  <nav>
    <Link className='btn' to={`/`} >
      Albums
    </Link>
    <Link className='btn' to={`/about`}>
      About
    </Link>
    <input type="range"
      min={DEFAULT_VIEW_SIZE - 2}
      max={DEFAULT_VIEW_SIZE + 2}
      value={currentViewSize}
      onChange={event => selectViewSize(parseInt(event.target.value, 0))}
      style={{display: currentViewSize ? 'auto' : 'none'}}
    />
  </nav>
);

Navigation.propTypes = {
  selectViewSize: React.PropTypes.func,
  currentViewSize: React.PropTypes.number
}

export default Navigation;
