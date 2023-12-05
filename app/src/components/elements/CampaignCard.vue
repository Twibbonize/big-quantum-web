<script setup >
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import numeral from 'numeral';

dayjs.extend(relativeTime)


const props = defineProps({
  name: String,
  creator: String,
  avatar: String,
  supports: Number,
  createdAt: Number,
  thumbnail: String,
})
</script>

<template>
  <div class="campaign-card style-1">
    <div class="card-media">
      <a href="#">
        <img :src="props.thumbnail" alt="">
      </a>
      <div class="button-view">
        <nuxt-link to="#" data-toggle="modal" data-target="#popup_view" class="tf-button">
          <span>View</span>
        </nuxt-link>
      </div>
    </div>
    <h5 class="name text-lg	">{{ props.name }}</h5>
    <div class="author flex items-center">
      <img class="avatar" :src="avatar" alt="Image">
      <div class="flex flex-col justify-center info">
        <a href="#"><h6 class="campaign-card__name">{{ props.creator }}</h6></a>
      </div>
    </div>
    <div class="divider"></div>
    <div class="meta-info flex items-center">
      <div class="flex items-center mr-5">
        <i class="ri-group-line text-xl	 mr-1"></i>
        <div class="flex flex-col">
          <span class="text-sm font-bold">Supporters</span>
          <h6 class="text-sm fw-light lh-1">{{ numeral(props.supports).format('0.0a') }}</h6>
        </div>
      </div>
      <div class="flex items-center">
        <i class="ri-time-line text-xl	 mr-1"></i>
        <div class="flex flex-col">
          <span class="text-sm font-bold">Created</span>
          <h6 class="text-sm fw-light lh-1">{{ dayjs(props.createdAt).fromNow() }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.campaign-card { 
  border-radius: 20px;
  background: #FFFFFF;
  padding: 10px 10px 14px;
  border: 1px solid #FFFFFF;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
  -webkit-transition: all 0.2s ease;
  -moz-transition   : all 0.2s ease;
  -ms-transition    : all 0.2s ease;
  -o-transition     : all 0.2s ease;
  transition        : all 0.2s ease;

  &__name:hover {
    text-decoration: underline;
  }
}

.campaign-card:hover {
  transform: translateY(-10px);
  cursor: pointer;
}

.campaign-card .card-media {
  position: relative;
  margin-bottom: 12px;
  border-radius: 25px;
  overflow: hidden;
}

.campaign-card .card-media img {
  width: 100%;
  object-fit: cover;
  -webkit-transition: all 0.2s ease;
  -moz-transition   : all 0.2s ease;
  -ms-transition    : all 0.2s ease;
  -o-transition     : all 0.2s ease;
  transition        : all 0.2s ease;
}

.campaign-card:hover .card-media a img {
  transform: scale(1.1);
}

.campaign-card.style-1 {
  padding: 10px 10px 14px 10px;
}

.campaign-card.style-1 .card-media {
  border-radius: 15px;
}

.campaign-card.style-1 .name {
  margin-bottom: 10px;
  line-height: 25px;
  font-weight: 800;
  padding-left: 2px;
  padding-right: 2px;
  min-width: 0;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.campaign-card.style-1 .divider {
  margin-top: 16px;
  margin-bottom: 16px;   
}

.campaign-card .meta-info,
.campaign-card .author {
  padding-left: 2px;
  padding-right: 2px;
}

.text-bid {
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
}

.campaign-card.style-1 .card-media .button-view {
  bottom: 30%;
}

.campaign-card.style-1:hover .card-media .button-view {
  bottom: 50%;
  transform: translate(-50%,50%);
}

/* bg-white */
.campaign-card.style-1.bg-white {
  background-color: #FFF;
  border: 1px solid #F1F1F1;
  padding-bottom: 12px;
}

.campaign-card.style-1.bg-white .card-media {
  border-radius: 12px;
}

.campaign-card.style-1.bg-white .card-media img {
  height: 244px;
}

.campaign-card.style-1.bg-white .price.gem i {
  font-size: 14px;
}

.campaign-card.style-1.bg-white .meta-info h6 i::before,
.campaign-card.style-1.bg-white .meta-info h6,
.campaign-card.style-1.bg-white .author .info h6 a,
.campaign-card.style-1.bg-white .name a,
.campaign-card.style-1.bg-white .wishlist-button,
.campaign-card.style-1.bg-white .featured-countdown {
  color: #161616;
}

.campaign-card.style-1.bg-white .meta-info .text-bid,
.campaign-card.style-1.bg-white .author .info span {
  color: rgba(22, 22, 22, 0.3);
}

.campaign-card.style-1.bg-white .divider {
  margin: 0;
  height: 26px;
  background: none;
}

.campaign-card.style-1.bg-white .button-view {
  position: unset;
  opacity: 1;
  transform: none;
}

/* button-view */
.button-view {
  position: absolute;
  bottom: 0px;
  height: 44px;
  border-radius: 22px;
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

.campaign-card:hover .button-view {
  bottom: 12px;
  opacity: 1;
}

.author .avatar {
  width: 22px !important;
  height: 22px !important;
  border-radius: 11px !important;
  overflow: hidden;
  margin-right: 10px;
  flex-shrink: 0;
}

.author .info span {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  line-height: 19px;
}

.author .info h6 {
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: 600 !important;
}
</style>