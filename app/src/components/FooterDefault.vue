<template>
  <footer id="footer" class="bg-white">
    <div class="container">
        <div class="d-flex row">
            <div class="col-12">
                <div class="footer-content d-flex flex-grow">
                    <div class="widget-logo d-flex flex-grow w-100">
                        <div class="logo-footer" id="logo-footer">
                            <a href="index.html">
                                <img id="logo_footer" src="/src/assets/img/logos/twibbonize-logo-black.svg">
                            </a>
                            <div class="d-flex gap-2 flex-wrap mt-4">
                              <img id="appstore" class="logo-footer__download" src="/src/assets/img/logos/download-appstore.png">
                              <img id="playstore" class="logo-footer__download" src="/src/assets/img/logos/download-playstore.png">
                            </div>
                        </div>
                    </div>
                    <div class="widget widget-menu style-1">
                        <h5 class="title-widget">Discover</h5>
                        <ul>
                            <li><a href="#">Explore</a></li>
                            <li><a href="#">Leaderboard</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </div>
                    <div class="widget widget-menu style-2">
                        <h5 class="title-widget">Resources</h5>
                        <ul>
                            <li><a href="#">For Creators</a></li>
                            <li><a href="#">What is a Twibbon</a></li>
                            <li><a href="#">Use Cases</a></li>
                            <li><a href="#">Editor</a></li>
                        </ul>
                    </div>
                    <div class="widget-last">
                        <div class="widget-menu style-4">
                            <h5 class="title-widget">Company</h5>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <h5 class="title-widget ws-nowrap mt-30">Join the community</h5>
                        <div class="widget-social">
                            <ul class="d-flex align-items-center gap-2">
                                <li class="widget-social__icon d-flex align-items-center justify-content-center">
                                  <i class="ri-facebook-fill"></i>
                                </li>
                                <li class="widget-social__icon d-flex align-items-center justify-content-center">
                                  <i class="ri-twitter-fill"></i>
                                </li>
                                <li class="widget-social__icon d-flex align-items-center justify-content-center">
                                  <i class="ri-discord-fill"></i>
                                </li>
                                <li class="widget-social__icon d-flex align-items-center justify-content-center">
                                  <i class="ri-tiktok-fill"></i>
                                </li>
                                <li class="widget-social__icon d-flex align-items-center justify-content-center">
                                  <i class="ri-youtube-fill"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom d-flex align-items-center">
            <p>© 2023 OpeN9 - Made By Themesflat</p>
            <ul class="d-flex">
                <li>
                    <a class="ws-nowrap" href="#">Privacy Policy</a>
                </li>
                <li>
                    <a class="ws-nowrap" href="#">Terms of Service</a>
                </li>
            </ul>
        </div>
    </div>
</footer>
</template>

<style lang="scss">
.footer-bottom {
    margin-top: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.53);
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.53);
    font-size: 14px;
    line-height: 22px;
}

.footer-bottom ul li {
    margin-left: 30px;
}

.footer-bottom ul li a {
    color: rgba(255, 255, 255, 0.53);
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
}

.footer-bottom ul li a:hover {
    color: #16DAC1;
}

/* style-1 */
.footer-bottom.style-1 {
    margin-top: 0;
}

.footer-bottom.style-1 .widget-social ul li {
    margin-left: 0;
}

.footer-bottom.style-1 .widget-social ul li a {
    color: #fff;
}

/* bg-white */
#footer.bg-white {
    background-color: #fff;
}

#footer.bg-white .widget {
    margin-right: 80px;
}

#footer.bg-white .icon-vt:before,
#footer.bg-white .widget-menu ul li a,
#footer.bg-white .title-widget {
  color: rgba(22, 22, 22, 1);
  white-space: nowrap;
}

#footer.bg-white .widget-social ul li a {
    color: rgba(22, 22, 22, 1);
    background-color: rgba(22, 22, 22, 0.05);
}

#footer.bg-white a.icon-vt:hover:before,
#footer.bg-white .widget-social ul li a:hover {
    color: #fff !important;
}

#footer.bg-white .footer-bottom {
    border-color: rgba(22, 22, 22, 0.08);
}

#footer.bg-white .footer-bottom ul li a,
#footer.bg-white .footer-bottom p {
    color: #161616;
    font-size: 12px;
    line-height: 19px;
}

#footer {
    padding: 60px 0 30px;
    background-color: #111;
}

#footer .widget {
    margin-right: 55px;
}

#footer .title-widget {
    font-weight: 800; 
    line-height: 25px;
    margin-bottom: 20px;
}

.widget-menu ul li {
    margin-bottom: 5px;
}

.widget-menu ul li:last-child {
    margin-bottom: 0;
}

.widget-menu ul li a {
    color: rgba(255, 255, 255, 0.53);;
    font-size: 14px;
    line-height: 22px;
    position: relative;
}

.widget-menu ul li a:hover {
    color: #16DAC1;
}

.background-white .widget-menu ul li a:after {
    background: rgba(22, 22, 22, 1);
}

.widget-menu ul li a::after {
    content           : '';
    width             : 0;
    height            : 1px;
    position          : absolute;
    background        : #16DAC1;
    left              : 50%;
    bottom            : 0;
    transform         : translateX(-50%);
    visibility        : hidden;
    opacity           : 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition   : all 0.3s ease-in-out;
    -ms-transition    : all 0.3s ease-in-out;
    -o-transition     : all 0.3s ease-in-out;
    transition        : all 0.3s ease-in-out;
}

.widget-social {
  &__icon {
    width: 38px;
    height: 38px;
    border-radius: 19px;
    background: rgba(#1B1B1B, .05);

    i {
      color: #1B1B1B;
    }
  }
}

.logo-footer {
  &__download {
    height: 40px !important;
    width: auto !important;
  }
}
</style>