module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#343541',
                foreground: '#ffffff',

                // Verde principal
                primary: '#10A37F',

                 // Verdes variantes
                'primary-light': '#12B488',
                'primary-dark': '#0E8C6E',

                // Cores complementares
                accent: '#19C37D', // Botões e elementos interativos
                muted: '#6B7280', // Texto secundário

                // Cinzas para UI
                border: '#D1D5DB',
                'border-dark': '#4B5563',
                'surface': '#F9FAFB',
                'surface-dark': '#202123',
            }
        },
    },
    plugins: [],
};
