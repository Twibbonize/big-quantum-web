<template>
    <div class="feature grid grid-cols-2 grid-row-5 h-[320px] gap-3 p-3">
        <div class="bento overflow-hidden row-span-3 p-2.5">
            <div class="flex flex-col">
                <div>
                    <p>Campaign</p>
                    <p class="font-bold">Analytics</p>
                </div>
                <div class="w-[250px] mt-2">
                    <video
                        class="w-full"
                        autoplay loop muted
                        src="/assets/videos/pricing-analytics.mp4"
                    />
                </div>
            </div>
        </div>
        <div class="bento row-span-2 pt-4 pr-4">
            <div class="flex items-center justify-between">
                <div>
                    <img src="/assets/img/marketings/campaign-private.png" alt="private">
                </div>
                <div class="-ml-2">
                    <p class="font-bold">Private</p>
                    <p class="font-bold">Campaign</p>
                </div>
            </div>
        </div>
        <div class="bento row-span-3 p-4 text-center">
            <div class="flex flex-col justify-between">
                <div>
                    <p>Campaign</p>
                    <p class="font-bold">Customization</p>
                </div>
                <video
                    class="w-full"
                    autoplay loop muted
                    src="/assets/videos/pricing-campaign-customization.mp4"
                />
            </div>
        </div>
        <div class="bento row-span-2 p-2.5 text-center">
            <div class="flex flex-col justify-between">
                <div class="h-8 relative overflow-hidden">
                    <video
                        class="h-12 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
                        autoplay loop muted
                        src="/assets/videos/pricing-multiple-frames.mp4"
                    />
                </div>
                <div>
                    <p class="font-bold">Multiple Frames</p>
                    <p>per campaign</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .feature {
        p {
            @apply text-sm sm:text-base lg:text-lg;
            line-height: 100% !important;
        }
    }
</style>