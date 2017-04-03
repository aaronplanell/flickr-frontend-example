import React from 'react';

const styleOfPhoto = {
  paddingRight: '5px',
  opacity: 0.9
}

const Photo = ({photo, selectPhoto}) => (
  <img
    alt={photo.id}
    id={photo.id}
    src={photo.source}
    style={styleOfPhoto}
    onClick={(event) => selectPhoto(photo)}
    onMouseOver={(event) => event.target.style.opacity = 1.0}
    onMouseLeave={(event) => event.target.style.opacity = 0.9}
  />
);

export default Photo;
