import colors from './colors';
import device, { breakpoints } from './devices';

export default () => {
  return {
    colors: colors(),
    device: device,
    breakpoints: breakpoints,
  };
};
