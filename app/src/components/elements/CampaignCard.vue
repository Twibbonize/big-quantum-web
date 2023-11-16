<template>
  <div class="tf-card-box style-1">
    <div class="card-media">
      <a href="#">
        <img src="https://placehold.jp/350x350.png" alt="">
      </a>
      <!-- <span class="wishlist-button icon-heart"></span>
      <div class="featured-countdown">
        <span class="js-countdown" data-timer="7500" data-labels="d,h,m,s"></span>
      </div> -->
      <div class="button-place-bid">
        <a href="#" data-toggle="modal" data-target="#popup_bid" class="tf-button"><span>View</span></a>
      </div>
    </div>
    <h5 class="name fs-18">Campaign with Extra Long Title on 2023</h5>
    <div class="author d-flex align-items-center">
      <img class="avatar" src="https://placehold.jp/150x150.png" alt="Image">
      <div class="d-flex flex-column justify-content-center info">
        <h6>Cody Fisher</h6>
      </div>
    </div>
    <div class="divider"></div>
    <div class="meta-info d-flex align-items-center">
      <div class="d-flex align-items-center mr-5">
        <i class="ri-group-line fs-5 mr-1"></i>
        <div class="d-flex flex-column">
          <span class="fs-14 fw-bold">Supporters</span>
          <h6 class="fs-10 fw-light">14.7k</h6>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <i class="ri-time-line fs-5 mr-1"></i>
        <div class="d-flex flex-column">
          <span class="fs-14 fw-bold">Created</span>
          <h6 class="fs-10 fw-light">5 Days Ago</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* tf-card-box */
/* -------------------------------------- */
.tf-card-box { 
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
}

.tf-card-box:hover {
  transform: translateY(-10px);
}

.tf-card-box .card-media {
  position: relative;
  margin-bottom: 12px;
  border-radius: 25px;
  overflow: hidden;
}

.tf-card-box .card-media img {
  width: 100%;
  object-fit: cover;
  -webkit-transition: all 0.2s ease;
  -moz-transition   : all 0.2s ease;
  -ms-transition    : all 0.2s ease;
  -o-transition     : all 0.2s ease;
  transition        : all 0.2s ease;
}

.tf-card-box:hover .card-media a img {
  transform: scale(1.1);
}
/* style-1 */
.tf-card-box.style-1 {
  padding: 10px 10px 14px 10px;
}

.tf-card-box.style-1 .card-media {
  border-radius: 15px;
}

.tf-card-box.style-1 .name {
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

.tf-card-box.style-1 .divider {
  margin-top: 16px;
  margin-bottom: 16px;   
}

.tf-card-box .meta-info,
.tf-card-box .author {
  padding-left: 2px;
  padding-right: 2px;
}

.text-bid {
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
}

.tf-card-box.style-1 .card-media .button-place-bid {
  bottom: 30%;
}

.tf-card-box.style-1:hover .card-media .button-place-bid {
  bottom: 50%;
  transform: translate(-50%,50%);
}

/* bg-white */
.tf-card-box.style-1.bg-white {
  background-color: #FFF;
  border: 1px solid #F1F1F1;
  padding-bottom: 12px;
}

.tf-card-box.style-1.bg-white .card-media {
  border-radius: 12px;
}

.tf-card-box.style-1.bg-white .card-media img {
  height: 244px;
}

.tf-card-box.style-1.bg-white .price.gem i {
  font-size: 14px;
}

.tf-card-box.style-1.bg-white .meta-info h6 i::before,
.tf-card-box.style-1.bg-white .meta-info h6,
.tf-card-box.style-1.bg-white .author .info h6 a,
.tf-card-box.style-1.bg-white .name a,
.tf-card-box.style-1.bg-white .wishlist-button,
.tf-card-box.style-1.bg-white .featured-countdown {
  color: #161616;
}

.tf-card-box.style-1.bg-white .meta-info .text-bid,
.tf-card-box.style-1.bg-white .author .info span {
  color: rgba(22, 22, 22, 0.3);
}

.tf-card-box.style-1.bg-white .divider {
  margin: 0;
  height: 26px;
  background: none;
}

.tf-card-box.style-1.bg-white .button-place-bid {
  position: unset;
  opacity: 1;
  transform: none;
}

/* button-place-bid */
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