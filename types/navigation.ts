export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly badge?: string;
  readonly description?: string;
}

export interface MegaDropdownColumn {
  readonly title: string;
  readonly items: readonly NavItem[];
}

export interface NavigationConfig {
  readonly primaryLinks: readonly NavItem[];
  readonly megaMenuColumns: readonly MegaDropdownColumn[];
  readonly footerColumns: readonly MegaDropdownColumn[];
  readonly legalLinks: readonly NavItem[];
  readonly socialLinks: readonly {
    readonly platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'dribbble';
    readonly href: string;
    readonly label: string;
  }[];
}
