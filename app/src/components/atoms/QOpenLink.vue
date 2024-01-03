<script setup>
const props = defineProps({
    url: String,
    text: String,
    classes: {
        type: String,
        default: 'text-sm'
    }
});
</script>

<template>
    <div class="open-link">
        <RouterLink class="flex items-center color_black" :class="classes" :to="url">
            {{ text }} <i class="ri-arrow-right-line"></i
        ></RouterLink>
    </div>
</template>

<style lang="scss">
.open-link {
    @apply flex items-center justify-between flex-wrap;

    a {
        @apply font-extrabold leading-5 capitalize relative;
        transition: all 0.3s ease;

        &:hover {
            &::after {
                width: 107%;
            }
        }

        &::after {
            position: absolute;
            width: 18px;
            height: 18px;
            top: 5px;
            right: 1px;
            content: '';
            border-radius: 20px;
            border: 1px solid rgba(27, 27, 27, 0.1);
            background: rgba(27, 27, 27, 0.1);
            transition: all 0.3s ease;
        }
    }

    i {
        @apply p-1 ml-1.5 rounded-2xl bg-none no-underline;
    }
}
</style>
