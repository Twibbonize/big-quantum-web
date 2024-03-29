const presets = [
    {
        name: 'Cannes',
        brightness: 0.15,
        contrast: -0.23,
        highlight: 0.01,
        shadow: 0,
        saturation: 0.34,
        vibrance: 0.12,
        temperature: -0.1,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Macao',
        brightness: 0.1,
        contrast: 0.05,
        highlight: 0.25,
        shadow: -0.3,
        saturation: 0.21,
        vibrance: 0.05,
        temperature: -0.04,
        tint: 0.02,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Calusa',
        brightness: 0.02,
        contrast: 0.06,
        highlight: 0.6,
        shadow: 0.3,
        saturation: -0.09,
        vibrance: 0.5,
        temperature: -0.03,
        tint: 0.04,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Melawai',
        brightness: 0.18,
        contrast: 0.19,
        highlight: -0.35,
        shadow: 0.24,
        saturation: 0.36,
        vibrance: 0.43,
        temperature: -0.05,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Aberdeen',
        brightness: 0.06,
        contrast: 0.12,
        highlight: 0.28,
        shadow: 0.21,
        saturation: -0.03,
        vibrance: 0.21,
        temperature: -0.1,
        tint: 0.02,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Louvre',
        brightness: 0.04,
        contrast: -0.03,
        highlight: 0.32,
        shadow: -0.19,
        saturation: -0.16,
        vibrance: 0.08,
        temperature: 0,
        tint: 0.01,
        vignette: 0,
        blur: 0,
        noise: 8,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Saravejo',
        brightness: 0.05,
        contrast: 0.03,
        highlight: 0.46,
        shadow: -0.21,
        saturation: -0.13,
        vibrance: 0.18,
        temperature: 0.04,
        tint: 0.01,
        vignette: 0.02,
        blur: 0,
        noise: 1,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Geneva',
        brightness: 0.04,
        contrast: 0.11,
        highlight: 0.42,
        shadow: 0.1,
        saturation: 0.16,
        vibrance: 0.34,
        temperature: -0.05,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 3,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Giza',
        brightness: 0.1,
        contrast: 0.12,
        highlight: 0.53,
        shadow: -0.03,
        saturation: 0,
        vibrance: 0,
        temperature: 0,
        tint: 0,
        vignette: 0.2,
        blur: 0,
        noise: 35,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Kemajoran',
        brightness: 0.05,
        contrast: -0.02,
        highlight: 0.24,
        shadow: -0.49,
        saturation: -0.2,
        vibrance: 0.6,
        temperature: 0.03,
        tint: -0.02,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: true,
        highlightColor: '#EBEFA6',
        shadowColor: '#542784'
    },
    {
        name: 'Stockholm',
        brightness: 0.05,
        contrast: 0.02,
        highlight: -0.44,
        shadow: 0.14,
        saturation: 0.4,
        vibrance: 0.2,
        temperature: -0.11,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 50,
        duotone: true,
        highlightColor: '#75C940',
        shadowColor: '#101D5D'
    },
    {
        name: 'Floriano',
        brightness: 0.14,
        contrast: -0.14,
        highlight: 0.5,
        shadow: -0.6,
        saturation: 0.33,
        vibrance: 0,
        temperature: -0.02,
        tint: 0.02,
        vignette: 0,
        blur: 0.02,
        noise: 26,
        duotone: true,
        highlightColor: '#F4D3D2',
        shadowColor: '#7E1DD0'
    },
    {
        name: 'Maribor',
        brightness: 0.11,
        contrast: 0.13,
        highlight: -0.31,
        shadow: 0.28,
        saturation: -0.28,
        vibrance: 0.32,
        temperature: 0.05,
        tint: 0.04,
        vignette: 0.09,
        blur: 0,
        noise: 0,
        duotone: true,
        highlightColor: '#F338BF',
        shadowColor: '#050416'
    },
    {
        name: 'Odessa',
        brightness: 0.04,
        contrast: 0.23,
        highlight: 0.31,
        shadow: 0.18,
        saturation: 0.04,
        vibrance: 0.09,
        temperature: 0.05,
        tint: -0.08,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: true,
        highlightColor: '#3EC3FD',
        shadowColor: '#030507'
    },
    {
        name: 'Milan',
        brightness: 0.1,
        contrast: 0.07,
        highlight: 0.4,
        shadow: -0.1,
        saturation: -0.4,
        vibrance: 0.3,
        temperature: 0.1,
        tint: 0.05,
        vignette: 0.02,
        blur: 0,
        noise: 0,
        duotone: true,
        highlightColor: '#FC2142',
        shadowColor: '#000000'
    },
    {
        name: 'Seoul',
        brightness: 0.06,
        contrast: -0.1,
        highlight: -0.48,
        shadow: 0.57,
        saturation: -0.29,
        vibrance: 0,
        temperature: 0,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Saigon',
        brightness: 0.03,
        contrast: -0.06,
        highlight: 0.15,
        shadow: 0.1,
        saturation: -1,
        vibrance: 0,
        temperature: 0.04,
        tint: 0,
        vignette: 0.03,
        blur: 0,
        noise: 40,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Wolfsberg',
        brightness: 0.12,
        contrast: 0.07,
        highlight: 0.27,
        shadow: -0.42,
        saturation: 0.22,
        vibrance: 0.1,
        temperature: 0.09,
        tint: 0.09,
        vignette: 0.01,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Jaww',
        brightness: -0.07,
        contrast: 0.09,
        highlight: -0.02,
        shadow: 0.14,
        saturation: -0.09,
        vibrance: 0.33,
        temperature: 0,
        tint: 0,
        vignette: 0.12,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Malaga',
        brightness: 0.05,
        contrast: 0.22,
        highlight: 0.09,
        shadow: 0.38,
        saturation: 0.23,
        vibrance: 0.11,
        temperature: 0.12,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Helsinki',
        brightness: -0.05,
        contrast: 0.04,
        highlight: 0.72,
        shadow: 0.23,
        saturation: 0,
        vibrance: 0.19,
        temperature: -0.08,
        tint: -0.08,
        vignette: 0.09,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Rakvere',
        brightness: 0.11,
        contrast: 0.03,
        highlight: 0.46,
        shadow: 0.1,
        saturation: 0.06,
        vibrance: 0.02,
        temperature: -0.12,
        tint: -0.17,
        vignette: 0.09,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Kandy',
        brightness: 0.13,
        contrast: 0.04,
        highlight: 0.59,
        shadow: -0.05,
        saturation: 0.14,
        vibrance: 0.21,
        temperature: 0,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 3,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Boracai',
        brightness: 0.31,
        contrast: 0.01,
        highlight: -0.2,
        shadow: -0.5,
        saturation: 0.34,
        vibrance: 1,
        temperature: 0,
        tint: 0.06,
        vignette: 0.16,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Macau',
        brightness: 0,
        contrast: 0.05,
        highlight: 0.26,
        shadow: 0.11,
        saturation: -0.03,
        vibrance: 0.33,
        temperature: 0.04,
        tint: 0,
        vignette: 0.09,
        blur: 0,
        noise: 8,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Lima',
        brightness: 0.03,
        contrast: 0.11,
        highlight: 0.29,
        shadow: 0.05,
        saturation: 0.21,
        vibrance: 0.32,
        temperature: 0,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Nairobi',
        brightness: 0.06,
        contrast: 0.17,
        highlight: 0.63,
        shadow: 0.05,
        saturation: -1,
        vibrance: -1,
        temperature: 0,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Nazret',
        brightness: -0.12,
        contrast: 0.11,
        highlight: -0.54,
        shadow: 0.12,
        saturation: -1,
        vibrance: -1,
        temperature: 0,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Phoenix',
        brightness: 0.04,
        contrast: -0.05,
        highlight: 0.26,
        shadow: -0.35,
        saturation: -1,
        vibrance: -1,
        temperature: 0,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Lost',
        brightness: 0.01,
        contrast: -0.15,
        highlight: 0.68,
        shadow: -0.52,
        saturation: -1,
        vibrance: -1,
        temperature: 0,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Dakota',
        brightness: 0,
        contrast: -0.15,
        highlight: 0.13,
        shadow: 0.21,
        saturation: -1,
        vibrance: 0,
        temperature: 0,
        tint: -0.02,
        vignette: 0.02,
        blur: 0,
        noise: 32,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Suryakencana',
        brightness: 0.02,
        contrast: 0.11,
        highlight: -0.18,
        shadow: -0.02,
        saturation: -0.38,
        vibrance: 0.82,
        temperature: 0.03,
        tint: 0.01,
        vignette: 0,
        blur: 0.01,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Mogadishu',
        brightness: 0.11,
        contrast: 0.02,
        highlight: -0.01,
        shadow: 0.01,
        saturation: -1,
        vibrance: -1,
        temperature: 0.05,
        tint: 0.05,
        vignette: 0.05,
        blur: 0.01,
        noise: 3,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Kant',
        brightness: 0,
        contrast: 0.02,
        highlight: 0.44,
        shadow: -0.06,
        saturation: -0.59,
        vibrance: 0.35,
        temperature: 0.13,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 62,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Agra',
        brightness: 0.11,
        contrast: 0.02,
        highlight: -0.01,
        shadow: 0.01,
        saturation: 1,
        vibrance: -1,
        temperature: 0.05,
        tint: 0.05,
        vignette: 0,
        blur: 0.01,
        noise: 3,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Quebec',
        brightness: 0.02,
        contrast: -0.01,
        highlight: 0.32,
        shadow: 0.41,
        saturation: 0.19,
        vibrance: 0.52,
        temperature: -0.15,
        tint: -0.01,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Kythrea',
        brightness: 0.05,
        contrast: -0.08,
        highlight: 0.22,
        shadow: 0.26,
        saturation: -0.3,
        vibrance: 0.34,
        temperature: -0.19,
        tint: 0.03,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Luxor',
        brightness: 0.04,
        contrast: -0.02,
        highlight: 0.05,
        shadow: 0.47,
        saturation: 0.33,
        vibrance: -0.16,
        temperature: 0.11,
        tint: -0.16,
        vignette: 0,
        blur: 0,
        noise: 0,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Marrakech',
        brightness: 0.03,
        contrast: 0.09,
        highlight: 0.33,
        shadow: -0.17,
        saturation: 0.22,
        vibrance: 0.1,
        temperature: 0.21,
        tint: 0,
        vignette: 0,
        blur: 0,
        noise: 22,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Manchester',
        brightness: -0.11,
        contrast: 0.19,
        highlight: 0.33,
        shadow: -0.22,
        saturation: -0.74,
        vibrance: 0.46,
        temperature: -0.08,
        tint: -0.04,
        vignette: 0.15,
        blur: 0,
        noise: 30,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Manila',
        brightness: 0.04,
        contrast: -0.17,
        highlight: -0.14,
        shadow: -0.37,
        saturation: 1,
        vibrance: -0.76,
        temperature: 0.01,
        tint: -0.05,
        vignette: 0.11,
        blur: 0,
        noise: 23,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    },
    {
        name: 'Fortaleza',
        brightness: 0.09,
        contrast: -0.18,
        highlight: -0.6,
        shadow: -0.21,
        saturation: 1,
        vibrance: 0.33,
        temperature: 0.01,
        tint: 0,
        vignette: 0.02,
        blur: 0.01,
        noise: 6,
        duotone: false,
        highlightColor: '',
        shadowColor: ''
    }
];

export default presets;
