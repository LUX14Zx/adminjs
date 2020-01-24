export const colors = {
  // Blues
  bluePrimary: '#4268F6',
  blueLight: '#718AF4',
  bluePale: '#CBD5FD',
  blueHover: '#535B8E',
  blueSecondary: '#38CAF1',
  blueFilter: '#343F87',

  // Blacks
  black: '#111114',
  darkGrey: '#454655',
  grey: '#707290',
  greyLight: '#A9AABC',
  greyPale: '#F7F7FA',
  white: '#fff',

  // Additional
  red: '#FF4567',
  paleRed: '#FFA5B5',
  treal: '#70C9B0',
  paleTreal: '#DBF0F1',
  love: '#e6282b',
}

export interface SpaceProps extends Array<string> {
  default: string;
  sm: string;
  xs: string;
  lg: string;
  xl: string;
  xxl: string;
}

// Styled system
export const space: SpaceProps = [
  '0', '2px', '4px', '8px', '16px', '24px', '32px', '48px', '64px', '128px',
] as SpaceProps
space.default = '8px'
space.sm = '4px'
space.xs = '2px'
space.lg = '16px'
space.xl = '24px'
space.xxl = '32px'

export const fontSizes = ['10px', '12px', '14px', '16px', '18px', '24px', '28px', '32px', '40px']
export const fontWeights = {
  lighter: 300,
  normal: 400,
  bold: 700,
}
export const lineHeights = ['12px', '16px', '24px', '32px', '40px']
export const font = '\'Roboto\', sans-serif'