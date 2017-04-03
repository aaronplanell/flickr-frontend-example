import React from 'react';
import Photo from './Photo';
import BigPhoto from './BigPhoto';

const commonStyle = {
  background: 'white',
  borderColor: 'grey',
  borderStyle: 'dashed',
  borderRadius: '0pt',
  paddingLeft: '20px'
};

const renderAlert = (alert) => {
  return (
    <article style={{...commonStyle, paddingTop: '15px', color: 'brown', fontFamily: 'courier'}}>
      {alert}
    </article>
  );
}

const renderListOfPhotos = (selectedPhotos, selectPhoto) => {
  return (
    <article style={{...commonStyle}}>
      { selectedPhotos.map( photo => <Photo photo={photo} key={photo.id} selectPhoto={selectPhoto}/> ) }
    </article>
  );
}

const renderBigPhoto = (selectedPhoto, selectPhoto) => {
  return (
    <BigPhoto photo={selectedPhoto} selectPhoto={selectPhoto}/>
  );
}

const Article = ({alert, selectedPhotos, currentViewSize, selectPhoto, selectedPhoto}) => {
  if (alert && alert !== '') {
    return renderAlert(alert);
  } else {
    if (selectedPhoto && selectedPhoto.hasOwnProperty('id')) {
      return renderBigPhoto(selectedPhoto, selectPhoto);
    } else {
      return renderListOfPhotos(selectedPhotos, selectPhoto);
    }
  }
}

Article.propTypes = {
  alert: React.PropTypes.string.isRequired,
  selectedPhotos: React.PropTypes.array.isRequired,
  currentViewSize: React.PropTypes.number.isRequired,
  selectPhoto: React.PropTypes.func.isRequired,
  selectedPhoto: React.PropTypes.object.isRequired
}

export default Article;
