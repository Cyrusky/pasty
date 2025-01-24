 

import React from 'react';
import IconHome from './IconHome.js';

export { default as IconHome } from "./IconHome.js";

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case "home":
      return <IconHome {...rest} />;
  }

  return null;
};

export default IconFont;
