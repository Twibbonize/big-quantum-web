<template>
    <div class="creators-features container">
        <div class="row">
            <div class="flex flex-col items-center">
                <h2 class="creators-features__title">
                    Your all-in-one, user-friendly campaign platform
                </h2>
                <h4 class="creators-features__subtitle mt-6">
                    Tools to tailor and expand your campaign as your support Grows.
                </h4>
            </div>
        </div>
        <div class="creators-features__row px-3 row mt-5">
            <div class="creators-features__card creators-features__card-1 flex flex-col">
                <h5 class="creators-features__card-title">One of a king Twibbon Generator</h5>
                <p class="creators-features__card-description mt-4">
                    Bring all your campaign’s supporter community on your Twibbonize page; where
                    supporters connect and you see the impact!
                </p>
                <a class="font-bold color_black mt-6" href="#">Learn More</a>
            </div>
        </div>
        <div class="creators-features__row px-3 row mt-6">
            <div class="creators-features__card creators-features__card-2 col">
                <h5 class="creators-features__card-title">See who supports you</h5>
                <p class="creators-features__card-description mt-4">
                    See the real people who support your campaign
                </p>
            </div>
            <div class="creators-features__card creators-features__card-3 col">
                <h5 class="creators-features__card-title">Campaign Analytics</h5>
                <p class="creators-features__card-description mt-4">
                    You can’t improve what you can’t track.Track your campaign performance and take
                    it to the new heights
                </p>
            </div>
        </div>
        <div class="creators-features__row px-3 row mt-6">
            <div class="creators-features__card creators-features__card-4 col">
                <h5 class="creators-features__card-title">Know your supporters’ voices</h5>
                <p class="creators-features__card-description mt-4">
                    Let them leave their mark by hearing their thoughts, or opinion on the
                    supporter’s voice section. Also, let them interact with each others there
                </p>
            </div>
            <div class="creators-features__card creators-features__card-5 col">
                <h5 class="creators-features__card-title">Customizable campaign link</h5>
                <p class="creators-features__card-description mt-4">
                    Make your campaign easy to remember and share
                </p>
            </div>
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
        gap: 32px;
    }
    &__card {
        border-radius: 20px;
        border: 1px solid rgba(27, 27, 27, 0.1);
        background: #fff;
        padding: 40px;
        height: 420px;
        background-position: right bottom;
        background-size: initial;
        background-repeat: no-repeat;
    }
    &__card-title {
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 32px */
        letter-spacing: -1.28px;
        max-width: 400px;
    }
    &__card-description {
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 115%; /* 20.7px */
        max-width: 400px;
        margin: 0;
    }
    &__card-1 {
        background-image: url('../../assets/img/campaigns/bento-1.png');
    }
    &__card-2 {
        background-image: url('../../assets/img/campaigns/bento-2.png');
    }
    &__card-3 {
        background-image: url('../../assets/img/campaigns/bento-3.png');
    }
    &__card-4 {
        background-image: url('../../assets/img/campaigns/bento-4.png');
    }
    &__card-5 {
        background-image: url('../../assets/img/campaigns/bento-5.png');
    }
}
</style>
