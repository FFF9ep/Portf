/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FAFAFA',
                    foreground: '#0A0A0A',
                },
                secondary: {
                    DEFAULT: '#27272a',
                    foreground: '#FAFAFA',
                },
                muted: {
                    DEFAULT: '#27272a',
                    foreground: '#A1A1AA',
                },
                accent: {
                    DEFAULT: '#27272a',
                    foreground: '#FAFAFA',
                },
                background: '#0A0A0A',
                surface: '#18181B', // Zinc 900
                border: '#27272a', // Zinc 800
                
                // Keep legacy dark object for backward compat if needed, but point to new values
                dark: {
                    bg: '#0A0A0A', 
                    surface: '#18181B',
                    border: '#27272a',
                }
            },
            fontFamily: {
                sans: ['Manrope', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
