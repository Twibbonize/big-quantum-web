<script setup>
import QButton from '@/components/atoms/QButton.vue';
import HomeSlider from '@/components/HomePage/HomeSlider.vue';
import BGHero from '@/components/HomePage/BGHero.vue';
import supportsJSON from '../../assets/lottie/supports.json';
</script>

<template>
    <BGHero class="hero-participant">
        <div class="container mx-auto">
            <div class="w-full pages-title mx-auto">
                <div class="container z-10 absolute mx-auto">
                    <div class="w-full sm:w-1/3 content">
                        <h1 class="hero-participant__text user-select-none pe-none lowercase">
                            show your
                        </h1>
                        <div class="hero-participant__text-animation">
                            <Vue3Lottie
                                :animationData="supportsJSON"
                                :height="200"
                                :width="600"
                                :loop="true"
                            />
                        </div>
                        <h4
                            class="hero-participant__description fw-normal text-xl user-select-none pe-none"
                        >
                            Turn your passion into action; create custom images that show what you
                            stand for and invite friends to join you
                        </h4>
                        <div
                            class="hero-participant__btn-container flat-button flex items-center mt-6 gap-3"
                        >
                            <QButton class="text-sm" color="yellow" border-radius="circle">
                                <i class="ri-add-line"></i>
                                Start a Campaign
                            </QButton>
                            <div class="hero-participant__or text-sm font-bold">or</div>
                            <QButton
                                class="text-sm !px-0"
                                color="transparent"
                                border-radius="circle"
                            >
                                Find a Campaign
                            </QButton>
                        </div>
                    </div>
                </div>
                <HomeSlider />
            </div>
        </div>
    </BGHero>
</template>

<style lang="scss">
.hero-participant {
    overflow: hidden;

    &__text {
        font-size: 80px !important;
        color: #1b1b1b;
        line-height: 1;
    }

    &__text-highlight {
        color: #ffef5f;
        font-family: 'Marck Script' !important;
        font-size: 163.879px !important;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 152.092px; /* 92.807% */
        letter-spacing: -9.833px !important;
        // text-decoration-line: underline;
        transform: rotate(-2deg);
        margin-top: -20px;

        &-line {
            color: #ffef5f;
            font-family: 'Marck Script' !important;
            font-size: 163.879px !important;
            font-style: normal;
            font-weight: 400 !important;
            line-height: 152.092px; /* 92.807% */
            letter-spacing: -14px !important;
            transform: rotate(-2deg);
            margin-top: -110px;
        }
    }

    &__text-animation {
        margin-left: -35px;
        margin-top: -50px;
    }

    &__description {
        color: #1b1b1b;
        font-size: 22px !important;
        line-height: 27px !important;
        font-weight: 500;
        letter-spacing: 0.1px;
    }
}

.hero-participant__or {
    z-index: 1;
    color: #1b1b1b;
    text-decoration: none !important;
}

.hero-participant .tf-bg-line {
    position: absolute;
    width: 100%;
    height: 622px;
    content: '';
    bottom: 0px;
    left: 0;
    background-image: url(../images/item-background/home-slider.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;
}

.hero-participant .content {
    margin-top: 130px;
    height: 470px;
    text-align: start;
    padding-left: 8px;
}
</style>
