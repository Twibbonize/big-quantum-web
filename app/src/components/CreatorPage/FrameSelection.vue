<template>
  <div class="frames-selection container">
    <div class="row">
      <div class="d-flex flex-column align-items-center">
        <h2 class="creators-features__title">More than just frames</h2>
        <h4 class="creators-features__subtitle mt-4">Spice up your online campaign game, not only with a frame, but also with creative backgrounds</h4>
      </div>
      <div class="d-flex gap-4 mt-5 justify-content-center">
        <div class="frames-selection__frame d-flex flex-column align-items-center">
          <img class="frames-selection__icon" src="/assets/img/frames/frame-icon.png" alt="frame">
          <h5 class="mt-4">Frame Twibbon</h5>
          <p class="mt-3">The OG Twibbon; a framt that's placed on your picture</p>
        </div>
        <div class="frames-selection__background">

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .frames-selection {
    &__frame, &__background {
      padding: 40px;
      width: 100%;
      max-width: 540px;
      border: 1px solid rgba(27, 27, 27, 0.10);
      border-radius: 20px;
      background: linear-gradient(313deg, #16dac1, #ffffff, #ffffff, #ffffff);
      background-size: 600% 600%;
      -webkit-animation: primaryblob 30s ease infinite;
      -moz-animation: primaryblob 30s ease infinite;
      animation: primaryblob 30s ease infinite;

      h5, p {
        text-align: center;
        max-width: 300px;
      }
    }
    &__icon {
      height: 80px;
      width: 80px;
    }
  }

  @-webkit-keyframes primaryblob {
      0%{background-position:30% 0%}
      50%{background-position:71% 100%}
      100%{background-position:30% 0%}
  }
  @-moz-keyframes primaryblob {
      0%{background-position:30% 0%}
      50%{background-position:71% 100%}
      100%{background-position:30% 0%}
  }
  @keyframes primaryblob {
      0%{background-position:30% 0%}
      50%{background-position:71% 100%}
      100%{background-position:30% 0%}
  }
</style>