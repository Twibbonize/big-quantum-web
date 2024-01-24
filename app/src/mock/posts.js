const publicPosts = [
    {
        image: '/assets/img/sample/sample-post-1.jpg',
        campaign: {
            name: 'Hanoi Art Book Fair 2025',
            url: 'hanoi-art-book-fair-2025'
        },
        caption:
            'Immersed in the vibrant tapestry of Hanoi Art Fair 2025 – a captivating journey through the heart of creativity! The fusion of traditional and contemporary art forms has left me absolutely exhilarated. 🎨✨ #HanoiArtFair #ArtisticAdventure',
        createdAt: '2024-01-07T10:30:45',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        uri: '677a623',
        comments: [
            {
                creator: {
                    name: 'Martin Emmerich',
                    username: 'martinem129',
                    avatar: '/assets/img/sample/sample-avatar-3.jpg'
                },
                createdAt: 1705403365744,
                comment:
                    "The fair in Hanoi seems like an incredible event, a true celebration of the city's artistic spirit. I can only imagine the richness of the traditional and contemporary art forms on display.",
                likes: 0,
                replies: [
                    {
                        creator: {
                            name: 'Alice Smith',
                            username: 'alicesmith',
                            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/414.jpg'
                        },
                        comment:
                            "The fair in Hanoi seems like an incredible event, a true celebration of the city's artistic spirit. I can only imagine the richness of the traditional and contemporary art forms on display.",
                        createdAt: 1705403361044
                    },

                    {
                        creator: {
                            name: 'Bob Johnson',
                            username: 'bobjohson',
                            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/554.jpg'
                        },
                        comment:
                            'Absolutely! The Hanoi fair is a magical experience, blending the old and the new in a vibrant showcase of art. Have you had the chance to attend it yourself?',
                        createdAt: 1705403361044
                    },

                    {
                        creator: {
                            name: 'Charlie Brown',
                            username: 'charliebrown',
                            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/314.jpg'
                        },
                        comment:
                            "I couldn't agree more! The fusion of traditional and contemporary art at the Hanoi fair is simply mesmerizing. It's a testament to the city's rich cultural tapestry.",
                        createdAt: 1705403361044
                    },

                    {
                        creator: {
                            name: 'Diana Miller',
                            username: 'dianamiller',
                            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/112.jpg'
                        },
                        comment:
                            'The Hanoi fair is indeed a celebration of art and culture. The diverse range of artistic expressions creates an immersive experience. Which particular art forms are you most interested in?',
                        createdAt: 1705403361044
                    },

                    {
                        creator: {
                            name: 'Ethan Davis',
                            username: 'ethandavis',
                            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/859.jpg'
                        },
                        comment:
                            "I feel the same way! Hanoi's fair is like a canvas that paints the city's artistic soul. If you haven't been yet, it's definitely worth experiencing firsthand.",
                        createdAt: 1705403361044
                    },

                    {
                        creator: {
                            name: 'Fiona Wilson',
                            username: 'fionawilson',
                            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/397.jpg'
                        },
                        comment:
                            "It truly is a spectacle! The Hanoi fair manages to capture the essence of the city's artistic evolution. Any specific art installations or performances that caught your attention?",
                        createdAt: 1705403361044
                    }
                ]
            },
            {
                creator: {
                    name: 'Rhonda Pouros',
                    username: 'rhonda99',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                createdAt: 1705403365744,
                comment:
                    'This event in Hanoi looks like a dream for art enthusiasts! The blend of traditional and contemporary art forms creates a unique and immersive atmosphere. Truly a feast for the senses.',
                likes: 0,
                replies: []
            }
        ]
    },
    {
        image: '/assets/img/sample/sample-post-3.jpg',
        campaign: {
            name: 'Hanoi Art Book Fair 2025',
            url: 'hanoi-art-book-fair-2025'
        },
        caption:
            'Thrilled to embark on the coding odyssey at Universe Tech Future Developers Bootcamp! 🌐💻 Ready to shape the future of tech and unleash the developer within. Let the learning adventure begin! 🚀 #UniverseTechBootcamp #FutureDevelopers',
        createdAt: '2023-10-12T10:30:45',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        uri: 'f3f3fab'
    },
    {
        image: '/assets/img/sample/sample-post-4.jpg',
        campaign: {
            name: 'Hanoi Art Book Fair 2025',
            url: 'hanoi-art-book-fair-2025'
        },
        caption:
            'Thrilled to embark on the coding odyssey at Universe Tech Future Developers Bootcamp! 🌐💻 Ready to shape the future of tech and unleash the developer within. Let the learning adventure begin! 🚀 #UniverseTechBootcamp #FutureDevelopers',
        createdAt: '2023-10-12T10:30:45',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        uri: 'aniod1'
    },
    {
        image: '/assets/img/sample/sample-post-5.jpg',
        campaign: {
            name: 'Hanoi Art Book Fair 2025',
            url: 'hanoi-art-book-fair-2025'
        },
        caption:
            'Thrilled to embark on the coding odyssey at Universe Tech Future Developers Bootcamp! 🌐💻 Ready to shape the future of tech and unleash the developer within. Let the learning adventure begin! 🚀 #UniverseTechBootcamp #FutureDevelopers',
        createdAt: '2023-10-12T10:30:45',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        uri: '0bf13r'
    },
    {
        image: '/assets/img/sample/sample-post-6.jpg',
        campaign: {
            name: 'Hanoi Art Book Fair 2025',
            url: 'hanoi-art-book-fair-2025'
        },
        caption:
            'Thrilled to embark on the coding odyssey at Universe Tech Future Developers Bootcamp! 🌐💻 Ready to shape the future of tech and unleash the developer within. Let the learning adventure begin! 🚀 #UniverseTechBootcamp #FutureDevelopers',
        createdAt: '2023-10-12T10:30:45',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        uri: 'c1n0i'
    },
    {
        image: '/assets/img/sample/sample-post-7.jpg',
        campaign: {
            name: 'Hanoi Art Book Fair 2025',
            url: 'hanoi-art-book-fair-2025'
        },
        caption:
            'Thrilled to embark on the coding odyssey at Universe Tech Future Developers Bootcamp! 🌐💻 Ready to shape the future of tech and unleash the developer within. Let the learning adventure begin! 🚀 #UniverseTechBootcamp #FutureDevelopers',
        createdAt: '2023-10-12T10:30:45',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        uri: 'c0hsc'
    },
    {
        image: '/assets/img/sample/sample-post-8.jpg',
        campaign: {
            name: 'Hanoi Art Book Fair 2025',
            url: 'hanoi-art-book-fair-2025'
        },
        caption:
            'Thrilled to embark on the coding odyssey at Universe Tech Future Developers Bootcamp! 🌐💻 Ready to shape the future of tech and unleash the developer within. Let the learning adventure begin! 🚀 #UniverseTechBootcamp #FutureDevelopers',
        createdAt: '2023-10-12T10:30:45',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        uri: 'dinq1'
    }
];

export { publicPosts };
