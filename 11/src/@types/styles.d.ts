import 'styled-components'
import { baseTheme, DarkTheme, lightTheme } from '../styles/theme/Theme'

type ThemeType = typeof baseTheme
type DarkThemeType = typeof DarkTheme
type LightThemeType = typeof LightTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
    export interface DarkTheme extends DarkThemeType { }
    export interface LightTheme extends LightThemeType { }
}