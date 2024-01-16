<script setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import numeral from 'numeral';

dayjs.extend(relativeTime);

const props = defineProps({
    supports: Number,
    createdAt: Number,
    isLine: Boolean
});
</script>

<template>
    <div class="flex content-between items-stretch gap-2 mt-2.5">
        <div class="flex items-center flex-1">
            <i class="ri-group-line text-base mr-1.5"></i>
            <div class="flex flex-col">
                <span class="text-xs font-medium">Supporters</span>
                <h6
                    class="text-sm font-medium opacity-50 text-ellipsis overflow-hidden whitespace-nowrap"
                >
                    {{ numeral(props.supports).format('0.0a') }}
                </h6>
            </div>
        </div>
        <div v-if="isLine" class="meta-info-line"></div>
        <div class="flex items-center flex-1">
            <i class="ri-time-line text-base mr-1.5"></i>
            <div class="flex flex-col">
                <span class="text-xs font-medium">Created</span>
                <h6
                    class="text-sm font-medium opacity-50 text-ellipsis overflow-hidden whitespace-nowrap"
                >
                    {{ dayjs(props.createdAt).fromNow() }}
                </h6>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.meta-info-line {
    width: 1px;
    background: rgba(27, 27, 27, 0.1);
}
</style>
