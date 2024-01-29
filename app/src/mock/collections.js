import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ownCollections = [
    {
        name: '🥳 Happy Birthday!',
        campaigns: [
            {
                name: 'Purple and White Modern Happy Birthday',
                creator: {
                    name: 'Universe Tech',
                    avatar: '/assets/img/sample/sample-avatar-1.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-1.jpg'
            },
            {
                name: 'Blue White Happy Birthday',
                creator: {
                    name: 'Eleanor Pena',
                    avatar: '/assets/img/sample/sample-avatar-7.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-2.jpg'
            },
            {
                name: 'Pink Colourful Happy Birthday',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-3.jpg'
            },
            {
                name: 'Water Colour Outer Space Happy Birthday',
                creator: {
                    name: 'Universe Tech',
                    avatar: '/assets/img/sample/sample-avatar-1.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-4.webp'
            }
        ],
        uri: 'happy-birthday',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    },
    {
        name: '👶 New Baby',
        campaigns: [
            {
                name: 'Neutral New Baby Born',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-1.jpg',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            },
            {
                name: 'Beige White New Baby Born',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-2.jpg',
                creator: {
                    name: 'Darin Rempel',
                    avatar: '/assets/img/sample/sample-person-11.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Pink White Baby Birth',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-3.jpg',
                creator: {
                    name: 'Eleanor Pena',
                    avatar: '/assets/img/sample/sample-avatar-7.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Pink and Orange Playful Little Family Twibbon',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-4.webp',
                creator: {
                    name: 'Kristy Amore',
                    avatar: '/assets/img/sample/sample-person-12.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            }
        ],
        uri: 'new-baby',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    },
    {
        name: '🎓 Graduation',
        campaigns: [
            {
                name: 'Brown and Cream Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-1.jpg',
                creator: {
                    name: 'Kristy Amore',
                    avatar: '/assets/img/sample/sample-person-12.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            },
            {
                name: 'Pink Cute Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-2.jpg',
                creator: {
                    name: 'Eleanor Pena',
                    avatar: '/assets/img/sample/sample-avatar-7.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Yellow and Green Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-3.jpg',
                creator: {
                    name: 'Darin Rempel',
                    avatar: '/assets/img/sample/sample-person-11.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Blue and Yellow Modern Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-4.webp',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            }
        ],
        uri: 'graduation',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    },
    {
        name: '💍 Wedding Celebration',
        campaigns: [
            {
                name: 'Brown and Cream Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-wedding-celebration-1.jpg',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            }
        ],
        uri: 'graduation',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        }
    }
];

const publicCollections = [
    {
        name: 'Christmas Celebration',
        campaigns: [
            {
                name: 'Red and Gold Merry Xmas 2024',
                thumbnail: '/assets/img/sample/sample-campaign-christmas-1.webp',
                creator: {
                    name: 'Juana Stamm',
                    avatar: '/assets/img/sample/sample-person-1.jpg'
                },
                hit: 2102,
                createdAt: dayjs().subtract(1, 'month').fromNow()
            },
            {
                name: 'Colorful Simple Merry Christmas Twibbon',
                thumbnail: '/assets/img/sample/sample-campaign-christmas-2.jpeg',
                creator: {
                    name: 'Jacqueline Bahringer',
                    avatar: '/assets/img/sample/sample-person-2.jpg'
                },
                hit: 9132,
                createdAt: dayjs().subtract(15, 'days').fromNow()
            },
            {
                name: 'Navy and Red Creative Christmas Twibbon',
                thumbnail: '/assets/img/sample/sample-campaign-christmas-3.webp',
                creator: {
                    name: 'Alexander Dietrich',
                    avatar: '/assets/img/sample/sample-person-4.jpg'
                },
                hit: 3128,
                createdAt: dayjs().subtract(7, 'days').fromNow()
            },
            {
                name: 'Green and White Simple Christmas Twibbon',
                thumbnail: '/assets/img/sample/sample-campaign-christmas-4.webp',
                creator: {
                    name: 'Dolores Cruickshank',
                    avatar: '/assets/img/sample/sample-person-5.jpg'
                },
                hit: 3128,
                createdAt: dayjs().subtract(3, 'days').fromNow()
            }
        ],
        uri: 'xmas',
        creator: {
            name: 'Jeanette Kirlin',
            avatar: '/assets/img/sample/sample-person-13.jpg',
            username: 'jeanette128'
        },
        keywords:
            'christmas celebration red gold merry xmas 2024 colorful simple twibbon navy green white jeanette kirlin juana stamm jacqueline bahringer alexander dietrich dolores cruickshank'
    },
    {
        name: '🎓 Graduation',
        campaigns: [
            {
                name: 'Brown and Cream Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-1.jpg',
                creator: {
                    name: 'Kristy Amore',
                    avatar: '/assets/img/sample/sample-person-12.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            },
            {
                name: 'Pink Cute Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-2.jpg',
                creator: {
                    name: 'Eleanor Pena',
                    avatar: '/assets/img/sample/sample-avatar-7.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Yellow and Green Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-3.jpg',
                creator: {
                    name: 'Darin Rempel',
                    avatar: '/assets/img/sample/sample-person-11.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Blue and Yellow Modern Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-graduation-4.webp',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            }
        ],
        uri: 'graduation',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        },
        keywords:
            'graduation brown cream happy pink cute yellow green blue modern albert forest universe tech kristy amore eleanor pena darin rempel'
    },
    {
        name: 'Illustrative Twibbon',
        campaigns: [
            {
                name: 'Blue Colorful Pop International Woman Day',
                thumbnail: '/assets/img/sample/sample-campaign-illustrative-1.jpeg',
                creator: {
                    name: 'Sara Bradtke',
                    avatar: '/assets/img/sample/sample-person-15.jpg'
                },
                hit: 19220,
                createdAt: dayjs().subtract(3, 'month').fromNow()
            },
            {
                name: 'Pink Orange Creative Pink October',
                thumbnail: '/assets/img/sample/sample-campaign-illustrative-3.webp',
                creator: {
                    name: 'Carol Rogahn',
                    avatar: '/assets/img/sample/sample-person-11.jpg'
                },
                hit: 241,
                createdAt: dayjs().subtract(1, 'month').fromNow()
            },
            {
                name: '90s Sticker Bomb Twibbon',
                thumbnail: '/assets/img/sample/sample-campaign-illustrative-2.webp',
                creator: {
                    name: 'Marian Thompson',
                    avatar: '/assets/img/sample/sample-person-12.jpg'
                },
                hit: 391,
                createdAt: dayjs().subtract(4, 'day').fromNow()
            },
            {
                name: 'Yellow Pop Illustrative International Woman',
                thumbnail: '/assets/img/sample/sample-campaign-illustrative-4.webp',
                creator: {
                    name: 'Sara Bradtke',
                    avatar: '/assets/img/sample/sample-person-15.jpg'
                },
                hit: 1231,
                createdAt: dayjs().subtract(18, 'day').fromNow()
            }
        ],
        uri: 'illustrative-twibbon',
        creator: {
            name: 'Sara Bradtke',
            avatar: '/assets/img/sample/sample-person-15.jpg',
            username: 'sarabradtke'
        },
        keywords:
            'illustrative twibbon blue colorful pop international woman day pink orange creative october 90s sticker bomb sara bradtke carol rogahn marian thompson yellow'
    },
    {
        name: '🥳 Happy Birthday!',
        campaigns: [
            {
                name: 'Purple and White Modern Happy Birthday',
                creator: {
                    name: 'Universe Tech',
                    avatar: '/assets/img/sample/sample-avatar-1.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-1.jpg'
            },
            {
                name: 'Blue White Happy Birthday',
                creator: {
                    name: 'Eleanor Pena',
                    avatar: '/assets/img/sample/sample-avatar-7.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-2.jpg'
            },
            {
                name: 'Pink Colourful Happy Birthday',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-3.jpg'
            },
            {
                name: 'Water Colour Outer Space Happy Birthday',
                creator: {
                    name: 'Universe Tech',
                    avatar: '/assets/img/sample/sample-avatar-1.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow(),
                thumbnail: '/assets/img/campaigns/campaign-hbd-4.webp'
            }
        ],
        uri: 'happy-birthday',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        },
        keywords:
            'happy birthday purple white modern blue pink colourful water colour outer space universe tech eleanor pena albert forest'
    },
    {
        name: '💍 Wedding Celebration',
        campaigns: [
            {
                name: 'Brown and Cream Happy Graduation',
                thumbnail: '/assets/img/campaigns/campaign-wedding-celebration-1.jpg',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            }
        ],
        uri: 'graduation',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        },
        keywords: 'wedding celebration brown cream albert forest universe tech'
    },
    {
        name: 'Back to School Twibbon',
        campaigns: [
            {
                name: 'Back to School Blue Yellow',
                thumbnail: '/assets/img/sample/sample-campaign-bts-1.webp',
                creator: {
                    name: 'Lucia Lang',
                    avatar: '/assets/img/sample/sample-person-20.jpg'
                },
                hit: 19220,
                createdAt: dayjs().subtract(6, 'month').fromNow()
            },
            {
                name: 'Beige and Yellow Creative Back to School',
                thumbnail: '/assets/img/sample/sample-campaign-bts-2.webp',
                creator: {
                    name: 'Ollie Lesch',
                    avatar: '/assets/img/sample/sample-person-21.jpg'
                },
                hit: 912,
                createdAt: dayjs().subtract(1, 'month').fromNow()
            },
            {
                name: 'Blue White Back to School Twibbon for Instagram',
                thumbnail: '/assets/img/sample/sample-campaign-bts-3.webp',
                creator: {
                    name: 'Jay Mosciski',
                    avatar: '/assets/img/sample/sample-person-22.jpg'
                },
                hit: 391,
                createdAt: dayjs().subtract(6, 'day').fromNow()
            },
            {
                name: 'Green Playful Back to School Twibbon',
                thumbnail: '/assets/img/sample/sample-campaign-bts-4.webp',
                creator: {
                    name: 'Vera Schuppe',
                    avatar: '/assets/img/sample/sample-person-23.jpg'
                },
                hit: 1231,
                createdAt: dayjs().subtract(18, 'day').fromNow()
            }
        ],
        uri: 'back-to-school',
        creator: {
            name: 'Dewey Schuster',
            avatar: '/assets/img/sample/sample-person-24.jpg',
            username: 'dewe19e1'
        },
        keywords:
            'back to school twibbon blue yellow beige creative for instagram green playful dewey schuster lucia lang ollie lesch jay mosciski vera'
    },
    {
        name: 'Dirgahayu Indonesia',
        campaigns: [
            {
                name: 'Red and White Dirgahayu Republik Indonesia',
                thumbnail: '/assets/img/sample/sample-campaign-hutri-1.webp',
                creator: {
                    name: 'Bobbie Kuhlman',
                    avatar: '/assets/img/sample/sample-person-33.jpg'
                },
                hit: 19220,
                createdAt: dayjs().subtract(6, 'month').fromNow()
            },
            {
                name: 'Merah Putih Hut Kemerdekaan Indonesia',
                thumbnail: '/assets/img/sample/sample-campaign-hutri-2.webp',
                creator: {
                    name: 'Harry Gleason',
                    avatar: '/assets/img/sample/sample-person-34.jpg'
                },
                hit: 912,
                createdAt: dayjs().subtract(1, 'month').fromNow()
            },
            {
                name: 'Dirgahayu Republik Indonesia',
                thumbnail: '/assets/img/sample/sample-campaign-hutri-3.webp',
                creator: {
                    name: 'Jeremy Romaguera',
                    avatar: '/assets/img/sample/sample-person-35.jpg'
                },
                hit: 391,
                createdAt: dayjs().subtract(6, 'day').fromNow()
            },
            {
                name: 'Selamat Hari Pahlawan Indonesia',
                thumbnail: '/assets/img/sample/sample-campaign-hutri-4.webp',
                creator: {
                    name: 'Elizabeth Ruecker',
                    avatar: '/assets/img/sample/sample-person-36.jpg'
                },
                hit: 1231,
                createdAt: dayjs().subtract(18, 'day').fromNow()
            }
        ],
        uri: 'dirgahayu-indonesia',
        creator: {
            name: 'Aji Abdul',
            avatar: '/assets/img/sample/sample-avatar-7.jpg',
            username: 'johnhuel81'
        },
        keywords:
            'dirgahayu indonesia red white republik merah putih hut kemerdekaan selamat hari pahlawan aji abdul bobbie kuhlman harry gleason jeremy romaguera elizabeth ruecker'
    },
    {
        name: '👶 New Baby',
        campaigns: [
            {
                name: 'Neutral New Baby Born',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-1.jpg',
                creator: {
                    name: 'Albert Forest',
                    avatar: '/assets/img/sample/sample-avatar-5.jpg'
                },
                hit: 15100,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            },
            {
                name: 'Beige White New Baby Born',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-2.jpg',
                creator: {
                    name: 'Darin Rempel',
                    avatar: '/assets/img/sample/sample-person-11.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Pink White Baby Birth',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-3.jpg',
                creator: {
                    name: 'Eleanor Pena',
                    avatar: '/assets/img/sample/sample-avatar-7.jpg'
                },
                hit: 1470,
                createdAt: dayjs().subtract(3, 'week').fromNow()
            },
            {
                name: 'Pink and Orange Playful Little Family Twibbon',
                thumbnail: '/assets/img/campaigns/campaign-new-baby-4.webp',
                creator: {
                    name: 'Kristy Amore',
                    avatar: '/assets/img/sample/sample-person-12.jpg'
                },
                hit: 85500,
                createdAt: dayjs().subtract(5, 'day').fromNow()
            }
        ],
        uri: 'new-baby',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg',
            username: 'universetech'
        },
        keywords:
            'new baby neutral born beige white pink birth orange little family twibbon universe tech darin rempel eleanor pena kristy amore albert forest'
    }
];

export { ownCollections, publicCollections };
