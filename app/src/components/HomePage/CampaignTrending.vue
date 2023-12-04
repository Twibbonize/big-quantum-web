<template>
  <div class="tf-section featured-item style-bottom">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="heading-section">
                    <div>
                      <h2 class="tf-title">Trending on Twibbonize</h2>
                      <p class="tf-description">Most Supported Campaigns in the Last 24 Hours</p>
                    </div>
                    <a class="d-flex items-center color_black" href="explore-3.html">Explore more <i class="ri-arrow-right-line"></i></a>
                </div>
            </div>
            <div class="col-md-12">
                <div class="featured pt-30 swiper-container carousel" data-swiper='{
                    "loop":false,
                    "slidesPerView": 1,
                    "observer": true,
                    "observeParents": true,
                    "spaceBetween": 30,
                    "navigation": {
                        "clickable": true,
                        "nextEl": ".slider-next",
                        "prevEl": ".slider-prev"
                    },
                    "pagination": {
                        "el": ".swiper-pagination",
                        "clickable": true
                    },
                    "breakpoints": {
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 30
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 30
                        },
                        "1300": {
                            "slidesPerView": 4,
                            "spaceBetween": 30
                        }
                    }
                }'>
                    <div class="swiper-wrapper">
                        <div v-for="{ name, avatar, creator, createdAt, supports, thumbnail }, i in campaigns" :key="i" class="swiper-slide">
                            <CampaignCard
                                :name="name"
                                :creator="creator"
                                :avatar="getAvatarUrl(avatar)"
                                :supports="supports"
                                :created-at="createdAt"
                                :thumbnail="getThumbnailUrl(thumbnail)"
                            />
                        </div>
                    </div>
                    <div class="swiper-pagination d-none"></div>
                    <div class="slider-next swiper-button-next d-none"></div>
                    <div class="slider-prev swiper-button-prev d-none"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from 'vue';
import dayjs from 'dayjs';

import CampaignCard from '@/components/elements/CampaignCard.vue';

const campaigns = ref([
    {
        name: 'UNIVERSE UNPACKED 2022',
        creator: 'Universe Tech',
        avatar: 'sample-avatar-1.jpg',
        supports: 85500,
        createdAt: dayjs().subtract(5, 'day'),
        thumbnail: 'sample-campaign-1.jpg',
    },
    {
        name: 'Liberty Scholarship 2025',
        creator: 'Liberty Scholarship',
        avatar: 'sample-avatar-2.jpg',
        supports: 1470,
        createdAt: dayjs().subtract(3, 'week'),
        thumbnail: 'sample-campaign-2.jpg',
    },
    {
        name: 'Bit by Bit - Retro Gaming',
        creator: 'Bit by Bit',
        avatar: 'sample-avatar-3.jpg',
        supports: 15100,
        createdAt: dayjs().subtract(5, 'day'),
        thumbnail: 'sample-campaign-3.jpg',
    },
    {
        name: 'Digital Culture Webinar',
        creator: 'Digital Culture',
        avatar: 'sample-avatar-4.jpg',
        supports: 7700,
        createdAt: dayjs().subtract(1, 'week'),
        thumbnail: 'sample-campaign-4.jpg',
    },
    {
        name: 'UNIVERSE UNPACKED 2022',
        creator: 'Universe Tech',
        avatar: 'sample-avatar-1.jpg',
        supports: 85500,
        createdAt: dayjs().subtract(5, 'day'),
        thumbnail: 'sample-campaign-1.jpg',
    },
    {
        name: 'Liberty Scholarship 2025',
        creator: 'Liberty Scholarship',
        avatar: 'sample-avatar-2.jpg',
        supports: 14700,
        createdAt: dayjs().subtract(3, 'week'),
        thumbnail: 'sample-campaign-2.jpg',
    },
    {
        name: 'Bit by Bit - Retro Gaming',
        creator: 'Bit by Bit',
        avatar: 'sample-avatar-3.jpg',
        supports: 15100,
        createdAt: dayjs().subtract(5, 'day'),
        thumbnail: 'sample-campaign-3.jpg',
    },
    {
        name: 'Digital Culture Webinar',
        creator: 'Digital Culture',
        avatar: 'sample-avatar-4.jpg',
        supports: 7700,
        createdAt: dayjs().subtract(1, 'week'),
        thumbnail: 'sample-campaign-4.jpg',
    },
])

function getAvatarUrl(name) {
  const filename = `/assets/img/sample/${name}`; 
  return new URL(filename, import.meta.url).href;
}
function getThumbnailUrl(name) {
  const filename = `/assets/img/sample/${name}`; 
  return new URL(filename, import.meta.url).href;
}
</script>

<style lang="scss">
.carouselfull-2,
.carouselfull {
    overflow: unset !important;
}

.carouselfull::before {
    position: absolute;
    content: "";
    top: 0;
    left: -36%;
    background: linear-gradient(270deg, rgba(22, 22, 22, 0.00) 0%, #161616 100%);
    width: 255px;
    height: 408px;
    z-index: 10;
}

.carouselfull::after {
    position: absolute;
    content: "";
    top: 0;
    right: -36%;
    background: linear-gradient(90deg, rgba(22, 22, 22, 0.00) 0%, #161616 100%);
    width: 255px;
    height: 408px;
    z-index: 10;
}

.carouselright {
    width: calc(100vw - ((100vw - 1110px) / 2) - 8px);
    margin-right: unset !important;
    max-width: 100%;
}

.carouselright::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 255px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(90deg, rgba(22, 22, 22, 0.00) 0%, #161616 100%);
}

.carouselright .swiper-slide {
    width: auto;
}

.carouselright .swiper-slide .tf-card-box {
    width: 255px;
}

.style-bottom .carouselright .swiper-pagination {
    text-align: start;
    padding-left: 23px;
    bottom: 7px;
}

.style-bottom .carouselright .next-slide-right {
    right: auto;
    left: 6.8%;
    bottom: -10px;
}

.style-bottom .carouselright .prev-slide-right {
    left: 0;
    bottom: -10px;
}

.heading-section .tf-title.style-1 {
    font-size: 40px;
    font-style: normal;
    line-height: 55px;
}

.heading-section {
    display        : flex;
    align-items    : center;
    justify-content: space-between;
    flex-wrap      : wrap;
}

.heading-section .tf-title {
    font-size: 32px;
    font-weight: 800;
    line-height: 44px;
    z-index: 10;
}

.heading-section .tf-description {
    font-size: 22px;
    z-index: 10;
}

.heading-section a {
    font-size: 14px;
    font-weight: 800;
    line-height: 19px;
    text-transform: capitalize;
    -webkit-transition: all 0.3s ease;
    -moz-transition   : all 0.3s ease;
    -ms-transition    : all 0.3s ease;
    -o-transition     : all 0.3s ease;
    transition        : all 0.3s ease;
    position: relative;
}

.heading-section a i {
    padding: 4px;
    margin-left: 6px;
    font-size: 14px;
    border-radius: 20px;
    border-color: transparent;
    background: none;
    text-decoration: none !important;
}

.heading-section a::after {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 1px;
    right: 0;
    content: '';
    border-radius: 20px;
    border: 1px solid rgba(#1B1B1B, 0.10);
    background: rgba(#1B1B1B, 0.10);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.heading-section a:hover::after {
    width: 107%;
}

.button-place-bid {
    position: absolute;
    bottom: 0px;
    height: 44px;
    transform: translateX(-50%);
    left: 50%;
    text-align: center;
    opacity: 0;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

.tf-card-box:hover .button-place-bid {
    bottom: 12px;
    opacity: 1;
}

.tf-card-box .meta-info .name {
    font-weight: 800;
    line-height: 25px;
    margin-bottom: 4px;
}

.price.gem {
    font-size: 16px;
    font-weight: 800;
    line-height: 22px;
}

.price.gem i {
    margin-right: 4px;
}

.text-bid {
    color: #1B1B1B;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
}

.tf-card-box.style-1.bg-white .meta-info .text-bid,
.tf-card-box.style-1.bg-white .author .info span {
    color: rgba(22, 22, 22, 0.3);
}

.tf-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
    color: #161616;
    background-color: #DEE8E8;
    border-radius: 22px;
    font-size: 14px;
    font-weight: 800;
    width: 116px;
    height: 42px;
    text-transform: capitalize;
    -webkit-transition: all 0.3s ease;
    -moz-transition   : all 0.3s ease;
    -ms-transition    : all 0.3s ease;
    -o-transition     : all 0.3s ease;
    transition        : all 0.3s ease;
}

.tf-button:hover,
.tf-button.active {
    color: #161616;
    background-color: #16DAC1;
}

.tf-button:focus {
    color: #161616 !important;
}

.tf-button.style-1 {
    width: 170px;
    height: 44px;
    gap: 10px;
    flex-shrink: 0;
    background-color: #16DAC1;
}

.tf-button.style-1:hover,
.tf-button.style-1.active {
    color: #161616;
    background-color: #fff;
}

.tf-button.style-1.active:hover {
    background-color: #16DAC1;
}

/* tf-button loadmore */
.tf-button-loadmore {
    width: 160px;
    height: 44px;
    padding: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: #DEE8E8;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    -moz-transition   : all 0.3s ease;
    -ms-transition    : all 0.3s ease;
    -o-transition     : all 0.3s ease;
    transition        : all 0.3s ease;
}

.tf-button-loadmore:hover {
    background-color: #16DAC1;
}

.tf-button-loadmore span {
    color: #161616;
    font-size: 14px;
    line-height: 19px;
    font-weight: 800;
    text-transform: capitalize;
}

.tf-button-loadmore i.icon-loading-1::before {
    font-size: 18px;
    color: rgba(22, 22, 22, 1);
}

.tf-button-loadmore i {
    animation: rotate360 1.5s infinite linear;
}
</style>