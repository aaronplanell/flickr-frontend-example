import React from 'react';

const getListOfPhotosets = (photosets, selectPhotoset, fetchPhotosByPhotoset) => {
  if (!photosets.hasOwnProperty('photoset')) {
    return '';
  } else {
    return photosets.photoset.map( (photoset) => {
      const { id, title } = photoset;
      return (
        <li key={id} style={{paddingTop: '10px', textAlign: 'center'}}>
          <a href="#" className="btn"
            onClick={() => {
            selectPhotoset(id);
            fetchPhotosByPhotoset(id);
            }}>
            {title._content}
          </a>
        </li>
      );
    })
  }
}

const Aside = ({photosets, selectPhotoset, fetchPhotosByPhotoset}) => {
  return (
    <aside>
      <ul >
        {getListOfPhotosets(photosets, selectPhotoset, fetchPhotosByPhotoset)}
      </ul>
    </aside>
  );
}

Aside.propTypes = {
  photosets: React.PropTypes.object.isRequired,
  selectPhotoset: React.PropTypes.func.isRequired,
  fetchPhotosByPhotoset: React.PropTypes.func.isRequired
}

export default Aside;
