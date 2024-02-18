<script setup>
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import QModal from '@/components/atoms/QModal.vue';

const eventBus = inject('eventBus');
const modalComponent = ref(null);
const modalProps = ref(null);
const modalCfg = ref(null);

const handleClose = () => {
    modalComponent.value = null;
    modalProps.value = null;
    modalCfg.value = null;
};

onMounted(() => {
    eventBus.on('modal:open', ({ component, props, config }) => {
        modalComponent.value = component;
        modalProps.value = props;
        modalCfg.value = config || {};
    });

    eventBus.on('modal:update', (cfg) => {
        modalCfg.value = { ...modalCfg.value, ...cfg };
    });

    eventBus.on('modal:close', handleClose);
});

onBeforeUnmount(() => {
    eventBus.off('modal:open');
    eventBus.off('modal:update');
    eventBus.off('modal:close');
});
</script>

<template>
    <QModal :show="!!modalComponent" v-bind="modalCfg" @close="handleClose" v-slot="{ isDragging }">
        <template v-if="modalCfg && modalCfg.position === 'bottom'">
            <Component
                :is="modalComponent && { ...modalComponent }"
                v-bind="{ ...modalProps, isDragging }"
            />
        </template>

        <template v-else>
            <transition name="fade">
                <Component :is="modalComponent && { ...modalComponent }" v-bind="modalProps" />
            </transition>
        </template>
    </QModal>
</template>