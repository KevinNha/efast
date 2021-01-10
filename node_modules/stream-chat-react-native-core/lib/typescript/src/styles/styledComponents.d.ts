import * as styledComponents from 'styled-components/native';
import type { Consumer, Context } from 'react';
import type { Theme } from './themeConstants';
declare module 'styled-components/native' {
    interface DefaultTheme extends Theme {
    }
}
declare const css: import("styled-components").ThemedCssFunction<Theme>, styled: styledComponents.ReactNativeStyledInterface<Theme>, ThemeProvider: import("styled-components").BaseThemeProviderComponent<Theme, Theme>, useTheme: () => Theme, withTheme: import("styled-components").BaseWithThemeFnInterface<Theme>;
declare const ThemeConsumer: Consumer<Theme>;
declare const ThemeContext: Context<Theme>;
export { css, styled, ThemeConsumer, ThemeContext, ThemeProvider as StyledComponentsThemeProvider, useTheme, withTheme, };
