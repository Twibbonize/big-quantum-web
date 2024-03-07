import { code } from '../constants';

export default class ShortcutHandler {
    constructor(handler) {
        this.handler = handler;
        this.keyEvent = this.handler.keyEvent;
    }

    isEscape(e) {
        return e.code === code.ESCAPE && this.keyEvent.esc;
    }

    isSpace(e) {
        return e.code === code.SPACE;
    }

    isQ(e) {
        return e.code === code.KEY_Q;
    }

    isW(e) {
        return e.code === code.KEY_W;
    }

    isDelete(e) {
        return (e.code === code.BACKSPACE || e.code === code.DELETE) && this.keyEvent.del;
    }

    isArrow(e) {
        return e.code.includes('Arrow') && this.keyEvent.move;
    }

    isCtrlA(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.KEY_A && this.keyEvent.all;
    }

    isCtrlC(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.KEY_C && this.keyEvent.copy;
    }

    isCtrlV(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.KEY_V && this.keyEvent.paste;
    }

    isCtrlZ(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.KEY_Z && this.keyEvent.transaction;
    }

    isCtrlY(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.KEY_Y && this.keyEvent.transaction;
    }

    isShiftCmdZ(e) {
        return e.code === code.KEY_Z && (e.ctrlKey || e.metaKey) && e.shiftKey;
    }

    isCtrlPlus(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.EQUAL && this.keyEvent.zoom;
    }

    isCtrlMinus(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.MINUS && this.keyEvent.zoom;
    }

    isO(e) {
        return e.code === code.KEY_O && this.keyEvent.zoom;
    }

    isP(e) {
        return e.code === code.KEY_P && this.keyEvent.zoom;
    }

    isCtrlX(e) {
        return (e.ctrlKey || e.metaKey) && e.code === code.KEY_X && this.keyEvent.cut;
    }
}
