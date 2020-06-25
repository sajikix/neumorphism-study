import React from 'react';
import { render } from 'react-dom';
import { Profile } from './pages';

const Root = () => {
  return <Profile />;
};

render(<Root />, document.getElementById('root'));
