import { ToolbarUI } from './toolbar.js';

export class TimelineToolbarUI extends ToolbarUI {
    constructor({ state }) {
        super([]);

        this.state = state;

        this.createButtons([
            {
                text: 'Undo',
                icon: '↶',
                handler: () => this.state.undo(),
            },
            {
                text: 'Redo',
                icon: '↷',
                handler: () => this.state.redo(),
            },
        ]);

        this.undoBtn = this.buttons[0].el;
        this.redoBtn = this.buttons[1].el;

        this.state.on(() => this.update());
        this.update();
    }

    update() {
        this.undoBtn.disabled = !this.state.canUndo();
        this.redoBtn.disabled = !this.state.canRedo();
    }
}
