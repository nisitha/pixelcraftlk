import { DesignTokens } from '@/types/tokens';

/**
 * PixelCraft Studios Centralized Design Tokens
 * Source of Truth: docs/design-tokens.md
 */
export const tokens: DesignTokens = {
  colors: {
    // Base surfaces
    darkColor: '#080d0d', // Base canvas background
    darkField: '#111616', // Level 1 surface, form inputs, card backgrounds
    surfaceElevated: '#151a1a', // Level 2 surface, modals, elevated cards
    borderDark: 'rgba(255, 255, 255, 0.08)', // Level 1 border rule (#222a2a)
    borderSubtle: '#dedede', // Light border variant

    // Accents & status
    primaryColor: '#bcea3e', // Electric Lime accent
    blueColor: '#7970ff', // Vibrant Indigo/Purple accent
    warningColor: '#ff5d2b', // Urgent/Warning orange

    // Neutrals & typography
    white: '#ffffff', // Primary headings & high-contrast elements
    darkGray: '#6f7781', // Secondary headings, icons
    lightGray: '#899698', // Body copy, muted captions
    lightField: '#f1f1f1', // Inverted surface accents
  },

  typography: {
    h1: {
      fontSizeDesktop: '100px',
      fontSizeMobile: '36px',
      lineHeight: '1.1',
      letterSpacingDesktop: '-4px',
      letterSpacingMobile: '-1.5px',
      fontWeight: 600,
    },
    h2: {
      fontSizeDesktop: '76px',
      fontSizeMobile: '32px',
      lineHeight: '1.1',
      letterSpacingDesktop: '-3.8px',
      letterSpacingMobile: '-1.0px',
      fontWeight: 600,
    },
    h3: {
      fontSizeDesktop: '40px',
      fontSizeMobile: '30px',
      lineHeight: '1.2',
      letterSpacingDesktop: '-0.8px',
      letterSpacingMobile: '-0.5px',
      fontWeight: 500,
    },
    h4: {
      fontSizeDesktop: '34px',
      fontSizeMobile: '26px',
      lineHeight: '1.3',
      letterSpacingDesktop: '-0.34px',
      letterSpacingMobile: '-0.2px',
      fontWeight: 500,
    },
    h5: {
      fontSizeDesktop: '30px',
      fontSizeMobile: '24px',
      lineHeight: '1.3',
      letterSpacingDesktop: '-0.6px',
      letterSpacingMobile: '-0.3px',
      fontWeight: 500,
    },
    h6: {
      fontSizeDesktop: '24px',
      fontSizeMobile: '20px',
      lineHeight: '1.4',
      letterSpacingDesktop: '0px',
      letterSpacingMobile: '0px',
      fontWeight: 500,
    },
    paragraphXl: {
      fontSizeDesktop: '18px',
      fontSizeMobile: '16px',
      lineHeight: '1.5',
      letterSpacingDesktop: '-0.2px',
      letterSpacingMobile: '0px',
      fontWeight: 400,
    },
    paragraphL: {
      fontSizeDesktop: '18px',
      fontSizeMobile: '16px',
      lineHeight: '1.4',
      letterSpacingDesktop: '0px',
      letterSpacingMobile: '0px',
      fontWeight: 400,
    },
    paragraphM: {
      fontSizeDesktop: '16px',
      fontSizeMobile: '15px',
      lineHeight: '1.4',
      letterSpacingDesktop: '0px',
      letterSpacingMobile: '0px',
      fontWeight: 400,
    },
    paragraphS: {
      fontSizeDesktop: '14px',
      fontSizeMobile: '13px',
      lineHeight: '1.4',
      letterSpacingDesktop: '0px',
      letterSpacingMobile: '0px',
      fontWeight: 400,
    },
  },

  spacing: {
    none: '0px',
    xs: '15px',
    s: '20px',
    m: '24px',
    l: '30px',
    xl: '40px',
    xxl: '50px',
    gap6xll: '60px',
    gap7xll: '120px',
  },

  containers: {
    maxWidthXl: '1280px',
    maxWidthStandard: '1200px',
    paddingDesktop: '40px',
    paddingTablet: '24px',
    paddingMobile: '16px',
  },

  borderRadius: {
    s: '10px',
    m: '12px',
    l: '16px',
    xl: '20px',
    xxl: '24px',
    pill: '999px',
  },

  shadows: {
    card: '0 4px 24px -1px rgba(0, 0, 0, 0.4)',
    elevated: '0 12px 48px -4px rgba(0, 0, 0, 0.6)',
    glowPrimary: '0 0 25px rgba(188, 234, 62, 0.25)',
  },

  animations: {
    durationFast: '200ms',
    durationNormal: '400ms',
    durationSlow: '600ms',
    easeSignature: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeButton: 'cubic-bezier(0.25, 1, 0.5, 1)',
  },

  breakpoints: {
    mobileSm: '375px',
    mobile: '480px',
    tablet: '768px',
    desktop: '992px',
    desktopLg: '1280px',
  },
} as const;
