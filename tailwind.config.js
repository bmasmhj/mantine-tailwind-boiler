/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

module.exports = {
    media: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.45rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        extend: {},
        spacing: {
            none: 0,
            xs: '8px',
            sm: '16px',
            md: '24px',
            lg: '32px',
            xl: '48px',
            xxl: '64px',
        },
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
}
