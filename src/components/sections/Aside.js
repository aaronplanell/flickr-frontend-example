import React from 'react';

const getListOfCollections = (collections, selectCollection) => {
  if (!collections.hasOwnProperty('collection')) {
    return '';
  } else {
    return collections.collection.map( (collection) => {
      const { id, title, iconlarge } = collection;
      return (
        <li key={id} style={{paddingTop: '10px'}}  >
          {title}
          <img alt={title} src={iconlarge} onClick={() => selectCollection(id)} />
        </li>
      );
    })
  }
}

const Aside = ({collections, selectCollection}) => {
  return (
    <aside>
      <strong>List of collections</strong>
      <ul>
        {getListOfCollections(collections, selectCollection)}
      </ul>
    </aside>
  );
}

Aside.propTypes = {
  collections: React.PropTypes.object.isRequired,
  selectCollection: React.PropTypes.func.isRequired
}

export default Aside;
