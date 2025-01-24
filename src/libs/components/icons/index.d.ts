/* eslint-disable */

import { SVGAttributes, FunctionComponent } from 'react';
export { default as IconHome } from './IconHome';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: 'home';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
