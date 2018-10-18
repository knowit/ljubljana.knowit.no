import React from 'react';
import PropTypes from 'prop-types';
import { talksClasses } from './';
import Talk from './Talk';

const Talks = ({ collectionTitle, entry, columnSize }) => {
  return (
    <div {...talksClasses('container', entry.columnSize === 2 ? 'double' : '')}>
      <span {...talksClasses('type')}>{collectionTitle}</span>
      <span {...talksClasses('room')}>{entry.room}</span>
      {entry.slots.map((talkId, index) => (
        <Talk key={`${talkId}_${index}`} talkId={talkId} />
      ))}
    </div>
  );
};

Talks.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  entry: PropTypes.object,
};

export default Talks;
