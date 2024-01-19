import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const publicCampaigns = [
    {
        name: 'UNIVERSE UNPACKED 2022',
        uri: 'universe-unpacked-2022',
        creator: {
            name: 'Universe Tech',
            username: 'universetech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1704192977229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-1.jpg',
        deleteAble: false,
        actions: false
    },
    {
        name: 'Digital Culture Webinar',
        uri: 'digital-culture-webinar',
        creator: {
            name: 'Craig Gottlieb',
            username: 'craiggottlieb',
            avatar: '/assets/img/sample/sample-person-1.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705192977229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-4.jpg',
        deleteAble: false,
        actions: false
    },
    {
        name: 'Bit by Bit - Retro Gaming Festival',
        uri: 'bit-by-bit-retro-gaming-festival',
        creator: {
            name: 'Christina Abbott',
            username: 'christabbot',
            avatar: '/assets/img/sample/sample-person-2.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1704092977229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-3.jpg',
        deleteAble: false,
        actions: false
    },
    {
        name: 'Liberty Scholarships 2025',
        uri: 'liberty-scholarships-2025',
        creator: {
            name: 'Liberty Scholarship',
            username: 'libscholarship',
            avatar: '/assets/img/sample/sample-avatar-4.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1704001077229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-2.jpg',
        deleteAble: false,
        actions: false
    },
    {
        name: 'My Coffee Moment with Kohi!',
        uri: 'my-coffee-moment-with-kohi',
        creator: {
            name: 'Darrel Upton',
            username: 'darrelupton',
            avatar: '/assets/img/sample/sample-person-5.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1701001077229).fromNow(),
        thumbnail: '/assets/img/sample/Kohi.jpg',
        deleteAble: false,
        actions: false
    },
    {
        name: 'Digital Marketing Course',
        uri: 'digital-marketing-course',
        creator: {
            name: 'Travis Conner',
            username: 'traviscorner',
            avatar: '/assets/img/sample/sample-person-16.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705192977229).fromNow(),
        thumbnail: '/assets/img/sample/Online-Course.jpg',
        deleteAble: false,
        actions: false
    },
    {
        name: 'ASO Rock Festa 2025',
        uri: 'aso-rock-festa-2025',
        creator: {
            name: 'Fernando Heathcote',
            username: 'fernando192',
            avatar: '/assets/img/sample/sample-person-12.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705203097229).fromNow(),
        thumbnail: '/assets/img/sample/sample-campaign-8.jpg',
        deleteAble: false,
        actions: false
    },
    {
        name: '+Ultra Uni O-Week 2025',
        uri: 'ultra-uni-o-week',
        creator: {
            name: 'Melissa Gleichner',
            username: 'melltwb912',
            avatar: '/assets/img/sample/sample-person-11.jpg'
        },
        hit: 85500,
        createdAt: dayjs(1705183197029).fromNow(),
        thumbnail: '/assets/img/sample/O-Week.jpg',
        deleteAble: false,
        actions: false
    }
];

const ownCampaigns = [
    {
        name: 'UNIVERSE UNPACKED 2022',
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
        creator: {
            name: 'Universe Tech',
            avatar: '/assets/img/sample/sample-avatar-1.jpg'
        },
        createdAt: dayjs().subtract(5, 'day').fromNow(),
        thumbnail: '/assets/img/sample/smart-innovation-submit.jpg',
        hit: 14929
    }
];

export { publicCampaigns, ownCampaigns };
