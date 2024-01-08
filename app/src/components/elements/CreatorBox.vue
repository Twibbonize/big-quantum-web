<script setup>
import numeral from 'numeral';
import { RouterLink } from 'vue-router';

const props = defineProps({
    number: Number,
    name: String,
    avatar: String,
    supports: Number
});
</script>

<template>
    <RouterLink to="/u/universetech">
        <div class="creator-box">
            <div class="order">{{ `#${props.number}` }}</div>
            <img :src="avatar" alt="" class="avatar" />
            <div class="info">
                <h5 class="name">{{ name }}</h5>
                <p class="supporters">
                    <i class="ri-group-line"></i>{{ numeral(props.supports).format('0.0a') }}
                </p>
            </div>
        </div>
    </RouterLink>
</template>

<style lang="scss">
.creator-box {
    @apply flex items-center pb-8 mb-6 hover:cursor-pointer;
    border-bottom: 1px solid rgb(217, 217, 217);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0px 30px 50px rgb(0 0 0 / 35%);
        box-shadow: 0px 25px 20px -10px rgb(0 0 2 / 5%);
    }

    .order {
        @apply font-bold text-2xl text-3xl opacity-10 mr-5;
    }

    .avatar {
        @apply w-[64px] sm:w-[80px] aspect-square mr-4;
    }

    .info {
        .name {
            @apply font-bold text-lg hover:underline;
        }

        .supporters {
            @apply text-sm opacity-30;
        }
    }
}
</style>
