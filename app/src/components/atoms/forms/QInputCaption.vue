<script setup>
import { Editor, EditorContent } from '@tiptap/vue-3';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Variable from '@/libs/tiptap/extension-variable';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import QButton from '@/components/atoms/QButton.vue';
const editor = ref(null);

const addVariable = () => {
    // const { from, to } = editor.value.state.selection;

    // // Create a transaction to insert "bold text" with a bold style
    // const transaction = editor.value.state.tr.insertText('bold text', from, to);
    // transaction.addMark(from, to, editor.value.schema.marks.bold.create());

    // // console.log(editor.value.schema.marks.variable.create)
    // // Apply the transaction to the editor
    // editor.value.view.dispatch(transaction);
    // // editor.value.view.dispatch(boldTransaction);

    // // Set the focus back to the editor
    // editor.value.view.focus();
    editor.value.chain().focus().addVariable().run();
};

onMounted(() => {
    editor.value = new Editor({
        editorProps: {
            attributes: {
                class: 'tiptap-editor'
            }
        },
        content: `<p>
            Hi, My name is  <code>Your Name</code> , and I am all in to support this campaign. Let's gather and make a real impact with this campaign together!    
        </p>`,
        extensions: [Document, Paragraph, Text, Variable, Bold]
    });
});

onBeforeUnmount(() => {
    editor.value.destroy();
});
</script>

<template>
    <div class="editor">
        <editor-content :editor="editor" />
        <QButton variant="secondary" size="sm" class="editor__add-variable" @click="addVariable">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <path
                    d="M3.58736 3C2.81574 4.55366 2.41543 6.26528 2.41798 8C2.41798 9.79625 2.83861 11.4937 3.58736 13M12.4186 13C13.19 11.4463 13.5901 9.73467 13.5874 8C13.5874 6.20375 13.1667 4.50625 12.4186 3M6.16798 6.125H6.94673C7.08247 6.12506 7.2145 6.16931 7.32286 6.25106C7.43123 6.33281 7.51003 6.44762 7.54736 6.57813L8.04298 8.3125L8.53861 10.0469C8.57593 10.1774 8.65474 10.2922 8.7631 10.3739C8.87146 10.4557 9.00349 10.4999 9.13923 10.5H9.91798M10.543 6.125H10.493C10.3126 6.12492 10.1344 6.16387 9.97053 6.23918C9.80665 6.31448 9.66101 6.42435 9.54361 6.56125L6.54298 10.0638C6.42551 10.2007 6.27976 10.3106 6.11577 10.386C5.95178 10.4613 5.77343 10.5002 5.59298 10.5H5.54298"
                    stroke="#707070"
                    stroke-width="1.5808"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <span class="ml-1 font-normal">Add Custom Field</span>
        </QButton>
    </div>
</template>

<style scoped lang="scss">
.editor {
    padding: 12px 16px 10px;
    background-color: #f6fafa;
    border-radius: 14px;
    @apply relative border border-stroke transition-all duration-100 ease-in-out;

    &:focus-within {
        @apply outline outline-offset-2 outline-main-darker;
    }

    .editor__add-variable {
        padding: 6px;
        border-radius: 4px;
        color: #667085;
        margin-top: 16px;
        @apply bg-white border border-stroke flex items-center text-sm;
    }
}
</style>

<style lang="scss">
.tiptap-editor {
    @apply text-sm;

    &:focus-visible {
        border: none;
        overflow: visible;
        outline: none;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
}

.tiptap-editor code {
    padding: 3px 6px;
    border-radius: 4px;
    @apply border border-stroke;
}
</style>