/* eslint-disable */

import IconPreview from './IconPreview';
import IconMinimize from './IconMinimize';
import IconHome from './IconHome';
export { default as IconPreview } from './IconPreview';
export { default as IconMinimize } from './IconMinimize';
export { default as IconHome } from './IconHome';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'preview':
      return <IconPreview {...rest} />;
    case 'minimize':
      return <IconMinimize {...rest} />;
    case 'home':
      return <IconHome {...rest} />;

  }

  return null;
};

export default IconFont;
