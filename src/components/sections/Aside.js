import React from 'react';

const getListOfCollections = (collections) => {
  if (!collections.hasOwnProperty('collection')) {
    return '';
  } else {
    return collections.collection.map( (collection) => {
      const { title, iconlarge } = collection;
      return (
        <li style={{paddingTop: '10px'}}>
          {title}
          <img alt={title} src={iconlarge} />
        </li>
      );
    })
  }
}

const Aside = ({collections}) => {
  return (
    <aside>
      <strong>List of collections</strong>
      <ul>
        {getListOfCollections(collections)}
      </ul>
    </aside>
  );
}

Aside.propTypes = {
  collections: React.PropTypes.object.isRequired
}

export default Aside;
