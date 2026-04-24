import { isInsideCanvas } from './bounds';
import { polygonsIntersectSAT } from './sat';

export function generatePolygonSafe(callback, canvas, polygons, maxTries = 100) {
    for (let i = 0; i < maxTries; i++) {
        const poly = callback();

        if (!isInsideCanvas(poly, canvas)) continue;

        const collision = polygons.some((p) => polygonsIntersectSAT(poly.points, p.points));

        if (!collision) {
            return poly;
        }
    }

    return null;
}
