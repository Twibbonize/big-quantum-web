import { inject } from 'vue';

export function useModal() {
    const eventBus = inject('eventBus');

    const open = ({ component, props, config }) => {
        eventBus.emit('modal:open', { component, props, config });
    };

    const update = (cfg) => {
        eventBus.emit('modal:update', cfg);
    };

    const close = () => {
        eventBus.emit('modal:close');
    };

    return { open, update, close };
}
