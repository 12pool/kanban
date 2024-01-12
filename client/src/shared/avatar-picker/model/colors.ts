type Colors = 'violet' | 'green' | 'blue' | 'creamy';

export const colors: Record<Colors, string> = {
    'violet': 'rgb(128, 119, 241)',
    'green': 'rgb(63, 177, 178)',
    'blue': 'rgb(64, 166, 229)',
    'creamy': 'rgb(187, 163, 153)'
};

export const colorsList = Object.keys(colors) as Colors[];