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

    <div
      class="modal fade popup"
      id="popup_social_media"
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
            <h3 class="text-center">Add more Social media</h3>
            <div class="d-flex flex-column">
              <span class="nameInput mb-10">Telegram</span>
              <input type="text" class="form-control" placeholder="telegram username" />
              <a class="telegram-btn btn btn-primary mt-20 btn-sm" href="#">
                <i class="ri-telegram-fill"></i>
                Connect to Telegram
              </a>
            </div>
            <div class="d-flex flex-column">
              <span class="nameInput mb-10">Instagram</span>
              <input type="text" class="form-control" placeholder="instagram username" />
              <a class="instagram-btn btn btn-primary mt-20 btn-sm" href="#">
                <i class="ri-instagram-fill"></i>
                Connect to Instagram
              </a>
            </div>
            <div class="d-flex flex-column">
              <span class="nameInput mb-10">TikTok</span>
              <input type="text" class="form-control" placeholder="tiktok username" />
              <a class="tiktok-btn btn btn-primary mt-20 btn-sm" href="#">
                <img
                  class="mr-half"
                  src="/src/assets/img/icons/tiktok.svg"
                  alt=""
                  style="height: 20px"
                />
                Connect to TikTok
              </a>
            </div>
            <div class="d-flex flex-column">
              <span class="nameInput mb-10">Youtube</span>
              <input type="text" class="form-control" placeholder="youtube username" />
              <a class="youtube-btn btn btn-primary mt-20 btn-sm" href="#">
                <i class="ri-youtube-fill"></i>
                Connect to Youtube
              </a>
            </div>
            <div class="d-flex flex-column">
              <span class="nameInput mb-10">Medium</span>
              <input type="text" class="form-control" placeholder="medium username" />
              <a class="medium-btn btn btn-primary mt-20 btn-sm" href="#">
                <img src="/src/assets/img/icons/medium.svg" alt="" style="width: 21px" />
                Connect to Medium
              </a>
            </div>
            <a class="discord-btn btn btn-primary w-100" href="#"> Save </a>
          </div>
        </div>
      </div>
    </div>
    <div class="edit_profile">
      <!-- ====== header -->
      <header class="header__1 js-header">
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

      <div class="mb-50">
        <div class="hero__profile">
          <div class="tabs">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb default mb-0">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Edit profile</li>
              </ol>
            </nav>
          </div>
          <div class="cover">
            <img src="/src/assets/img/bg/cover.jpg" alt="cover" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="mb-50">
          <h3 class="mb-30">Choice your Cover image</h3>
          <div class="row profile-img">
            <div class="col-6 col-md-2">
              <div class="box in__profile d-flex justify-content-center align-items-center">
                <img class="icon" src="/src/assets/img/icons/upload-plus.svg" alt="" />
                <input type="file" accept="image/png, image/jpeg" />
              </div>
            </div>
            <div class="col-6 col-md-2">
              <div class="pro_img is_active">
                <img src="/src/assets/img/bg/cover_active.png" alt="" />
              </div>
            </div>
            <div class="col-6 col-md-2">
              <div class="pro_img">
                <img src="/src/assets/img/bg/edit1.png" alt="" />
              </div>
            </div>
            <div class="col-6 col-md-2">
              <div class="pro_img">
                <img src="/src/assets/img/bg/edit1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="avatars space-x-20 mb-30">
            <div id="profile-container">
              <img
                id="profileImage"
                src="/src/assets/img/avatars/avatar_3.png"
                alt="Avatar"
                class="avatar avatar-lg border-0"
              />
            </div>
            <div class="space-x-10 d-flex">
              <div id="boxUpload">
                <a href="#" class="btn btn-dark"> Upload New Photo </a>
                <input
                  id="imageUpload"
                  type="file"
                  name="profile_photo"
                  placeholder="Photo"
                  required=""
                  capture
                />
              </div>
              <a href="#" class="btn btn-white"> Delete </a>
            </div>
          </div>
          <div class="box edit_box col-lg-9 space-y-30">
            <div class="row sm:space-y-20">
              <div class="col-lg-6 account-info">
                <h3 class="mb-20">Account info 🍉</h3>
                <div class="form-group space-y-10 mb-0">
                  <div class="space-y-40">
                    <div class="space-y-10">
                      <span class="nameInput">Display name</span>
                      <input type="text" class="form-control" value="Creabik" />
                    </div>
                    <div class="space-y-10">
                      <span class="nameInput">Custom URL</span>
                      <input type="text" class="form-control" value="raroin.creabik.com/" />
                    </div>
                    <div class="space-y-10">
                      <span class="nameInput d-flex justify-content-between"
                        >Email
                        <span class="txt_xs">Your email for marketplace notifications</span>
                      </span>
                      <div class="confirm">
                        <input type="text" class="form-control" placeholder="Enter your email" />
                        <a href="#" class="confirm-btn btn btn-dark btn-sm">Confirm</a>
                      </div>
                    </div>
                    <div class="space-y-10">
                      <span class="nameInput">Bio</span>
                      <textarea style="min-height: 110px" placeholder="Add your bio"> </textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 social-media">
                <h3 class="mb-20">Your Social media</h3>
                <div class="form-group space-y-10">
                  <div class="space-y-40">
                    <div class="d-flex flex-column">
                      <span class="nameInput mb-10">Facebook</span>
                      <input type="text" class="form-control" placeholder="facebook username" />
                      <a class="facebook-btn btn btn-primary mt-20 btn-sm" href="#">
                        <i class="ri-facebook-circle-fill"></i>
                        Connect to Facebook
                      </a>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="nameInput mb-10">Twitter</span>
                      <input type="text" class="form-control" placeholder="twitter username" />
                      <a class="twitter-btn btn btn-primary mt-20 btn-sm" href="#">
                        <i class="ri-twitter-fill"></i>
                        Connect to Twitter
                      </a>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="nameInput mb-10">Discord</span>
                      <input type="text" class="form-control" placeholder="discord username" />
                      <a class="discord-btn btn btn-primary mt-20 btn-sm" href="#">
                        <i class="ri-discord-fill"></i>
                        Connect to Discord
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  class="btn btn-white mt-20 btn-sm"
                  href="#"
                  data-toggle="modal"
                  data-target="#popup_social_media"
                >
                  <i class="ri-add-circle-line color_brand"></i>
                  Add more Social media
                </a>
              </div>
            </div>
            <div class="hr"></div>
            <p class="color_black">
              To update your settings you should sign message through your wallet. Click 'Update
              profile' then sign the message.
            </p>
            <div><a href="#" class="btn btn-grad">Update Profile</a></div>
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
