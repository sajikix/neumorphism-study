import React from 'react';
import { render } from 'react-dom';
import { Profile, Atoms } from './pages';

const Root = () => {
  return <Atoms />;
};

render(<Root />, document.getElementById('root'));
