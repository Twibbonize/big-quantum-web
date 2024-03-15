<script setup>
import { computed, ref } from 'vue';
import { useElementSize } from '@vueuse/core';
import QCreator from '@/components/atoms/QCreator.vue';
import QEllipsisText from '@/components/molecules/QEllipsisText.vue';
import { extractText } from '@/utils/string';

const props = defineProps({
    frame: {
        type: String
    },
    caption: {
        type: String
    },
    creator: {
        type: Object
    }
});
const captionContainer = ref(null);
const { width: captionContainerWidth } = useElementSize(captionContainer);
const sanitizedCaption = computed(() => extractText(props.caption));
</script>
<template>
    <div class="caption-preview">
        <div class="caption-preview__twibbon">
            <img :src="frame" alt="twibbon" />
        </div>
        <div class="caption-preview__details">
            <div ref="captionContainer" class="caption-preview__content">
                <QEllipsisText
                    :containerWidth="captionContainerWidth"
                    :lines="2"
                    :text="sanitizedCaption"
                />
            </div>
            <div class="caption-preview__creator">
                <QCreator
                    :name="creator.name"
                    :avatar="creator.avatar"
                    :username="creator.username"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.caption-preview {
    box-shadow: 0px 5.068px 20px 0px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    @apply bg-white flex items-center p-4;

    .caption-preview__twibbon {
        max-width: 76px;
        max-height: 76px;
        aspect-ratio: 1/1;
        border-radius: 5px;
        overflow: hidden;
        flex-shrink: 0;

        img {
            max-height: 100%;
        }
    }

    .caption-preview__details {
        flex-grow: 1;
        width: 0;
        word-break: break-all;
        margin-left: 12px;
    }

    .caption-preview__creator {
        @apply mt-2;
    }
}
</style>
