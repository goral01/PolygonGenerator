import { ToolbarUI } from './toolbar.js';
import { generatePolygonSafe } from '../../utils/geometry/polygonSafe.js';
import { ConvexPolygon } from '../polygon/convexPolygon.js';
import { ConcavePolygon } from '../polygon/concavePolygon.js';

import { rgbaToHex } from '../../utils/color.js';

export class ActionToolbarUI extends ToolbarUI {
    constructor({ state, canvas }) {
        super([]);

        this.state = state;
        this.canvas = canvas;

        this.activeColorInput = null;

        this.createButtons([
            {
                text: 'Generate polygon',
                icon: '⬢',
                handler: () => this.generate(),
            },
            {
                text: 'Delete polygon',
                icon: '✖️',
                handler: () => this.delete(),
            },
            {
                text: 'Delete all',
                icon: '🗑️',
                handler: () => this.deleteAll(),
            },
            {
                text: 'Change color',
                icon: '🎨',
                handler: () => this.changeColor(),
            },
        ]);

        this.changeColorBtn = this.buttons[3].el;

        this.state.on(() => this.update());

        this.update();
    }

    generate() {
        const n = Math.floor(Math.random() * 5) + 3;
        const isConvex = Math.random() < 0.5;

        const poly = generatePolygonSafe(
            () => (isConvex ? new ConvexPolygon(n, this.canvas) : new ConcavePolygon(n, this.canvas)),
            this.canvas,
            this.state.getPolygons(),
        );

        if (poly) {
            this.state.addPolygon(poly);
        }
    }

    delete() {
        this.state.removeSelected();
    }

    deleteAll() {
        this.state.removeAll();
    }

    changeColor() {
        const selected = this.state.getSelected();
        if (!selected) return;

        if (this.activeColorInput) {
            this.cleanupColorInput();
        }

        const input = document.createElement('input');
        input.type = 'color';
        input.value = rgbaToHex(selected.color);

        this.activeColorInput = input;

        document.body.appendChild(input);

        this.state.beginColorEdit();

        input.addEventListener('input', (e) => {
            this.state.setColorLive(e.target.value);
        });

        input.addEventListener('change', (e) => {
            this.state.commitColor(e.target.value);
            this.cleanupColorInput();
        });

        input.addEventListener('blur', () => {
            this.state.cancelColor();
            this.cleanupColorInput();
        });

        input.click();
    }

    cleanupColorInput() {
        if (!this.activeColorInput) return;

        this.activeColorInput.remove();
        this.activeColorInput = null;
    }

    update() {
        this.changeColorBtn.disabled = !this.state.canChangeColor();
    }
}
