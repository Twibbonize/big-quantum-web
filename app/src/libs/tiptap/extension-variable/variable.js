import { Mark, mergeAttributes, markInputRule, markPasteRule } from '@tiptap/core';

const inputRegex = /(?:\[\[)([^]+)(?:\]\])$/;
const pasteRegex = /\[\[([^]+)\]\]/g;

export const Variable = Mark.create({
    name: 'variable',
    addOptions() {
        return {
            HTMLAttributes: {}
        };
    },

    parseHTML() {
        return [
            {
                tag: 'code'
            }
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ['code', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },

    addCommands() {
        return {
            setVariable:
                () =>
                ({ commands }) => {
                    return commands.setMark(this.name);
                },
            toggleVariable:
                () =>
                ({ commands }) => {
                    return commands.toggleMark(this.name);
                },
            unsetVariable:
                () =>
                ({ commands }) => {
                    return commands.unsetMark(this.name);
                }
        };
    },

    addInputRules() {
        return [
            markInputRule({
                find: inputRegex,
                type: this.type
            })
        ];
    },

    addPasteRules() {
        return [
            markPasteRule({
                find: pasteRegex,
                type: this.type
            })
        ];
    }
});
