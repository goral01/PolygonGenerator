export class CanvasUI {
    constructor(width = 500, height = 500) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;

        this.ctx = this.canvas.getContext('2d');
    }

    add(parent) {
        parent.appendChild(this.canvas);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getContext() {
        return this.ctx;
    }

    getElement() {
        return this.canvas;
    }
}
