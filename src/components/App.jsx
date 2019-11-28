import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../info/user.json';
import stats from '../info/stats.json';
import friends from '../info/friends.json';
import transactions from '../info/transactions.json';

const App = () => (
  <div>
    <Profile {...user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />,
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
