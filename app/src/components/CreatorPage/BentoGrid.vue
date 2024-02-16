<template>
    <div class="creators-features container px-5 py-14 md:py-24 flex flex-col gap-6 md:gap-8">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-2xl md:text-4xl lg:text-6xl font-bold">
                Your all-in-one, user-friendly campaign platform
            </h2>
            <h4 class="text-center text-base md:text-xl lg:text-2xl mt-4 md:mt-8">
                Tools to tailor and expand your campaign as your support Grows.
            </h4>
        </div>
        <div class="flex flex-col sm:flex-row gap-8 md:px-3 row md:mt-5">
            <div class="card card-1 flex flex-col">
                <h5 class="text-2xl md:text-3xl font-bold w-full sm:w-4/12 xl:w-6/12">
                    One of a kind Twibbon Generator
                </h5>
                <p class="text-sm md:text-base lg:text-lg mt-4 w-full sm:w-4/12 xl:w-6/12">
                    Bring all your campaign’s supporter community on your Twibbonize page; where
                    supporters connect and you see the impact!
                </p>
                <a class="text-sm md:text-base lg:text-lg font-bold text-black mt-6 hover:underline" href="#"
                    >Learn More</a
                >
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 md:px-3 row">
            <div class="card card-2 col">
                <h5 class="text-xl md:text-3xl font-bold sm:w-7/12 lg:w-full">See who supports you</h5>
                <p class="text-sm md:text-base lg:text-lg mt-4 sm:w-7/12 lg:w-full">See the real people who support your campaign</p>
            </div>
            <div class="card card-3 col">
                <h5 class="text-xl md:text-3xl font-bold sm:w-7/12 lg:w-full">Campaign Analytics</h5>
                <p class="text-sm md:text-base lg:text-lg mt-4 sm:w-7/12 lg:w-full">
                    You can’t improve what you can’t track.Track your campaign performance and take
                    it to the new heights
                </p>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 md:px-3 row">
            <div class="card card-4 col">
                <h5 class="text-xl md:text-3xl font-bold sm:w-7/12 lg:w-full">Know your supporters’ voices</h5>
                <p class="text-sm md:text-base lg:text-lg mt-4 sm:w-7/12 lg:w-full">
                    Let them leave their mark by hearing their thoughts, or opinion on the
                    supporter’s voice section. Also, let them interact with each others there
                </p>
            </div>
            <div class="card card-5 col">
                <h5 class="text-xl md:text-3xl font-bold sm:w-8/12 lg:w-full">Customizable campaign link</h5>
                <p class="text-sm md:text-base lg:text-lg mt-4 sm:w-8/12 lg:w-full">Make your campaign easy to remember and share</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.creators-features {
    .card {
        @apply p-6 md:p-10 bg-white h-[360px] md:h-[420px] rounded-[20px] w-full;
        border: 1px solid rgba(27, 27, 27, 0.1);
        // height: 360px;
        background-position: right bottom;
        background-repeat: no-repeat;
    }
    .card-1 {
        background-image: url('/assets/img/campaigns/bento-1.png');
        background-size: 100%;
        background-position: 50px 240px;
    }
    .card-2 {
        background-image: url('/assets/img/campaigns/bento-2.png');
        background-size: 100%;
        background-position: 50px 120px;
    }
    .card-3 {
        background-image: url('/assets/img/campaigns/bento-3.png');
        background-size: 100%;
        background-position: 50px 180px;
    }
    .card-4 {
        background-image: url('/assets/img/campaigns/bento-4.png');
        background-size: 100%;
        background-position: 50px 240px;
    }
    .card-5 {
        background-image: url('/assets/img/campaigns/bento-5.png');
        background-size: 150%;
        background-position: 50px 200px;
    }
}

@media screen and (min-width: 360px) {
    .creators-features {
        .card-4 {
            background-position: 50px 200px;
        }

        .card-5 {
            background-position: 50px 150px;
        }
    }
}

@media screen and (min-width: 640px) {
    .creators-features {
        .card-1 {
            background-size: 100%;
            @apply bg-[300px_40px] lg:bg-[400px_40px] xl:bg-[640px_40px] 2xl:bg-[800px_40px];
        }
        .card-2 {
            background-size: 60%;
            @apply bg-[420px_50px] lg:bg-[40px_160px];
        }
        .card-3 {
            background-size: 60%;
            @apply bg-[420px_50px] lg:bg-[40px_200px];
        }
        .card-4 {
            background-size: 70%;
            @apply bg-[250px_240px] lg:bg-[30px_250px] xl:bg-[30px_200px];
        }
        .card-5 {
            background-size: 70%;
            @apply bg-[250px_180px] lg:bg-[30px_200px] xl:bg-[30px_160px];
        }
    }
}

@media screen and (min-width: 1024px) {
    .creators-features {
        .card-1 {
            background-size: 100%;
        }
        .card-2 {
            background-size: 100%;
        }
        .card-3 {
            background-size: 100%;
        }
        .card-4 {
            background-size: 100%;
        }
        .card-5 {
            background-size: 150%;
        }
    }
}
</style>
