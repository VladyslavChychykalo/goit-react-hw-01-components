import React from 'react';
import PropTypes from 'prop-types';
import Span from './Span';
import styles from './FriendListItem.module.css';

// const statusStyle = {
//   display: 'block',
//   width: '30px',
//   height: '30px',
//   borderRadius: '50%',
// };

export default function FriendListItem({ friend }) {
  return (
    <li className={styles.listItem}>
      {/* <span
        className="status"
        style={{
          ...statusStyle,
          backgroundColor: friend.isOnline ? 'green' : 'red',
        }}
      /> */}
      <Span isOnline={friend.isOnline} />
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.alt}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  friend: {
    alt: 'profile image',
  },
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    alt: PropTypes.string,
  }),
};
