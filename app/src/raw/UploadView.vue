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

    <!-- ====== header -->
    <header class="header__1 js-header">
      <div class="container">
        <div class="wrapper js-header-wrapper space-x-10">
          <div class="header__logo">
            <a href="/">
              <img
                class="header__logo"
                id="logo_js"
                src="/src/assets/img/logos/twibbonize-logo-black.svg"
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
    <div class="hero__upload">
      <div class="container">
        <div class="space-y-20">
          <a href="/upload-type" class="btn btn-white btn-sm switch"> Switch to Multiple</a>
          <h2 class="title">Create single collectible</h2>
        </div>
      </div>
    </div>
    <div class="modal fade popup" id="popup_preview" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body space-y-20 p-0">
            <div class="card__item three m-0 in__popup">
              <div class="card_body space-y-10">
                
                <div class="card_head">
                  <img src="/src/assets/img/items/item_4.png" alt="" />
                  <a href="#" class="likes space-x-3">
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">2.1k</span>
                  </a>
                  <div class="action">
                    <a href="#" class="btn btn-primary btn-sm">
                      <i class="ri-pie-chart-line color_white"></i>
                      Place Your Bid
                    </a>
                  </div>
                </div>
                
                <h6 class="card_title">Colorful Abstract Painting</h6>
                <div class="card_footer d-block space-y-10">
                  <div class="d-flex justify-content-between">
                    <div class="creators space-x-10">
                      <div class="avatars -space-x-20">
                        <a href="/profile">
                          <img
                            src="/src/assets/img/avatars/avatar_3.png"
                            alt="Avatar"
                            class="avatar avatar-sm"
                          />
                        </a>
                        <a href="/profile">
                          <img
                            src="/src/assets/img/avatars/avatar_2.png"
                            alt="Avatar"
                            class="avatar avatar-sm"
                          />
                        </a>
                      </div>
                      <a href="/profile">
                        <p class="avatars_name txt_sm">@makinzi_jamy...</p>
                      </a>
                    </div>
                    <a href="#" class="space-x-3">
                      <p class="color_green txt_sm">0.001 ETH</p>
                    </a>
                  </div>
                  <div class="hr"></div>
                  <a href="#" class="d-flex align-items-center space-x-10">
                    <i class="ri-vip-crown-line"></i>
                    <p class="color_text txt_sm" style="width: auto">Highest bid</p>
                    <span class="color_black txt_sm">0.001 ETH</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="box in__upload mb-120">
        <div class="row">
          <div class="col-lg-6">
            <div class="left__part space-y-40 md:mb-20 upload_file">
              <div class="space-y-20">
                <img class="icon" src="/src/assets/img/icons/upload.svg" alt="" />
                <h5>Drag and drop your file</h5>
                <p class="color_text">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
              </div>
              <div class="space-y-20">
                <p class="color_text">or choose a file</p>
                <a href="#" class="btn btn-white"> Browse files </a>
                <input type="file" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group space-y-10">
              <div class="space-y-20">
                <div class="space-y-10">
                  <span class="nameInput">Title</span>
                  <input type="text" class="form-control" placeholder="e. g. `raroin design art`" />
                </div>
                <div class="space-y-10">
                  <span class="nameInput"
                    >Description<span class="color_text"> (optional) </span></span
                  >
                  <input type="text" class="form-control" placeholder="e. g. `raroin design art`" />
                </div>
                <div class="space-y-10">
                  <span class="variationInput">Price</span>
                  <select class="form-select custom-select" aria-label="Default select example">
                    <option>00.00 ETH</option>
                    <option>01.00 ETH</option>
                    <option>02.00 ETH</option>
                    <option>10.00 ETH</option>
                    <option>20.00 ETH</option>
                  </select>
                </div>
                <div class="space-y-10">
                  <span class="variationInput">Choose collection</span>
                  <div class="d-flex flex-column flex-md-row">
                    <a href="" class="choose_collection mb-10 mb-md-0 mr-0 mr-md-3">
                      <div class="icon">
                        <i class="ri-add-line"></i>
                      </div>
                      New collection</a
                    >
                    <a href="" class="choose_collection is_brand">
                      <img src="/src/assets/img/icons/raroin_icon.svg" alt="" />
                      Raroin Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p class="color_black">
              <span class="color_text text-bold"> Service fee : </span>
              2.5%
            </p>
            <p class="color_black">
              <span class="color_text text-bold"> You will receive : </span>
              22.425 ETH $41,637.78
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed_row bottom-0 left-0 right-0">
      <div class="container">
        <div class="row content justify-content-between mb-20_reset">
          <div class="col-md-auto col-12 mb-20">
            <div class="space-x-10">
              <a href="/upload" class="btn btn-white others_btn"> Cancel</a>
              <a
                href="#"
                class="btn btn-dark others_btn"
                data-toggle="modal"
                data-target="#popup_preview"
              >
                Preview</a
              >
            </div>
          </div>
          <div class="col-md-auto col-12 mb-20">
            <a href="/item-details" class="btn btn-grad btn_create"> Create item</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
