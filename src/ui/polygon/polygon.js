import { uuid } from '../../utils/uuid';
import { color } from '../../utils/color';

export class Polygon {
    constructor(n) {
        this.id = uuid();
        this.n = n;
        this.points = [];
        this.color = color();
        this.name = `Polygon ${this.id}`;

        this.spawnTime = performance.now();
        this.spawnDuration = 250;
    }

    getBounds() {
        let minX = Infinity,
            minY = Infinity;
        let maxX = -Infinity,
            maxY = -Infinity;

        for (const p of this.points) {
            minX = Math.min(minX, p.x);
            minY = Math.min(minY, p.y);
            maxX = Math.max(maxX, p.x);
            maxY = Math.max(maxY, p.y);
        }

        return { minX, minY, maxX, maxY };
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }

        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        if (this.selected) {
            ctx.strokeStyle = '#e6e6e6';
            ctx.lineWidth = 1;
        } else {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1;
        }

        ctx.stroke();
    }
}
