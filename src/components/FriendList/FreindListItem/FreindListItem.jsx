import React from 'react';
import PropTypes from 'prop-types';
import Span from './Span';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.listItem}>
      <Span isOnline={friend.isOnline} />
      <img className={styles.avatar} src={friend.avatar} alt={friend.alt} />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

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

export default FriendListItem;
