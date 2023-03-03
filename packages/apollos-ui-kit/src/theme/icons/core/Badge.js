import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import makeIcon from '../../../Icon/makeIcon';

const Icon = makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
    <Path
      d="M4.64329253,22.470655 C5.40870074,19.549624 8.22705562,17.4096358 11.573363,17.2410177 C9.24516524,17.0469717 7.41666667,15.2807046 7.41666667,13.1234867 C7.41666667,10.8360961 9.47249694,8.98826199 12,8.98826199 C14.5275031,8.98826199 16.5833333,10.8360961 16.5833333,13.1234867 C16.5833333,15.2807046 14.7548348,17.0469717 12.426637,17.2410177 C15.7729444,17.4096358 18.5912993,19.549624 19.3567075,22.470655 L19.5,22.470655 C19.9640393,22.470655 20.3333333,22.1387239 20.3333333,21.7372378 L20.3333333,5.25875745 C20.3333333,4.85727136 19.9640393,4.52534024 19.5,4.52534024 L15.3333333,4.52534024 L15.3333333,6.00777928 C15.3333333,6.84731319 14.5833392,7.52142757 13.6666667,7.52142757 L10.3333333,7.52142757 C9.4166608,7.52142757 8.66666667,6.84731319 8.66666667,6.00777928 L8.66666667,4.52534024 L4.5,4.52534024 C4.03596066,4.52534024 3.66666667,4.85727136 3.66666667,5.25875745 L3.66666667,21.7372378 C3.66666667,22.1387239 4.03596066,22.470655 4.5,22.470655 L4.64329253,22.470655 Z M6.37261175,22.470655 L17.6273882,22.470655 C16.8743074,20.2982572 14.618172,18.7595451 12,18.7595451 C9.381828,18.7595451 7.12569263,20.2982572 6.37261175,22.470655 Z M18.6785537,23.9999079 C18.6699091,24.000031 18.6612867,24.0000304 18.6526887,23.9999079 L5.347314,23.9999079 C5.33871329,24.0000304 5.33009085,24.000031 5.32144629,23.9999079 L4.5,23.9999079 C3.12309017,23.9999079 2,22.990445 2,21.7372378 L2,5.25875745 C2,4.0055502 3.12309017,2.99608733 4.5,2.99608733 L8.66671039,2.99608733 C8.67601342,1.33642636 10.1685892,-1.24344979e-14 12,-1.24344979e-14 C13.8314108,-1.24344979e-14 15.3239866,1.33642636 15.3332896,2.99608733 L19.5,2.99608733 C20.8769098,2.99608733 22,4.0055502 22,5.25875745 L22,21.7372378 C22,22.990445 20.8769098,23.9999079 19.5,23.9999079 L18.6785537,23.9999079 Z M10.3333333,5.99217466 L13.6666667,5.99217466 L13.6666667,3.01169195 C13.6666667,2.19653252 12.9242766,1.52925291 12,1.52925291 C11.0757234,1.52925291 10.3333333,2.19653252 10.3333333,3.01169195 L10.3333333,5.99217466 Z M12,15.7294585 C13.6146326,15.7294585 14.9166667,14.5591561 14.9166667,13.1234867 C14.9166667,11.6878173 13.6146326,10.5175149 12,10.5175149 C10.3853674,10.5175149 9.08333333,11.6878173 9.08333333,13.1234867 C9.08333333,14.5591561 10.3853674,15.7294585 12,15.7294585 Z"
      fill={fill}
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
