<script setup>
import QButton from '@/components/atoms/QButton.vue';

const props = defineProps({
    totalPages: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['change']);

const handleChangePage = (page) => {
    emit('change', page);
};
</script>

<template>
    <div class="pagination">
        <template v-for="i in totalPages" :key="i">
            <QButton
                circle
                :variant="currentPage === i ? 'primary' : 'subtle'"
                class="pagination__button"
                @click="() => handleChangePage(i)"
            >
                <span class="font-medium">{{ i }}</span>
            </QButton>
        </template>
    </div>
</template>

<style scoped lang="scss">
.pagination {
    @apply flex items-center space-x-1;
}
</style>
