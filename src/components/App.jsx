import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../path/to/user.json';
import stats from '../path/to/stats.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />,
    <TransactionHistory items={transactions} />
  </>
);

export default App;
