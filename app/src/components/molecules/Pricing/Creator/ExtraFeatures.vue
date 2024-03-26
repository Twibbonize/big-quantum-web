<template>
    <div class="extra-feature-creator grid grid-cols-2 grid-row-5 gap-3 sm:p-3">
        <div class="bento overflow-hidden row-span-3 p-10">
            <div class="flex flex-col h-full">
                <div>
                    <p class="extra-feature-creator__title">Campaign <strong>Analytics</strong></p>
                    <p class="mt-2">Easily track your campaign performance</p>
                </div>
                <div class="h-full relative mt-2">
                    <video
                        class="w-[600px] max-w-none absolute top-0 left-0"
                        autoplay
                        loop
                        muted
                        src="/assets/videos/pricing-analytics.mp4"
                    />
                </div>
            </div>
        </div>
        <div class="bento row-span-2 pt-4 pr-4">
            <div class="flex items-center justify-between">
                <div>
                    <img src="/assets/img/marketings/campaign-private.png" alt="private" />
                </div>
                <div class="-ml-2">
                    <p class="extra-feature-creator__title"><strong>Private</strong></p>
                    <p class="extra-feature-creator__title"><strong>Campaign</strong></p>
                    <p class="mt-2">Offer exclusivity to your supporter</p>
                </div>
            </div>
        </div>
        <div class="bento row-span-3 p-4 text-center">
            <div class="flex flex-col h-full justify-between">
                <div>
                    <p class="extra-feature-creator__title">Campaign</p>
                    <p class="extra-feature-creator__title"><strong>Customization</strong></p>
                    <p class="mt-2">Personalize your campaign page</p>
                </div>
                <video
                    class="w-full"
                    autoplay
                    loop
                    muted
                    src="/assets/videos/pricing-campaign-customization.mp4"
                />
            </div>
        </div>
        <div class="bento row-span-2 pt-4 pb-10 px-10 text-center">
            <div class="flex flex-col justify-between">
                <div class="h-40 relative overflow-hidden">
                    <video
                        class="h-40 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
                        autoplay
                        loop
                        muted
                        src="/assets/videos/pricing-multiple-frames.mp4"
                    />
                </div>
                <div class="z-10">
                    <p class="extra-feature-creator__title -mt-2 z-10"><strong>Multiple Frames</strong></p>
                    <p class="extra-feature-creator__title">per campaign</p>
                    <p class="mt-2">Unleash creativity in versatility</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.extra-feature-creator {
    &__title {
        @apply text-[40px] font-normal;
        line-height: 100% !important;
    }

    .bento {
        @apply rounded-[32px] overflow-hidden;
        border: 1.5px solid var(--Light, #DEE8E8);
    }
}
</style>
