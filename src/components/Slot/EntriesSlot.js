import React from 'react';
import PropTypes from 'prop-types';
import { slotClasses } from './';
import Talks, { talksClasses } from '../Talks';

const EntriesSlot = ({ collection }) => {
  console.log(collection);
  return (
    <div {...slotClasses('entries')}>
      <span {...slotClasses('time')}>{collection.time}</span>
      <div {...talksClasses()}>
        {collection.entries.map((entry, index) => (
          <Talks
            key={entry.room}
            entry={entry}
            collectionTitle={collection.title}
          />
        ))}
      </div>
    </div>
  );
};

EntriesSlot.propTypes = {
  collection: PropTypes.object,
};

export default EntriesSlot;
