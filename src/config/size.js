const size = {
  desktop: 1440,
  laptop: 1024,
  tablet: 800,
  mobile: 576,
};

export const deviceMaxWidth = {
  desktop: `(max-width: ${size.desktop}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  mobile: `(max-width: ${size.mobile}px)`,
};

export const deviceMinWidth = {
  desktop: `(min-width: ${size.desktop + 1}px)`,
  laptop: `(min-width: ${size.laptop + 1}px)`,
  tablet: `(min-width: ${size.tablet + 1}px)`,
  mobile: `(min-width: ${size.mobile + 1}px)`,
};

export default size;
