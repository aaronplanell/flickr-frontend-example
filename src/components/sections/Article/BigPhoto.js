import React from 'react';

const BigPhoto = ({photo, selectPhoto}) => (
  <div style={{ position: 'relative', zIndex: 1000,  width: '100%', height: '100%'}}>
    <img
      alt={photo.id}
      id={photo.id}
      src={photo.original}
      onClick={(event) => selectPhoto({})}
      style={{
        marginLeft: 'auto',
      	marginRight: 'auto',
      	display: 'block'
      }}
    />
  </div>
);

BigPhoto.propTypes = {
  photo: React.PropTypes.object.isRequired,
  selectPhoto: React.PropTypes.func
}

export default BigPhoto;
