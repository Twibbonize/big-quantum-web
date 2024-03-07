import { debounce } from 'lodash';

export default class ContextmenuHandler {
    constructor(handler) {
        this.handler = handler;
        this.classes = this.handler.classes.contextmenu;
        this.initialize();
    }

    initialize() {
        const { canvas } = this.handler;
        this.contextmenuEl = canvas.wrapperEl.parentElement.querySelector(
            `.${this.classes.container}`
        );
        this.contextmenuEl.addEventListener('click', () => this.hide());
        this.hide();
    }

    show = (e, target) => {
        this.contextmenuEl.classList.add(this.classes.visible);
        const { clientX: left, clientY: top } = e;
        this.contextmenuEl.style.left = `${left}px`;
        this.contextmenuEl.style.top = `${top}px`;

        const { onContext } = this.handler;

        if (onContext) {
            onContext(e, target);
        }
    };

    hide = debounce(() => {
        if (this.contextmenuEl) {
            this.contextmenuEl.classList.remove(this.classes.visible);
        }
    }, 100);
}
