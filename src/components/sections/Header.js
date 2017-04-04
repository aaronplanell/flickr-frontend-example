import React from 'react';

const getCurrentPhotoset = (photosets, idPhotoset) => {
  if (photosets && photosets.hasOwnProperty('photoset')) {
    const listOfPhotosets = photosets.photoset.filter( (item) => {
      return item.id === idPhotoset;
    });

    if (listOfPhotosets.length === 1) {
      return listOfPhotosets[0];
    }
  }

  return null;
}

const getMessage = (photosets, idPhotoset, selectedPhoto) => {
  const currentPhotoset = getCurrentPhotoset(photosets, idPhotoset);

  // Photo selected
  if (selectedPhoto && selectedPhoto.hasOwnProperty('id'))
    return 'Click the Pockémon again to close it.';

  // Photoset selected but not photo
  if (currentPhotoset && currentPhotoset.hasOwnProperty('id'))
    return 'Click the Pockémon to see it in its original size.';

  // Neither Photo nor Photoset selected
  return 'Select a type of Pockémon: water, fire, energy,... whatever!';
}

const Header = ({photosets, idPhotoset, selectedPhoto}) => (
    <header>
      <strong>{getMessage(photosets, idPhotoset, selectedPhoto)}</strong>
    </header>
);

Header.propTypes = {
  photosets: React.PropTypes.object,
  idPhotoset: React.PropTypes.string,
  selectedPhoto: React.PropTypes.object
}

export default Header;
