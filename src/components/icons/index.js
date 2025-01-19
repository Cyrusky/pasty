/* eslint-disable */

import React from 'react';
import IconHome from './IconHome';
export { default as IconHome } from './IconHome';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'home':
      return <IconHome {...rest} />;

  }

  return null;
};

export default IconFont;
