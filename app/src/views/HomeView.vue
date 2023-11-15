<template>
  <div class="home-views overflow-hidden">
    <div class="home-views__navbar w-100 d-flex align-items-center justify-content-center">
      <div class="container w-100 d-flex align-items-center justify-content-between">
        <img class="header__logo" src="/src/assets/quantum/logos/twibbonize-logo-dark.svg" alt="twibbonize"/>
        <div class="home-views__navbar__search-bar d-flex align-items-center justify-content-end w-100">
          <div class="home-views__navbar__search-bar__icon-container d-flex align-items-center justify-content-center">
            <i class="ri-search-line color_white"></i>
          </div>
        </div>
        <img class="header__logo" style="opacity: 0;" src="/src/assets/quantum/logos/twibbonize-logo-dark.svg" alt="twibbonize"/>
      </div>
    </div>

    <div class="home-views__hero d-flex">
      <img class="home-views__hero__pattern-left" src="/src/assets/quantum/pattern/twibbonize-hero-pattern-left.svg" alt="pattern">
      <img class="home-views__hero__pattern-right" src="/src/assets/quantum/pattern/twibbonize-hero-pattern-right.svg" alt="pattern">
      <div class="home-views__container container row d-flex w-100">
        <div class="home-views__hero__text-container d-flex flex-column col-4">
          <h1 class="home-views__hero__text">
            <span class="home-views__hero__text-highlight">show</span>
            your supports
          </h1>
          <h4 class="mt-3 fw-normal fs-5">
            Turn your passion into action; create custom images that show what you stand for and invite friends to join you
          </h4>
        </div>
        <div class="d-flex col-8 home-views__hero__slider-container">
          <div class="home-views__hero__slider-left"></div>
          <div class="home-views__hero__slider-image"></div>
          <!-- <img src="/src/assets/quantum/illustration/campaign-slider.png" class="home-views__hero__slider-image"> -->
          <div class="home-views__hero__slider-right"></div>
        </div>
      </div>
    </div>

    <div class="hero__index">
      <img class="sh_1" src="/src/assets/img/icons/sh_1.png" alt="" />
      <img class="sh_2" src="/src/assets/img/icons/sh_2.png" alt="" />
      <img class="sh_3" src="/src/assets/img/icons/sh_3.png" alt="" />

      <div class="container">
        <div class="row align-items-center justify-content-center mb-70 mt-60">
          <div class="col-lg-auto">
            <img
              class="img-fluid d-none d-md-block"
              src="/src/assets/img/logos/raroin.svg"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="hero__left space-y-20">
              <h1 class="hero__title">Fully Feautured NFT Marketplace</h1>
              <p class="hero__text txt">
                Raroin is a NFT Marketplace Platform template . It’s come with a creative design,
                home page options, different explore and digital asset pages and items.
              </p>
              <div class="space-x-20 d-flex flex-column flex-md-row sm:space-y-20">
                <a class="btn btn-primary" href="#Demos">View Demos</a>
                <a
                  class="btn btn-white"
                  target="_blank"
                  href="https://themeforest.net/item/raroin-nft-marketplace/33730631"
                >
                  Purchase now</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="box is__big hero_icons">
              <div class="row">
                <div class="col-lg-4 space-y-10 text-center">
                  <i class="ri-star-line icon is_1"></i>
                  <p>Rating:</p>
                  <div class="stars d-flex justify-content-center" style="color: #ffc700">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <span class="color_black">/ 5*</span>
                  </div>
                </div>
                <div class="col-lg-4 space-y-10 text-center">
                  <i class="ri-price-tag-3-line icon is_2"></i>
                  <p>Price:</p>
                  <p class="color_black">Starting at <strong> $21</strong></p>
                </div>
                <div class="col-lg-4 space-y-10 text-center">
                  <i class="ri-information-line icon is_3"></i>
                  <p>Latest Version:</p>
                  <p class="color_black"><span> 2.0.0</span> , 12 oct 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section mt-100 demos_wrap">
      <div class="container">
        <div class="section__head">
          <h2 class="text-center title_demos mb-20">Deferent Demos</h2>
          <div class="styles_tab d-none space-x-20">
            <div class="item is_active">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Default Style</p>
            </div>
            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Retro Style</p>
            </div>
            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Line Style</p>
            </div>
            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Pastel Style</p>
            </div>
            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Gold Style</p>
            </div>
          </div>
        </div>
        <div class="demos mt-100" id="Demos">
          <div class="row">
            <div class="col-xl-3 col-md-4 col-sm-6">
              <a href="/home-1" target="_blank" class="demo_item space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/1.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Home 1</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xl-3 col-md-4 col-sm-6">
              <a href="/home-2" target="_blank" class="demo_item space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/2.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Home 2</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xl-3 col-md-4 col-sm-6">
              <a href="/home-3" target="_blank" class="demo_item space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/3.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Home 3</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xl-3 col-md-4 col-sm-6">
              <a href="#" target="_blank" class="demo_item space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/coming.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Home 4 - Gaming</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section mb-100 mt-40 demos_wrap">
      <div class="container">
        <div class="section__head">
          <h2 class="text-center title_demos mb-20">Everything you need in one place</h2>
          <div class="styles_tab d-none space-x-20">
            <div class="item is_active">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Default Style</p>
            </div>

            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Retro Style</p>
            </div>
            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Line Style</p>
            </div>
            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Pastel Style</p>
            </div>
            <div class="item">
              <i class="ri-checkbox-blank-circle-line"></i>
              <p>Gold Style</p>
            </div>
          </div>
        </div>
        <div class="demos mt-100">
          <div class="row">
            <div class="col-lg-3">
              <a href="/marketplace" target="_blank" class="demo_item is_lg space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/marketplace.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Marketplace</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/edit-profile" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/profile_edit.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Edit Profile</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/item-details" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/item.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Item details</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/ranking" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/ranking.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Ranking</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/live-auctions" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/live.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Live Auction</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/activity" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/activity.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Activity</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/profile" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/profile.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Profile</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/connect-wallet" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/wallet.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Connect wallet</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/collections" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/collections.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Collections</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/creators" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/creators.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Creators</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/upload-type" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/upload_t.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Upload types</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="hr_in_index"></div>
        <div class="demos mt-100">
          <div class="row">
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/post-details" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/forum_details.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Forum Details</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/newsletter" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/newsletter.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Newsletter</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/contact" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/contact.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Contact</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/questions" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/faq.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>FAQ</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/submit-request" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/request.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Submit request</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <a href="/request" target="_blank" class="demo_item is_sm space-y-10">
                    <div class="img_wrap">
                      <img src="/src/assets/img/screens/chat.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                      <h5>Request chat</h5>
                      <div class="modes d-flex space-x-10">
                        <img src="/src/assets/img/icons/light.svg" alt="" />
                        <img src="/src/assets/img/icons/dark.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <a href="/forum" target="_blank" class="demo_item is_lg space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/forum.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Forum</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/blog" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/blog.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Blog</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/article" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/article.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Article</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/privacy" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/privacy.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Privacy policy</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/register" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/register.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Register</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="/login" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/login.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>Login</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <a href="404.html" target="_blank" class="demo_item is_sm space-y-10">
                <div class="img_wrap">
                  <img src="/src/assets/img/screens/404.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <h5>404</h5>
                  <div class="modes d-flex space-x-10">
                    <img src="/src/assets/img/icons/light.svg" alt="" />
                    <img src="/src/assets/img/icons/dark.svg" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img class="sh_log" src="/src/assets/img/icons/sh_1.png" alt="" />
      <div class="container">
        <div class="row justify-content-center changelog">
          <div class="col-lg-7">
            <div class="overflow_log">
              <div class="more_log btn btn-white btn-sm">
                <span class="change_text"> <i class="ri-more-fill"></i> </span>
              </div>
              <div class="box is__big">
                <h2 class="text-center mb-40">Raroin Changelog</h2>

                <div class="space-y-20">
                  <p class="text-center mb-20 color_brand">
                    V2.0.0 <span class="color_red">(BIG UPDATE) </span>
                  </p>
                  <div class="box change_log">
                    <h6>Raroin Welcome page is now available</h6>
                    <span class="bage new">NEW</span>
                  </div>
                  <div class="box change_log">
                    <h6>add new <span class="color_green">21 page</span></h6>
                    <span class="bage new">NEW</span>
                  </div>

                  <p class="text-center mb-20 color_brand">V1.8.0</p>
                  <div class="box change_log">
                    <h6>add forum page</h6>
                    <span class="bage new">NEW</span>
                  </div>
                  <div class="box change_log">
                    <h6>fix responsive in style 4 item</h6>
                    <span class="bage fix">FIX</span>
                  </div>
                  <div class="box change_log">
                    <h6>add ranking NFT table</h6>
                    <span class="bage new">NEW</span>
                  </div>

                  <p class="text-center mb-20 color_brand">V1.5.0</p>
                  <div class="box change_log">
                    <h6>add NFT bid popup with report item and profile popup</h6>
                    <span class="bage new">NEW</span>
                  </div>

                  <div class="box change_log">
                    <h6>Add metamask Wallet to the template</h6>
                    <span class="bage new">NEW</span>
                  </div>
                  <div class="box change_log">
                    <h6>fix some javascript issues</h6>
                    <span class="bage fix">FIX</span>
                  </div>
                  <div class="box change_log">
                    <h6>add more social media to edit profile page</h6>
                    <span class="bage upd">UPD</span>
                  </div>
                  <p class="text-center mb-20 color_brand">V1.1.2</p>
                  <div class="box change_log">
                    <h6>add edit profile page</h6>
                    <span class="bage new">NEW</span>
                  </div>
                  <div class="box change_log">
                    <h6>change dropdown menu</h6>
                    <span class="bage upd">UPD</span>
                  </div>
                  <div class="box change_log">
                    <h6>add new item style</h6>
                    <span class="bage new">NEW</span>
                  </div>
                  <div class="box change_log">
                    <h6>Fix Typography</h6>
                    <span class="bage fix">FIX</span>
                  </div>
                  <div class="box change_log">
                    <h6>Add Animation to popular creators in home 2</h6>
                    <span class="bage new">NEW</span>
                  </div>
                  <p class="text-center mb-20 color_brand">V1.0.0</p>
                  <div class="box change_log">
                    <h6>Initial release.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section my-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="box_buy_wrapper relative mb-20">
              <img class="sh_buy" src="/src/assets/img/icons/sh_4.png" alt="..." />
              <div class="box_buy_wrapper2">
                <div class="box box_buy">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="d-flex align-items-center text-center flex-column space-y-10">
                        <p>Get All of it today</p>
                        <h1>$21</h1>
                        <a
                          target="_blank"
                          href="https://themeforest.net/item/raroin-nft-marketplace/33730631"
                          class="btn btn-primary btn-lg btn_buy"
                        >
                          Purchase now
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="row">
                        <div class="col-lg-6">
                          <ul class="list_buy space-y-10">
                            <li>Theme Source files</li>
                            <li>6 Months Free Support</li>
                            <li>Dark and light mode</li>
                            <li>NFT item Variations</li>
                            <li>Detailed Documentation</li>
                          </ul>
                        </div>
                        <div class="col-lg-6">
                          <ul class="list_buy space-y-10">
                            <li>+22 unique inner page</li>
                            <li>Diferent niche demos</li>
                            <li>Metamask connected</li>
                            <li>Analytics Dasboard</li>
                            <li>figma design for free</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box box_buy border-0 hire_box text-center space-y-20">
              <h3>Need to Customize theme?</h3>
              <p>if you want someone to help you with your project</p>
              <a href="mailto:creabik@gmail.com" class="btn btn-primary"> Hire US </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a
      href="https://themeforest.net/item/raroin-nft-marketplace/33730631"
      target="_blank"
      class="raroin_purchase"
    >
      <button type="button" class="btn btn_purch">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17">
            <path
              id="envato"
              d="M3.263,4.742C-.671,10.159,2.882,14.594,5.208,16c2.724,1.648,8.1,1.647,10.235-3.028C18.109,7.152,14.986.465,14.217.093h0c-.613-.3-3.722.043-5.964,2.175a12.109,12.109,0,0,0-3.446,8.1s-.116.474-.614-.214C3.1,8.784,3.674,5.618,3.739,5.177c.09-.621-.31-.64-.476-.435Z"
              transform="translate(-1.5 0)"
              fill="#fff"
            />
          </svg>
        </div>
      </button>
    </a>
    <div class="box_buy_wrapper"></div>
    <footer class="bg_white py-20">
      <div class="container px-xl-0">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-auto text-xl-left logo_holder">
            <a href="index.html">
              <img
                class="header__logo"
                id="logo_js"
                src="/src/assets/img/logos/twibbonize-logo-black.svg"
                alt="logo"
              />
            </a>
          </div>
          <div class="col-lg-auto semibold links bottom0menu">
            <a href="mailto:creabik@gmail.com" class="link color_text">Support</a>
            <a href="https://themeforest.net/user/creabik" class="link color_text">Creabik Team</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style>
  .home-views__navbar {
    height: 144px;
    z-index: 2;
    position: fixed;
    top: 0;
  }

  .home-views__navbar__search-bar {
    background: #FFFFFF;
    border-radius: 30px;
    height: 60px;
    max-width: 340px;
    padding: 12px;
    border: 1.8px solid #16DAC1;
    box-shadow: 0px 3.6px 35.7px 0px #0000001A;
  }

  .home-views__navbar__search-bar:hover {
    background: #353851;
    cursor: pointer;
  }

  .home-views__navbar__search-bar__icon-container {
    background: #353851;
    height: 36px;
    width: 36px;
    border-radius: 18px;
  }

  .home-views .home-views__hero {
    background: #16DAC1;
    height: 100vh;
    position: relative;
  }

  .home-views__hero__pattern-left {
    position: absolute;
    top: 0;
    left: 60px;
    width: 30%;
  }

  .home-views__hero__pattern-right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30%;
  }

  .home-views__hero__text-container {
    margin-top: 144px;
  }

  .home-views__hero__slider-container {
    margin-top: 144px;
    /* width: 1161px; */
    height: 265px;
    position: relative;
    /* background: url(../assets/quantum/illustration/campaign-slider.png); */
    /* background-size: 1161px 265px; */
    /* animation: slide 20s linear infinite; */
    overflow-x: hidden;
  }

  .home-views__hero__slider-image {
    background: url(../assets/quantum/illustration/campaign-slider.png);
    background-size: 1161px 265px;
    width: 2322px;
    height: 265px;
    position: absolute;
    animation: slide 20s linear infinite;
    z-index: 1;
  }

  @keyframes slide {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-1161px);
    }
  }

  .home-views__hero__slider-left {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(92.86deg, #16DAC1 20.27%, rgba(22, 218, 193, 0) 52.58%) !important;
    height: 265px;
    width: 347px;
    z-index: 2;
  }

  .home-views__hero__slider-right {
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(274.99deg, #16DAC1 11.17%, rgba(228, 250, 248, 0) 73.04%) !important;
    height: 265px;
    width: 176px;
    z-index: 2;
  }

  .home-views__hero__text {
    font-size: 4rem;
    color: #353851;
    line-height: 1;
  }

  .home-views__hero__text-highlight {
    font-family: 'Marck Script';
    color: #FFEF5F;
    font-size: 6rem;
    text-decoration: underline;
    font-weight: 400;
    margin-right: -1rem;
  }
</style>