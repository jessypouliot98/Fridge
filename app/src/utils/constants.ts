// Constants

export const SUPPORTED_LOCALES = ['en'] as const;
export const DEFAULT_LOCALE = SUPPORTED_LOCALES[0];

// Contant types

export type localeType = typeof SUPPORTED_LOCALES[number];
