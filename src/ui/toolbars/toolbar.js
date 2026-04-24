// ui/toolbar.js
import { ButtonUI } from '../button.js';

export class ToolbarUI {
    constructor(buttonConfigs = []) {
        this.el = document.createElement('div');
        this.el.classList.add('toolbar');

        this.buttons = [];

        this.createButtons(buttonConfigs);
    }

    createButtons(configs) {
        configs.forEach((config) => {
            const btn = new ButtonUI(config);

            if (config.handler) {
                btn.el.addEventListener('click', config.handler);
            }

            this.buttons.push(btn);
            this.el.appendChild(btn.el);
        });
    }

    add(parent) {
        parent.appendChild(this.el);
    }
}
