import { Polygon } from './polygon.js';

export class ConcavePolygon extends Polygon {
    constructor(n, canvas) {
        super(n);
        this.canvas = canvas;
        this.generate();
    }

    generate() {
        const centerX = Math.random() * this.canvas.width;
        const centerY = Math.random() * this.canvas.height;

        const spread = 60;

        const points = [];

        for (let i = 0; i < this.n; i++) {
            points.push({
                x: centerX + (Math.random() - 0.5) * spread,
                y: centerY + (Math.random() - 0.5) * spread,
            });
        }

        const center = points.reduce(
            (acc, point) => ({
                x: acc.x + point.x / this.n,
                y: acc.y + point.y / this.n,
            }),
            { x: 0, y: 0 },
        );

        points.sort(
            (a, b) =>
                Math.atan2(a.y - center.y, a.x - center.x) - Math.atan2(b.y - center.y, b.x - center.x),
        );

        this.points = points;
    }
}
