import React from 'react';

const commonStyle = {
  background: 'white',
  borderColor: 'grey',
  borderStyle: 'dashed',
  borderRadius: '0pt',
  paddingLeft: '20px'
};

const Article = ({alert}) => {
  if (alert || alert === '') {
    return (
      <article style={{...commonStyle, paddingTop: '15px', color: 'brown', fontFamily: 'courier'}}>
        {alert}
      </article>
    );
  } else {
    return (
      <article style={{...commonStyle}}>
      </article>
    );
  }
}

Article.propTypes = {
  alert: React.PropTypes.string.isRequired
}

export default Article;
