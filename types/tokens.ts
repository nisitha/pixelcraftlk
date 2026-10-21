/**
 * PixelCraft Studios Design Tokens Type Definitions
 * Source of Truth: docs/design-tokens.md
 */

export interface ColorTokens {
  readonly darkColor: string;
  readonly darkField: string;
  readonly surfaceElevated: string;
  readonly borderDark: string;
  readonly borderSubtle: string;
  readonly primaryColor: string;
  readonly blueColor: string;
  readonly warningColor: string;
  readonly white: string;
  readonly darkGray: string;
  readonly lightGray: string;
  readonly lightField: string;
}

export interface TypographyScaleItem {
  readonly fontSizeDesktop: string;
  readonly fontSizeMobile: string;
  readonly lineHeight: string;
  readonly letterSpacingDesktop: string;
  readonly letterSpacingMobile: string;
  readonly fontWeight: number;
}

export interface TypographyTokens {
  readonly h1: TypographyScaleItem;
  readonly h2: TypographyScaleItem;
  readonly h3: TypographyScaleItem;
  readonly h4: TypographyScaleItem;
  readonly h5: TypographyScaleItem;
  readonly h6: TypographyScaleItem;
  readonly paragraphXl: TypographyScaleItem;
  readonly paragraphL: TypographyScaleItem;
  readonly paragraphM: TypographyScaleItem;
  readonly paragraphS: TypographyScaleItem;
}

export interface SpacingTokens {
  readonly none: string;
  readonly xs: string;
  readonly s: string;
  readonly m: string;
  readonly l: string;
  readonly xl: string;
  readonly xxl: string;
  readonly gap6xll: string;
  readonly gap7xll: string;
}

export interface ContainerTokens {
  readonly maxWidthXl: string;
  readonly maxWidthStandard: string;
  readonly paddingDesktop: string;
  readonly paddingTablet: string;
  readonly paddingMobile: string;
}

export interface BorderRadiusTokens {
  readonly s: string;
  readonly m: string;
  readonly l: string;
  readonly xl: string;
  readonly xxl: string;
  readonly pill: string;
}

export interface ShadowTokens {
  readonly card: string;
  readonly elevated: string;
  readonly glowPrimary: string;
}

export interface AnimationTokens {
  readonly durationFast: string;
  readonly durationNormal: string;
  readonly durationSlow: string;
  readonly easeSignature: string;
  readonly easeButton: string;
}

export interface BreakpointTokens {
  readonly mobileSm: string;
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
  readonly desktopLg: string;
}

export interface DesignTokens {
  readonly colors: ColorTokens;
  readonly typography: TypographyTokens;
  readonly spacing: SpacingTokens;
  readonly containers: ContainerTokens;
  readonly borderRadius: BorderRadiusTokens;
  readonly shadows: ShadowTokens;
  readonly animations: AnimationTokens;
  readonly breakpoints: BreakpointTokens;
}
