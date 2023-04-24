import { DefaultTheme } from "styled-components";
import lightBg from '../../assets/background.png'
import darkBg from '../../assets/backgroundDark.png'

export const baseTheme = {
    colors: {
        'gray-50': '#F8FAFC',
        'gray-100': '#F1F5F9',
        'gray-200': '#E2E8F0',
        'gray-300': '#CBD5E1',
        'gray-400': '#94A3B8',
        'gray-500': '#64748B',
        'gray-600': '#475569',
        'gray-700': '#334155',
        'gray-800': '#1E293B',
        'gray-900': '#0F172A',
        'blue-800': '#1E293B',
        'purple': '#7C3AED',
        'lightPurple': '#996DFF',

        white: '#FFF',
        lightBackground: '',
        darkBackground: '',
        text: '',
        lightH1: '',
        darkH1: '',
        iconHeader: '',
        logoHeader: '',

        darkImgBg: darkBg,
        lightImgBg: lightBg,

        bgImageKey: ''
    },
};

export const lightTheme = {
    colors: {
        ...baseTheme.colors,
        lightBackground: baseTheme.colors["gray-50"],

        iconHeader: baseTheme.colors["gray-100"],

        logoHeader: baseTheme.colors["gray-100"],

        lightH1: baseTheme.colors["blue-800"],

        text: baseTheme.colors["gray-600"],

        bgImageKey: lightBg,
    }
};

export const darkTheme = {
    colors: {
        ...baseTheme.colors,
        darkBackground: baseTheme.colors["blue-800"],

        iconHeader: baseTheme.colors["gray-800"],

        logoHeader: baseTheme.colors["gray-900"],

        darkH1: baseTheme.colors["gray-100"],

        text: baseTheme.colors["gray-50"],

        bgImageKey: darkBg,
    }
};