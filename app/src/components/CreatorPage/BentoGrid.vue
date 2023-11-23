<template>
  <div class="creators-features container">
    <div class="row">
      <div class="d-flex flex-column align-items-center">
        <h2 class="creators-features__title">Your all-in-one, user-friendly campaign platform</h2>
        <h4 class="creators-features__subtitle mt-4">Tools to tailor and expand your campaign as your support Grows.</h4>
      </div>
    </div>
    <div class="creators-features__row px-3 row mt-5">
      <div class="creators-features__card"></div>
    </div>
    <div class="creators-features__row px-3 row mt-4">
      <div class="creators-features__card col"></div>
      <div class="creators-features__card col"></div>
    </div>
    <div class="creators-features__row px-3 row mt-4">
      <div class="creators-features__card col"></div>
      <div class="creators-features__card col"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .creators-features {
    padding: 96px 0;

    &__title {
      text-align: center;
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 56px */
      letter-spacing: -2.24px;
      max-width: 800px;
    }
    &__subtitle {
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 22px */
    }
    &__row {
      gap: 32px
    }
    &__card {
      border-radius: 20px;
      border: 1px solid rgba(27, 27, 27, 0.10);
      background: #FFF;
      padding: 40px;
    }
  }
</style>