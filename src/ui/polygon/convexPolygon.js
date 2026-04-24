import { Polygon } from './polygon.js';

export class ConvexPolygon extends Polygon {
    constructor(n, canvas) {
        super(n);
        this.canvas = canvas;
        this.generate();
    }

    generate() {
        const centerX = Math.random() * this.canvas.width;
        const centerY = Math.random() * this.canvas.height;

        const radius = 20 + Math.random() * 40;

        const angles = Array.from({ length: this.n }, () => Math.random() * Math.PI * 2).sort(
            (a, b) => a - b,
        );

        this.points = angles.map((angle) => {
            const r = radius * (0.6 + Math.random() * 0.4);

            return {
                x: centerX + Math.cos(angle) * r,
                y: centerY + Math.sin(angle) * r,
            };
        });
    }
}
