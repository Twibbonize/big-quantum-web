<template>
    <div class="creators-features container px-5 py-24 flex flex-col gap-8">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-3xl	sm:text-6xl font-bold">
                Your all-in-one, user-friendly campaign platform
            </h2>
            <h4 class="text-center text-base sm:text-2xl mt-8">
                Tools to tailor and expand your campaign as your support Grows.
            </h4>
        </div>
        <div class="flex flex-col sm:flex-row gap-8 px-3 row mt-5">
            <div class="card card-1 flex flex-col">
                <h5 class="text-2xl sm:text-3xl font-bold">One of a king Twibbon Generator</h5>
                <p class="text-sm sm:text-lg mt-4">
                    Bring all your campaign’s supporter community on your Twibbonize page; where
                    supporters connect and you see the impact!
                </p>
                <a class="text-sm sm:text-lg font-bold text-black mt-6" href="#">Learn More</a>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-8 px-3 row">
            <div class="card card-2 col">
                <h5 class="text-2xl sm:text-3xl font-bold">See who supports you</h5>
                <p class="text-sm sm:text-lg mt-4">
                    See the real people who support your campaign
                </p>
            </div>
            <div class="card card-3 col">
                <h5 class="text-2xl sm:text-3xl font-bold">Campaign Analytics</h5>
                <p class="text-sm sm:text-lg mt-4">
                    You can’t improve what you can’t track.Track your campaign performance and take
                    it to the new heights
                </p>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-8 px-3 row">
            <div class="card card-4 col">
                <h5 class="text-2xl sm:text-3xl font-bold">Know your supporters’ voices</h5>
                <p class="text-sm sm:text-lg mt-4">
                    Let them leave their mark by hearing their thoughts, or opinion on the
                    supporter’s voice section. Also, let them interact with each others there
                </p>
            </div>
            <div class="card card-5 col">
                <h5 class="text-2xl sm:text-3xl font-bold">Customizable campaign link</h5>
                <p class="text-sm sm:text-lg mt-4">
                    Make your campaign easy to remember and share
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.creators-features {
    .card {
        @apply p-10 bg-white h-[360px] sm:h-[420px] rounded-[20px];
        border: 1px solid rgba(27, 27, 27, 0.1);
        // height: 360px;
        background-position: right bottom;
        background-repeat: no-repeat;
    }
    .card-1 {
        background-image: url('../../assets/img/campaigns/bento-1.png');
        background-size: 70%;
    }
    .card-2 {
        background-image: url('../../assets/img/campaigns/bento-2.png');
        background-size: 80%;
    }
    .card-3 {
        background-image: url('../../assets/img/campaigns/bento-3.png');
        background-size: 70%;
    }
    .card-4 {
        background-image: url('../../assets/img/campaigns/bento-4.png');
        background-size: 80%;
    }
    .card-5 {
        background-image: url('../../assets/img/campaigns/bento-5.png');
        background-size: 80%;
    }
}
</style>
