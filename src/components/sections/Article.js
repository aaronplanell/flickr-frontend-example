import React from 'react';

const commonStyle = {
  background: 'white',
  borderColor: 'grey',
  borderStyle: 'dashed',
  borderRadius: '0pt',
  paddingLeft: '20px'
};

const Article = ({alert, selectedPhotos, currentViewSize}) => {
  if (alert && alert !== '') {
    return (
      <article style={{...commonStyle, paddingTop: '15px', color: 'brown', fontFamily: 'courier'}}>
        {alert}
      </article>
    );
  } else {
    return (
      <article style={{...commonStyle}}>
        {
          selectedPhotos.map( photo => {
            return <img key={photo.id} alt={photo.id} id={photo.id} src={photo.source}/>
          })
        }
      </article>
    );
  }
}

Article.propTypes = {
  alert: React.PropTypes.string.isRequired,
  selectedPhotos: React.PropTypes.array.isRequired,
  currentViewSize: React.PropTypes.string.isRequired
}

export default Article;
