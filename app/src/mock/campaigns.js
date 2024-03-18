import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const publicCampaigns = [
    {
        name: 'UNIVERSE UNPACKED 2022',
        uri: 'twb.nz/universe-unpacked-2022',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1704192977229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-1.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'universe unpacked 2022 tech'
    },
    {
        name: 'Digital Culture Webinar',
        uri: 'twb.nz/digital-culture-webinar',
        creator: {
            name: 'Craig Gottlieb',
            username: 'craiggottlieb',
            avatar: '/assets/img/sample/sample-person-1.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705192977229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-4.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'digital culture webinar craig gottlieb'
    },
    {
        name: 'Bit by Bit - Retro Gaming Festival',
        uri: 'twb.nz/bit-by-bit-retro-gaming-festival',
        creator: {
            name: 'Christina Abbott',
            username: 'christabbot',
            avatar: '/assets/img/sample/sample-person-2.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1704092977229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-3.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'bit by retro gaming festival christina abbott'
    },
    {
        name: 'Liberty Scholarships 2025',
        uri: 'twb.nz/liberty-scholarships-2025',
        creator: {
            name: 'Liberty Scholarship',
            username: 'libscholarship',
            avatar: '/assets/img/sample/sample-avatar-4.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1704001077229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-2.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'liberty scholarships 2025 scholarship'
    },
    {
        name: 'My Coffee Moment with Kohi!',
        uri: 'twb.nz/my-coffee-moment-with-kohi',
        creator: {
            name: 'Darrel Upton',
            username: 'darrelupton',
            avatar: '/assets/img/sample/sample-person-5.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1701001077229).fromNow(),
        thumbnail: '/assets/img/sample/Kohi.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'my coffee moment with kohi darrel upton'
    },
    {
        name: 'Digital Marketing Course',
        uri: 'twb.nz/digital-marketing-course',
        creator: {
            name: 'Travis Conner',
            username: 'traviscorner',
            avatar: '/assets/img/sample/sample-person-16.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705192977229).fromNow(),
        thumbnail: '/assets/img/sample/Online-Course.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'digital marketing course travis conner'
    },
    {
        name: 'ASO Rock Festa 2025',
        uri: 'twb.nz/aso-rock-festa-2025',
        creator: {
            name: 'Fernando Heathcote',
            username: 'fernando192',
            avatar: '/assets/img/sample/sample-person-12.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705203097229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-8.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'aso rock festa 2025 fernando heathcote'
    },
    {
        name: '+Ultra Uni O-Week 2025',
        uri: 'twb.nz/ultra-uni-o-week',
        creator: {
            name: 'Melissa Gleichner',
            username: 'melltwb912',
            avatar: '/assets/img/sample/sample-person-11.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705183197029).fromNow(),
        thumbnail: '/assets/img/sample/O-Week.jpg',
        deleteAble: false,
        actions: false,
        keywords: 'ultra uni o-week 2025 melissa gleichner'
    }
];

const ownCampaigns = [
    {
        name: 'UNIVERSE UNPACKED 2025',
        uri: 'twb.nz/universe-unpacked-2025',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 85500,
        createdAt: dayjs().subtract(5, 'day').fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-1.jpg'
    },
    {
        name: 'Universe Tech Future Developers Bootcamp',
        uri: 'twb.nz/universe-tech-fut-dev-bootcamp',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 1470,
        createdAt: dayjs().subtract(3, 'week').fromNow(),
        thumbnail: '/assets/img/sample/future-developers.jpg'
    },
    {
        name: 'Universe Tech Innovation Day',
        uri: 'twb.nz/universe-tech-innovation-day-2025',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 15100,
        createdAt: dayjs().subtract(5, 'day').fromNow(),
        thumbnail: '/assets/img/sample/innovation-day-1.jpg'
    },
    {
        name: 'Shot on Universe Phone',
        uri: 'twb.nz/shot-on-universe-phone',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 7700,
        createdAt: dayjs().subtract(1, 'week').fromNow(),
        thumbnail: '/assets/img/sample/shot-on.jpg'
    },
    {
        name: 'Universe Tech Orbit The Next Generation VR',
        uri: 'twb.nz/universe-tech-orbit-vr',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 85500,
        createdAt: dayjs().subtract(5, 'day').fromNow(),
        thumbnail: '/assets/img/sample/orbit.jpg'
    },
    {
        name: 'Universe Tech Innovation Lab',
        uri: 'twb.nz/universe-tech-innovation-lab',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 14700,
        createdAt: dayjs().subtract(3, 'week').fromNow(),
        thumbnail: '/assets/img/sample/innovation-lab.jpg'
    },
    {
        name: 'Universe Tech Smart Innovation Summit',
        uri: 'twb.nz/universe-tech-innovation-summit',
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        createdAt: dayjs().subtract(5, 'day').fromNow(),
        thumbnail: '/assets/img/sample/smart-innovation-submit.jpg',
        hit: 14929
    }
];

const frames = [
    '/assets/img/frames/hanoi-art-frame-1.png',
    '/assets/img/frames/hanoi-art-frame-2.png',
    '/assets/img/frames/hanoi-art-frame-3.png',
    '/assets/img/frames/hanoi-art-frame-4.png'
];

const mockCampaigns = [
    {
        frame: frames[0],
        photo: '/assets/img/sample/sample-person-1.jpg',
        photoStyle: {
            left: '14%',
            top: '-10%',
            transform: 'scale(1.1)'
        }
    },
    {
        frame: frames[1],
        photo: '/assets/img/sample/sample-person-2.jpg'
    },
    {
        frame: frames[2],
        photo: '/assets/img/sample/sample-person-3.jpg',
        photoStyle: {
            left: '0',
            top: '20%',
            transform: 'scale(1.1)'
        }
    },
    {
        frame: frames[3],
        photo: '/assets/img/sample/sample-person-4.jpg',
        photoStyle: {
            left: '-20%',
            top: '6%',
            transform: 'scale(1.1)'
        }
    },
    {
        frame: frames[0],
        photo: '/assets/img/sample/sample-person-5.jpg',
        photoStyle: {
            left: '16%',
            top: '-12%',
            transform: 'scale(0.9)'
        }
    },
    {
        frame: frames[3],
        photo: '/assets/img/sample/sample-person-8.jpg',
        photoStyle: {
            left: '-20%',
            top: '-0%',
            transform: 'scale(0.9)'
        }
    },
    {
        frame: frames[1],
        photo: '/assets/img/sample/sample-person-10.jpg',
        photoStyle: {
            left: '0',
            top: '10%',
            transform: 'scale(1)'
        }
    },
    {
        frame: frames[1],
        photo: '/assets/img/sample/sample-person-11.jpg',
        photoStyle: {
            left: '0',
            top: '10%',
            transform: 'scale(1)'
        }
    },
    {
        frame: frames[3],
        photo: '/assets/img/sample/sample-person-12.jpg',
        photoStyle: {
            left: '-20%',
            top: '-0%',
            transform: 'scale(0.9)'
        }
    }
];

export { publicCampaigns, ownCampaigns, mockCampaigns };
