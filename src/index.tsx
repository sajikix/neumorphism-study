import React from 'react';
import { render } from 'react-dom';
import { Main } from './pages';

const Root = () => {
  return <Main />;
};

render(<Root />, document.getElementById('root'));
