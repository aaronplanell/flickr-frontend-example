import React from 'react';

const getListOfCollections = (collections, selectCollection, fetchPhotosByCollection) => {
  if (!collections.hasOwnProperty('collection')) {
    return '';
  } else {
    return collections.collection.map( (collection) => {
      const { id, title, iconlarge } = collection;
      return (
        <li key={id} style={{paddingTop: '10px'}}  >
          {title}
          <img alt={title} src={iconlarge}
            onClick={() => {
              selectCollection(id);
              fetchPhotosByCollection(id);
            }}
          />
        </li>
      );
    })
  }
}

const Aside = ({collections, selectCollection, fetchPhotosByCollection}) => {
  return (
    <aside>
      <strong>List of collections</strong>
      <ul>
        {getListOfCollections(collections, selectCollection, fetchPhotosByCollection)}
      </ul>
    </aside>
  );
}

Aside.propTypes = {
  collections: React.PropTypes.object.isRequired,
  selectCollection: React.PropTypes.func.isRequired,
  fetchPhotosByCollection: React.PropTypes.func.isRequired
}

export default Aside;
