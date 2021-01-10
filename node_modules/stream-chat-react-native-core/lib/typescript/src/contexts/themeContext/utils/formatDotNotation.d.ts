import type { ThemeType } from './replaceCssShorthand';
import type { Theme } from '../../../styles/themeConstants';
export declare type FormatDotNotationParams = {
    formattedStyle: string | number | boolean | ThemeType;
    modifiedTheme: Theme;
};
export declare const formatDotNotation: ({ formattedStyle, modifiedTheme, }: FormatDotNotationParams) => {};
