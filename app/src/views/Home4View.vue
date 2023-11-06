<template>
  <div class="overflow-hidden">
    <!-- <div class="bg-dark py-10">
      <div class="container">
        <div
          class="text-center
          d-flex
          justify-content-between
          space-x-10
          align-items-center">
          <div class="space-x-10 d-flex align-items-center">
            <lottie-player
              src="https://assets6.lottiefiles.com/private_files/lf30_kqshlcsx.json"
              background="transparent"
              speed="2"
              style="width: 50px; height: 50px"
              loop
              autoplay></lottie-player>
            <p class="color_white">
              Dark mode is now
              <span style="color: rgb(0, 255, 170)">Available </span>
            </p>
          </div>

          <div class="mode_switcher space-x-10">
            <a href="#" class="light d-flex align-items-center is_active">
              <i class="ri-sun-fill"></i> Light
            </a>
            <a href="#" class="dark d-flex align-items-center">
              <i class="ri-moon-fill"></i> Dark
            </a>
          </div>
        </div>
      </div>
    </div> -->

    <header class="header__1 js-header" id="header">
      <div class="container">
        <div class="wrapper js-header-wrapper">
          <div class="header__logo">
            <a href="/">
              <img
                class="header__logo"
                id="logo_js"
                src="/src/assets/img/logos/Logo.svg"
                alt="logo"
              />
            </a>
          </div>

          <!-- ==================  -->
          <div class="header__menu">
            <ul class="d-flex space-x-20">
              <li class="has_popup">
                <a class="color_black" href="#">Homes <i class="ri-more-2-fill"></i></a>
                <ul class="menu__popup space-y-20">
                  <li>
                    <a href="/home-1">
                      <i class="ri-home-smile-2-line"></i>
                      Home page 1
                    </a>
                  </li>
                  <li>
                    <a href="/home-2"> <i class="ri-home-2-line"></i> Home page 2</a>
                  </li>
                  <li>
                    <a href="/home-3"> <i class="ri-home-5-line"></i> Home page 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="color_black" href="/marketplace"> Marketplace</a>
              </li>
              <li>
                <a class="color_black" href="/collections"> Collections</a>
              </li>
              <li>
                <a class="color_black" href="/profile"> Profile</a>
              </li>
              <li>
                <a class="color_black" href="/creators"> Creators</a>
              </li>
              <li>
                <a class="color_black" href="/kit"> Ui Kit </a>
              </li>
              <li class="has_popup2">
                <a class="color_black is_new" href="#">Pages <i class="ri-more-2-fill"></i></a>
                <ul class="menu__popup2 space-y-20">
                  <div class="row sub_menu_row">
                    <div class="col-lg-6 space-y-10">
                      <!-- =============== -->
                      <li>
                        <a href="/activity">
                          <i class="ri-line-chart-line"></i>
                          Activity
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/edit-profile">
                          <i class="ri-edit-line"></i>
                          Edit Profile
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a href="/item-details">
                          <i class="ri-gallery-line"></i>
                          Item details
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/live-auctions">
                          <i class="ri-auction-line"></i>
                          Live Auctions
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/upcoming-projects.html">
                          <i class="ri-upload-line"></i>
                          Upcoming projects
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/ranking">
                          <i class="ri-funds-line"></i>
                          Ranking
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/newsletter">
                          <i class="ri-mail-open-line"></i>
                          Newsletter
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/forum">
                          <i class="ri-discuss-line"></i>
                          Forum & community
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/post-details">
                          <i class="ri-chat-check-line"></i>
                          Forum details
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a href="/no-results">
                          <i class="ri-file-search-line"></i>
                          No Result
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/contact">
                          <i class="ri-customer-service-2-line"></i>
                          Contact
                        </a>
                      </li>
                    </div>

                    <div class="col-lg-6 space-y-10">
                      <!-- =============== -->
                      <li>
                        <a href="/upload-type">
                          <i class="ri-upload-line"></i>
                          Upload Types
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/connect-wallet">
                          <i class="ri-wallet-3-line"></i>
                          Connect wallet
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a href="/questions">
                          <i class="ri-question-line"></i>
                          FAQ
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/submit-request">
                          <i class="ri-share-forward-line"></i>
                          Submit request
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/submit-request">
                          <i class="ri-message-3-line"></i>
                          Request chat
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/blog">
                          <i class="ri-layout-line"></i>
                          Blog
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/article">
                          <i class="ri-newspaper-line"></i>
                          Article
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/register">
                          <i class="ri-lock-line"></i>
                          Register
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/login">
                          <i class="ri-shield-user-line"></i>
                          Login
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/privacy">
                          <i class="ri-file-text-line"></i>
                          Privacy Policy
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a c href="404.html">
                          <i class="ri-file-damage-line"></i>
                          404
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <!-- ================= -->
          <div class="header__search">
            <input type="text" placeholder="Search" />
            <button class="header__result">
              <i class="ri-search-line"></i>
            </button>
          </div>
          <div class="header__btns">
            <a class="btn btn-grad btn-sm" href="/connect-wallet">
              <i class="ri-wallet-3-line"></i>
              Connect wallet</a
            >
            <a href="" id="connectbtn">
              <img width="45" src="/src/assets/img/icons/metamask.svg" alt="" />
            </a>
          </div>
          <div class="header__burger js-header-burger"></div>

          <div class="header__mobile js-header-mobile">
            <div class="header__mobile__menu space-y-40">
              <ul class="d-flex space-y-20">
                <li><a class="color_black" href="/marketplace"> Marketplace</a></li>
                <li><a class="color_black" href="/collections"> Collections</a></li>
                <li><a class="color_black" href="/profile"> Profile</a></li>
                <li><a class="color_black" href="/creators"> Creators</a></li>
              </ul>
              <div class="space-y-20">
                <div class="header__search in_mobile w-full">
                  <input type="text" placeholder="Search" />
                  <button class="header__result">
                    <i class="ri-search-line"></i>
                  </button>
                </div>
                <a class="btn btn-grad btn-sm" href="/connect-wallet">Connect wallet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ====== header admin -->
    <header class="header__1 js-header header_wallet" id="header_admin">
      <div class="container">
        <div class="wrapper js-header-wrapper space-x-10">
          <div class="header__logo">
            <a href="/">
              <img
                class="header__logo"
                id="logo_js"
                src="/src/assets/img/logos/Logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <!-- ==================  -->
          <div class="header__menu">
            <ul class="d-flex space-x-20">
              <li class="has_popup">
                <a class="color_black" href="#">Homes <i class="ri-more-2-fill"></i></a>
                <ul class="menu__popup space-y-20">
                  <li>
                    <a href="/home-1">
                      <i class="ri-home-smile-2-line"></i>
                      Home page 1
                    </a>
                  </li>
                  <li>
                    <a href="/home-2"> <i class="ri-home-2-line"></i> Home page 2</a>
                  </li>
                  <li>
                    <a href="/home-3"> <i class="ri-home-5-line"></i> Home page 3</a>
                  </li>
                </ul>
              </li>
              <li><a class="color_black" href="/marketplace"> Marketplace</a></li>
              <li><a class="color_black" href="/collections"> Collections</a></li>
              <li><a class="color_black" href="/profile"> Profile</a></li>
              <li><a class="color_black" href="/creators"> Creators</a></li>
              <li><a class="color_black" href="/kit"> Ui Kit </a></li>
              <li class="has_popup2">
                <a class="color_black is_new" href="#">Pages <i class="ri-more-2-fill"></i></a>
                <ul class="menu__popup2 space-y-20">
                  <div class="row sub_menu_row">
                    <div class="col-lg-6 space-y-10">
                      <!-- =============== -->
                      <li>
                        <a href="/activity">
                          <i class="ri-line-chart-line"></i>
                          Activity
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/edit-profile">
                          <i class="ri-edit-line"></i>
                          Edit Profile
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a href="/item-details">
                          <i class="ri-gallery-line"></i>
                          Item details
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/live-auctions">
                          <i class="ri-auction-line"></i>
                          Live Auctions
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/upcoming-projects.html">
                          <i class="ri-upload-line"></i>
                          Upcoming projects
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/ranking">
                          <i class="ri-funds-line"></i>
                          Ranking
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/newsletter">
                          <i class="ri-mail-open-line"></i>
                          Newsletter
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/forum">
                          <i class="ri-discuss-line"></i>
                          Forum & community
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/post-details">
                          <i class="ri-chat-check-line"></i>
                          Forum details
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a href="/no-results">
                          <i class="ri-file-search-line"></i>
                          No Result
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/contact">
                          <i class="ri-customer-service-2-line"></i>
                          Contact
                        </a>
                      </li>
                    </div>

                    <div class="col-lg-6 space-y-10">
                      <!-- =============== -->
                      <li>
                        <a href="/upload-type">
                          <i class="ri-upload-line"></i>
                          Upload Types
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/connect-wallet">
                          <i class="ri-wallet-3-line"></i>
                          Connect wallet
                        </a>
                      </li>

                      <!-- =============== -->
                      <li>
                        <a href="/questions">
                          <i class="ri-question-line"></i>
                          FAQ
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/submit-request">
                          <i class="ri-share-forward-line"></i>
                          Submit request
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/submit-request">
                          <i class="ri-message-3-line"></i>
                          Request chat
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/blog">
                          <i class="ri-layout-line"></i>
                          Blog
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a class="is_new" href="/article">
                          <i class="ri-newspaper-line"></i>
                          Article
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/register">
                          <i class="ri-lock-line"></i>
                          Register
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/login">
                          <i class="ri-shield-user-line"></i>
                          Login
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a href="/privacy">
                          <i class="ri-file-text-line"></i>
                          Privacy Policy
                        </a>
                      </li>
                      <!-- =============== -->
                      <li>
                        <a c href="404.html">
                          <i class="ri-file-damage-line"></i>
                          404
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <!-- ================== -->
          <div class="header__search">
            <input type="text" placeholder="Search" />
            <button class="header__result">
              <i class="ri-search-line"></i>
            </button>
          </div>
          <div class="d-flex align-items-center space-x-20">
            <div class="header__notifications">
              <div class="js-notifications-icon">
                <i class="ri-notification-3-line"></i>
              </div>
              <div class="notifications_popup space-y-20">
                <div class="d-flex justify-content-between">
                  <h5>Notifications</h5>
                  <a href="/activity" class="badge color_white">View all</a>
                </div>
                <div class="item space-x-20 d-flex justify-content-between align-items-center">
                  <img class="thumb" src="/src/assets/img/notifications/1.png" alt="..." />
                  <div class="details">
                    <a href="/activity"> <h6>Money revieved</h6> </a>
                    <p>0.6 ETH</p>
                  </div>
                  <span class="circle"></span>
                </div>
              </div>
            </div>
            <div class="header__avatar">
              <div class="price">
                <span>2.45 <strong>ETH</strong> </span>
              </div>
              <img class="avatar" src="/src/assets/img/avatars/avatar_2.png" alt="avatar" />
              <div class="avatar_popup space-y-20">
                <div class="d-flex align-items-center justify-content-between">
                  <span> 13b9ebda035r178... </span>
                  <a href="/" class="ml-2">
                    <i class="ri-file-copy-line"></i>
                  </a>
                </div>
                <div class="d-flex align-items-center space-x-10">
                  <img class="coin" src="/src/assets/img/logos/coin.svg" alt="/" />
                  <div class="info">
                    <p class="text-sm font-book text-gray-400">Balance</p>
                    <p class="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                  </div>
                </div>
                <div class="hr"></div>
                <div class="links space-y-10">
                  <a href="#"> <i class="ri-landscape-line"></i> <span> My items</span> </a>
                  <a href="/edit-profile">
                    <i class="ri-pencil-line"></i> <span> Edit Profile</span>
                  </a>
                  <a href="#"> <i class="ri-logout-circle-line"></i> <span> Logout</span> </a>
                </div>
              </div>
            </div>
            <div class="header__btns">
              <a class="btn btn-primary btn-sm" href="/upload-type">Create</a>
            </div>
            <div class="header__burger js-header-burger"></div>
          </div>
          <div class="header__mobile js-header-mobile">
            <div class="header__mobile__menu space-y-40">
              <ul class="d-flex space-y-20">
                <li><a class="color_black" href="/marketplace"> Marketplace</a></li>
                <li><a class="color_black" href="/collections"> Collections</a></li>
                <li><a class="color_black" href="/profile"> Profile</a></li>
                <li><a class="color_black" href="/creators"> Creators</a></li>
              </ul>
              <div class="space-y-20">
                <div class="header__search in_mobile w-full">
                  <input type="text" placeholder="Search" />
                  <button class="header__result">
                    <i class="ri-search-line"></i>
                  </button>
                </div>
                <a class="btn btn-grad btn-sm" href="/connect-wallet">Connect wallet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div
      class="modal fade popup"
      id="popup_bid_success"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body space-y-20 p-40">
            <h3 class="text-center">Your Bidding Successfuly Added</h3>
            <p class="text-center">
              your bid <span class="color_text txt _bold">(16ETH) </span> has been listing to our
              database
            </p>

            <a href="" class="btn btn-dark w-full"> Watch the listings</a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body space-y-20 p-40">
            <h3>Place a Bid</h3>
            <p>You must bid at least <span class="color_black">15 ETH</span></p>
            <input type="text" class="form-control" placeholder="00.00 ETH" />

            <p>Enter quantity. <span class="color_green">5 available</span></p>
            <input type="text" class="form-control" value="1" />
            <div class="hr"></div>
            <div class="d-flex justify-content-between">
              <p>You must bid at least:</p>
              <p class="text-right color_black txt _bold">67,000 ETH</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>service free:</p>
              <p class="text-right color_black txt _bold">0,901 ETH</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Total bid amount:</p>
              <p class="text-right color_black txt _bold">56,031 ETH</p>
            </div>
            <a
              href=""
              class="btn btn-primary w-full"
              data-toggle="modal"
              data-target="#popup_bid_success"
              data-dismiss="modal"
              aria-label="Close"
            >
              Place a bid</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="hero__4">
      <div class="container">
        <div class="swiper_hero">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card__item has_style2 six">
                <div class="card_body">
                  <!-- =============== -->
                  <div class="card_head">
                    <a href="/item-details">
                      <img src="/src/assets/img/bg/home4/1.png" alt="" />
                    </a>
                  </div>
                  <div class="card_footer">
                    <div class="details space-y-10">
                      <h4 class="card_title">
                        <a class="color_black" href="/item-details">
                          Colorful Pockemon Red Dragon
                        </a>
                      </h4>
                      <div class="card_wrap space-x-20">
                        <div class="bid">
                          <p class="color_text txt_xs">BID</p>
                          <span class="txt_sm _bold">4.77 ETH</span>
                        </div>
                        <div class="auction_end">
                          <p class="color_text txt_xs">TIMER</p>
                          <span class="counter txt_sm _bold">56 : 34 : 00</span>
                        </div>
                        <div class="bid_btn">
                          <a
                            href="#"
                            class="btn btn-grad btn-sm"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            >Place Bid</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card__item has_style2 six">
                <div class="card_body">
                  <!-- =============== -->
                  <div class="card_head">
                    <a href="/item-details">
                      <img src="/src/assets/img/bg/home4/2.png" alt="" />
                    </a>
                  </div>
                  <div class="card_footer">
                    <div class="details space-y-10">
                      <h4 class="card_title">
                        <a class="color_black" href="/item-details">
                          Colorful Pockemon Red Dragon
                        </a>
                      </h4>
                      <div class="card_wrap space-x-20">
                        <div class="bid">
                          <p class="color_text txt_xs">BID</p>
                          <span class="txt_sm _bold">4.77 ETH</span>
                        </div>
                        <div class="auction_end">
                          <p class="color_text txt_xs">TIMER</p>
                          <span class="counter txt_sm _bold">56 : 34 : 00</span>
                        </div>
                        <div class="bid_btn">
                          <a
                            href="#"
                            class="btn btn-grad btn-sm"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            >Place Bid</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card__item has_style2 six">
                <div class="card_body">
                  <!-- =============== -->
                  <div class="card_head">
                    <a href="/item-details">
                      <img src="/src/assets/img/bg/home4/3.png" alt="" />
                    </a>
                  </div>
                  <div class="card_footer">
                    <div class="details space-y-10">
                      <h4 class="card_title">
                        <a class="color_black" href="/item-details">
                          Colorful Pockemon Red Dragon
                        </a>
                      </h4>
                      <div class="card_wrap space-x-20">
                        <div class="bid">
                          <p class="color_text txt_xs">BID</p>
                          <span class="txt_sm _bold">4.77 ETH</span>
                        </div>
                        <div class="auction_end">
                          <p class="color_text txt_xs">TIMER</p>
                          <span class="counter txt_sm _bold">56 : 34 : 00</span>
                        </div>
                        <div class="bid_btn">
                          <a
                            href="#"
                            class="btn btn-grad btn-sm"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            >Place Bid</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card__item has_style2 six">
                <div class="card_body">
                  <!-- =============== -->
                  <div class="card_head">
                    <a href="/item-details">
                      <img src="/src/assets/img/bg/home4/2.png" alt="" />
                    </a>
                  </div>
                  <div class="card_footer">
                    <div class="details space-y-10">
                      <h4 class="card_title">
                        <a class="color_black" href="/item-details">
                          Colorful Pockemon Red Dragon
                        </a>
                      </h4>
                      <div class="card_wrap space-x-20">
                        <div class="bid">
                          <p class="color_text txt_xs">BID</p>
                          <span class="txt_sm _bold">4.77 ETH</span>
                        </div>
                        <div class="auction_end">
                          <p class="color_text txt_xs">TIMER</p>
                          <span class="counter txt_sm _bold">56 : 34 : 00</span>
                        </div>
                        <div class="bid_btn">
                          <a
                            href="#"
                            class="btn btn-grad btn-sm"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            >Place Bid</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
    <div
      class="modal fade popup"
      id="popup_bid_success"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body space-y-20 p-40">
            <h3 class="text-center">Your Bidding Successfuly Added</h3>
            <p class="text-center">
              your bid <span class="color_text txt _bold">(16ETH) </span> has been listing to our
              database
            </p>

            <a href="" class="btn btn-dark w-full"> Watch the listings</a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body space-y-20 p-40">
            <h3>Place a Bid</h3>
            <p>You must bid at least <span class="color_black">15 ETH</span></p>
            <input type="text" class="form-control" placeholder="00.00 ETH" />

            <p>Enter quantity. <span class="color_green">5 available</span></p>
            <input type="text" class="form-control" value="1" />
            <div class="hr"></div>
            <div class="d-flex justify-content-between">
              <p>You must bid at least:</p>
              <p class="text-right color_black txt _bold">67,000 ETH</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>service free:</p>
              <p class="text-right color_black txt _bold">0,901 ETH</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Total bid amount:</p>
              <p class="text-right color_black txt _bold">56,031 ETH</p>
            </div>
            <a
              href=""
              class="btn btn-primary w-full"
              data-toggle="modal"
              data-target="#popup_bid_success"
              data-dismiss="modal"
              aria-label="Close"
            >
              Place a bid</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade popup" id="popup_history" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body space-y-20 p-40">
            <h4>History</h4>
            <div class="creator_item creator_card space-x-10">
              <div class="avatars space-x-10">
                <div class="media">
                  <div class="badge">
                    <img src="/src/assets/img/icons/Badge.svg" alt="" />
                  </div>
                  <a href="/profile">
                    <img
                      src="/src/assets/img/avatars/avatar_1.png"
                      alt="Avatar"
                      class="avatar avatar-md"
                    />
                  </a>
                </div>
                <div>
                  <p class="color_black">
                    Bid accepted <span class="color_brand">1 ETH</span> by
                    <a class="color_black txt _bold" href="/profile">ayoub</a>
                  </p>
                  <span class="date color_text">28/06/2021, 12:08</span>
                </div>
              </div>
            </div>
            <div class="creator_item creator_card space-x-10">
              <div class="avatars space-x-10">
                <div class="media">
                  <div class="badge">
                    <img src="/src/assets/img/icons/Badge.svg" alt="" />
                  </div>
                  <a href="/profile">
                    <img
                      src="/src/assets/img/avatars/avatar_2.png"
                      alt="Avatar"
                      class="avatar avatar-md"
                    />
                  </a>
                </div>
                <div>
                  <p class="color_black">
                    Bid accepted <span class="color_brand">3 ETH</span> by
                    <a class="color_black txt _bold" href="/profile">monir</a>
                  </p>
                  <span class="date color_text">22/05/2021, 12:08</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card_home4 mt-100">
      <div class="container">
        <div class="section__head">
          <div
            class="d-md-flex sm:space-y-20 space-x-20 justify-content-between align-items-center"
          >
            <h2 class="section__title text-center">
              <img class="icon-shadow" src="/src/assets/img/icons/orange-trend.png" alt="" />
              Trending Gaming cards
            </h2>
            <div class="dropdown text-center">
              <button
                class="btn btn-dark btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recent Active
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_1.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/1.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Colorful Abstract Painting </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">4 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.45 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_3.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/2.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">13.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> The girl with the firefly </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">12 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.55 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_5.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/3.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Dodo hide the seek </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">6 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.45 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_1.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/4.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">4.1k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Liquid Forest Princess </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">34 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">0.55 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <a href="/marketplace" class="btn btn-sm btn-white">
            <i class="ri-restart-line"></i>
            View all items
          </a>
        </div>
      </div>
    </div>

    <div class="card_home4 mt-100">
      <div class="container">
        <div class="section__head">
          <div
            class="d-md-flex sm:space-y-20 space-x-20 justify-content-between align-items-center"
          >
            <h2 class="section__title text-center">
              <img class="icon-shadow" src="/src/assets/img/icons/red-fire.png" alt="" /> Hot
              Selling
            </h2>
            <div class="dropdown text-center">
              <button
                class="btn btn-dark btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recent Active
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">today </a>
                <a class="dropdown-item" href="#">last week</a>
                <a class="dropdown-item" href="#">last week month</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_1.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/9.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Detective Pikachu </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">4 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.45 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_3.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/10.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">13.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> fossil pokemonv </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">12 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.55 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card__item five">
              <div class="card_body space-y-10 space-x-10 d-flex">
                <!-- ???? =============== -->
                <div class="card_head">
                  <img src="/src/assets/img/items/gaming/6.png" alt="" />
                  <div class="details d-flex justify-content-between"></div>
                </div>
                <!-- ???? =============== -->
                <div class="d-flex flex-column justify-content-center w-100 space-y-10">
                  <h6>
                    <a class="color_black" href="//item-details"> Titan Palkia </a>
                  </h6>
                  <div class="hr"></div>
                  <div class="card_footer d-block space-y-10">
                    <a href="/profile" class="creators space-x-10">
                      <div class="avatars">
                        <img
                          src="/src/assets/img/avatars/avatar_4.png"
                          alt="Avatar"
                          class="avatar avatar-sm"
                        />
                      </div>
                      <p class="avatars_name txt_sm">@krista_bryan...</p>
                    </a>
                    <div class="d-flex align-items-center space-x-10 justify-content-between">
                      <a
                        class="btn btn-sm btn-grad"
                        href="#"
                        data-toggle="modal"
                        data-target="#popup_bid"
                        >Place Bid</a
                      >
                      <span class="color_green txt_sm text-right">4,906 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card__item five">
              <div class="card_body space-y-10 space-x-10 d-flex">
                <!-- ???? =============== -->
                <div class="card_head">
                  <img src="/src/assets/img/items/gaming/5.png" alt="" />
                  <div class="details d-flex justify-content-between"></div>
                </div>
                <!-- ???? =============== -->
                <div class="d-flex flex-column justify-content-center w-100 space-y-10">
                  <h6>
                    <a class="color_black" href="//item-details"> Ash And Pikachu </a>
                  </h6>
                  <div class="hr"></div>
                  <div class="card_footer d-block space-y-10">
                    <a href="/profile" class="creators space-x-10">
                      <div class="avatars">
                        <img
                          src="/src/assets/img/avatars/avatar_6.png"
                          alt="Avatar"
                          class="avatar avatar-sm"
                        />
                      </div>
                      <p class="avatars_name txt_sm">@ali_beck...</p>
                    </a>
                    <div class="d-flex align-items-center space-x-10 justify-content-between">
                      <a
                        class="btn btn-sm btn-grad"
                        href="#"
                        data-toggle="modal"
                        data-target="#popup_bid"
                        >Place Bid</a
                      >
                      <span class="color_green txt_sm text-right">3,003 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card__item five">
              <div class="card_body space-y-10 space-x-10 d-flex">
                <!-- ???? =============== -->
                <div class="card_head">
                  <img src="/src/assets/img/items/gaming/8.png" alt="" />
                  <div class="details d-flex justify-content-between"></div>
                </div>
                <!-- ???? =============== -->
                <div class="d-flex flex-column justify-content-center w-100 space-y-10">
                  <h6>
                    <a class="color_black" href="//item-details"> Pikachu Bulbasaur </a>
                  </h6>
                  <div class="hr"></div>
                  <div class="card_footer d-block space-y-10">
                    <a href="/profile" class="creators space-x-10">
                      <div class="avatars">
                        <img
                          src="/src/assets/img/avatars/avatar_8.png"
                          alt="Avatar"
                          class="avatar avatar-sm"
                        />
                      </div>
                      <p class="avatars_name txt_sm">@jimena_stark...</p>
                    </a>
                    <div class="d-flex align-items-center space-x-10 justify-content-between">
                      <a
                        class="btn btn-sm btn-grad"
                        href="#"
                        data-toggle="modal"
                        data-target="#popup_bid"
                        >Place Bid</a
                      >
                      <span class="color_green txt_sm text-right">2,043 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card_home4 mt-100">
      <div class="container">
        <div class="section__head">
          <div
            class="d-md-flex sm:space-y-20 space-x-20 justify-content-between align-items-center"
          >
            <h2 class="section__title text-center" style="min-width: max-content">Explore All</h2>
            <ul class="menu_categories space-x-20">
              <li class="d-flex space-x-10 switch_item">
                <input type="checkbox" id="switch1" /><label for="switch1">Toggle</label>
                <span> Has list price </span>
              </li>
              <li class="d-flex space-x-10 switch_item">
                <input type="checkbox" id="switch2" checked="false" /><label for="switch2"
                  >Toggle</label
                >
                <span> Has open offer </span>
              </li>
              <li class="d-flex space-x-10 switch_item">
                <input type="checkbox" id="switch3" /><label for="switch3">Toggle</label>
                <span> Owned by creator </span>
              </li>
              <li class="d-flex space-x-10 switch_item">
                <input type="checkbox" id="switch4" /><label for="switch4">Toggle</label>
                <span> Has sold </span>
              </li>
            </ul>
            <div class="dropdown text-center">
              <button
                class="btn btn-white btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Popular
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Popular</a>
                <a class="dropdown-item" href="#">Popular</a>
                <a class="dropdown-item" href="#">Popular</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_1.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/1.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Bulbasaur Pokemon </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">4 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.45 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_3.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/2.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">13.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Charizard Pokemon </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">12 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.55 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_5.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/3.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Arcanine Pokemon </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">6 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">2.45 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_1.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/4.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">4.1k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Pikachu Bulbasaur </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">34 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">0.55 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img src="/src/assets/img/avatars/avatar_8.png" alt="Avatar" class="avatar" />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/5.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">6.4k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Ash And Pikachu Artwork </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">7 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">1.45 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img
                        src="/src/assets/img/avatars/avatar_10.png"
                        alt="Avatar"
                        class="avatar"
                      />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/6.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">13.2k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Mew Pokemon </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">2 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">0.055 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img
                        src="/src/assets/img/avatars/avatar_12.png"
                        alt="Avatar"
                        class="avatar"
                      />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/7.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">1.6k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Charizard Pokemon </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">34 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">0.95 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="card__item four is_gaming">
              <div class="card_body space-y-10">
                <!-- =============== -->
                <div class="creators space-x-10">
                  <div class="avatars space-x-3">
                    <a href="/profile">
                      <img
                        src="/src/assets/img/avatars/avatar_13.png"
                        alt="Avatar"
                        class="avatar"
                      />
                    </a>
                  </div>
                </div>
                <div class="card_head">
                  <a href="/item-details">
                    <img
                      src="/src/assets/img/items/gaming/8.png"
                      alt="item
                      img"
                    />
                  </a>
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">11.5k</span>
                  </a>
                </div>
                <!-- =============== -->

                <h6 class="card_title">
                  <a class="color_black" href="/item-details"> Pikachu Bulbasaur </a>
                </h6>
                <div class="card_footer d-block space-y-10">
                  <div class="card_footer justify-content-between">
                    <div class="creators">
                      <p class="txt_sm">9 in stock</p>
                    </div>
                    <a href="#" class="">
                      <p class="txt_sm">Price: <span class="color_green txt_sm">3.55 ETH</span></p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <div class="d-flex align-items-center space-x-10 justify-content-between">
                    <div class="d-flex align-items-center space-x-5">
                      <i class="ri-history-line"></i>
                      <a href="#" data-toggle="modal" data-target="#popup_history">
                        <p class="color_text txt_sm view_history" style="width: auto">
                          View History
                        </p>
                      </a>
                    </div>
                    <a
                      class="btn btn-sm btn-grad"
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      >Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <a href="/marketplace" class="btn btn-sm btn-white">
            <i class="ri-restart-line"></i>
            View all items
          </a>
        </div>
      </div>
    </div>
    <div class="section mt-100">
      <div class="container">
        <div class="section__head">
          <div class="d-flex justify-content-center align-items-center">
            <h2 class="section__title">Browse by Collections</h2>
          </div>
        </div>

        <div class="row justify-content-center mb-30_reset">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <div class="collections is__gaming space-y-10 mb-30">
              <a href="/collections">
                <div class="collections_item">
                  <div class="images-box d-flex space-x-10">
                    <img class="big_img" src="/src/assets/img/items/gaming/8.png" alt="" />
                    <div class="left_imgs">
                      <div class="left_imgs space-y-10">
                        <img src="/src/assets/img/items/gaming/9.png" alt="" />
                        <img src="/src/assets/img/items/gaming/10.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div class="collections_footer justify-content-between">
                <h5 class="collection_title"><a href="/collections">Pikatcho Collection</a></h5>
                <span class="color_text txt_md"> 5 items </span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-8 col-sm-8">
            <div class="collections is__gaming space-y-10 mb-30">
              <a href="/collections">
                <div class="collections_item">
                  <div class="images-box d-flex space-x-10">
                    <img class="big_img" src="/src/assets/img/items/gaming/6.png" alt="" />
                    <div class="left_imgs">
                      <div class="left_imgs space-y-10">
                        <img src="/src/assets/img/items/gaming/7.png" alt="" />
                        <img src="/src/assets/img/items/gaming/8.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div class="collections_footer justify-content-between">
                <h5 class="collection_title"><a href="/collections">Pikatcho Collection</a></h5>
                <span class="color_text txt_md"> 5 items </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer__1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 space-y-20">
            <div class="footer__logo">
              <a href="/">
                <img src="/src/assets/img/logos/Logo.svg" alt="logo" id="logo_js_f" />
              </a>
            </div>
            <p class="footer__text">raroin is a shared liquidity NFT market smart contract</p>
            <div>
              <ul class="footer__social space-x-10 mb-40">
                <li>
                  <a href=""> <i class="ri-facebook-line"></i> </a>
                </li>
                <li>
                  <a href=""> <i class="ri-messenger-line"></i> </a>
                </li>
                <li>
                  <a href=""> <i class="ri-whatsapp-line"></i> </a>
                </li>
                <li>
                  <a href=""> <i class="ri-youtube-line"></i> </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-6">
            <h6 class="footer__title">Raroin</h6>
            <ul class="footer__list">
              <li><a href="/home-1"> Home1 </a></li>
              <li><a href="/home-2"> Home2 </a></li>
              <li><a href="/home-3"> Home3 </a></li>
              <li><a href="/marketplace"> Marketplace </a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-6">
            <h6 class="footer__title">Assets</h6>
            <ul class="footer__list">
              <li><a href="/profile"> Profile </a></li>
              <li><a href="/creators"> Creators </a></li>
              <li><a href="/collections"> Colletctions </a></li>
              <li><a href="/activity"> Activity </a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-6">
            <h6 class="footer__title">Company</h6>
            <ul class="footer__list">
              <li><a href="/upload-type"> Upload Types </a></li>
              <li><a href="/upload"> Upload </a></li>
              <li><a href="/connect-wallet"> Connect wallet </a></li>
              <li><a href="/item-details"> Item details </a></li>
            </ul>
          </div>
        </div>
        <p class="copyright text-center">Copyright © 2021. Created with love by creabik.</p>
      </div>
    </footer>
  </div>
</template>
