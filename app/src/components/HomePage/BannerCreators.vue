<template>
  <div class="tp-rated-area overflow-hidden position-relative container">
    <div class="banner-creators__ellipse"></div>
    <img class="banner-creators__bg" src="/src/assets/img/patterns/background-banner-creators.png" alt="">
    <div class="tp-rated-bg pt-120"  data-background="assets/img/rate/rated-bg.jpg">
      <div class="tp-rated-shape-1 d-none d-lg-block">
          <!-- <img src="assets/img/rate/rate-shape-1.png" alt=""> -->
      </div>
      <div class="tp-rated-shape-2 d-none d-sm-block">
          <!-- <img src="assets/img/rate/rate-shape-2.png" alt=""> -->
      </div>
      <div class="container z-index-6">
          <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="tp-rated-title-box text-center mb-60">
                  <h5 class="tp-section-title-3 text-white pb-40">Customers have <span>Consistently</span><br> <span>Rated</span> Softec<span> 4.9/5</span></h5>
                  <a class="tp-btn-blue-lg tp-btn-hover alt-color-white" href="contact.html">
                      <span class="text-color-black">Try it on Browser</span>
                      <b></b>
                  </a>
                </div>
            </div>
          </div>
          <div class="author-rated-wrapper">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4">
                  <div class="author-rated text-center">
                      <div class="author-rated-icon">
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                      </div>
                      <p>"the interface is excellent"</p>
                      <div class="author-rated-logo">
                        <!-- <img src="assets/img/rate/rate-logo-1.png" alt=""> -->
                      </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4">
                  <div class="author-rated text-center">
                      <div class="author-rated-icon">
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                      </div>
                      <p>"improvements in every release"</p>
                      <div class="author-rated-logo">
                        <!-- <img src="assets/img/rate/rate-logo-2.png" alt=""> -->
                      </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4">
                  <div class="author-rated text-center">
                      <div class="author-rated-icon">
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                      </div>
                      <p>"the interface is excellent"</p>
                      <div class="author-rated-logo">
                        <!-- <img src="assets/img/rate/rate-logo-3.png" alt=""> -->
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="author-rated-big-img"  data-parallax='{"y": 100, "smoothness": 30}'>
            <!-- <img src="assets/img/rate/rated-img.png" alt=""> -->
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .banner-creators {
    &__bg {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &__ellipse {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 350px;
      height: 200px;
      border-radius: 350px;
      background: rgba(22, 218, 193, 0.30);
      filter: blur(77.16836547851562px);
    }
  }
</style>