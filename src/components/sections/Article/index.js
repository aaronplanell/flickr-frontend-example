import React from 'react';
import Photo from './Photo';

const commonStyle = {
  background: 'white',
  borderColor: 'grey',
  borderStyle: 'dashed',
  borderRadius: '0pt',
  paddingLeft: '20px'
};

const Article = ({alert, selectedPhotos, currentViewSize, selectPhoto}) => {
  if (alert && alert !== '') {
    return (
      <article style={{...commonStyle, paddingTop: '15px', color: 'brown', fontFamily: 'courier'}}>
        {alert}
      </article>
    );
  } else {
    return (
      <article style={{...commonStyle}}>
        { selectedPhotos.map( photo => <Photo photo={photo} key={photo.id} selectPhoto={selectPhoto}/> ) }
      </article>
    );
  }
}

Article.propTypes = {
  alert: React.PropTypes.string.isRequired,
  selectedPhotos: React.PropTypes.array.isRequired,
  currentViewSize: React.PropTypes.number.isRequired,
  selectPhoto: React.PropTypes.func.isRequired
}

export default Article;
