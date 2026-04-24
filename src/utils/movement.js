export function translatePoints(points, dx, dy) {
    return points.map((point) => ({
        x: point.x + dx,
        y: point.y + dy,
    }));
}

export function getBoundsFromPoints(points) {
    let minX = Infinity,
        minY = Infinity;
    let maxX = -Infinity,
        maxY = -Infinity;

    for (const point of points) {
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
    }

    return { minX, minY, maxX, maxY };
}

export function clampDeltaToCanvas(points, canvas, dx, dy) {
    const bounds = getBoundsFromPoints(points);

    const minDx = -bounds.minX;
    const maxDx = canvas.width - bounds.maxX;
    const minDy = -bounds.minY;
    const maxDy = canvas.height - bounds.maxY;

    return {
        dx: Math.max(minDx, Math.min(maxDx, dx)),
        dy: Math.max(minDy, Math.min(maxDy, dy)),
    };
}
