export declare type ThemeType = {
    [key: string]: string | number | boolean | ThemeType;
};
export declare const replaceCssShorthand: (style: ThemeType | string | number | boolean) => ThemeType | string | number | boolean;
