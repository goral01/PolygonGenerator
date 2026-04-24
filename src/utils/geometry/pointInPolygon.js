export function pointInPolygon(point, polygon) {
    let inside = false;

    for (let i = 0, j = polygon.points.length - 1; i < polygon.points.length; j = i++) {
        const xi = polygon.points[i].x,
            yi = polygon.points[i].y;
        const xj = polygon.points[j].x,
            yj = polygon.points[j].y;

        const intersect =
            yi > point.y !== yj > point.y &&
            point.x < ((xj - xi) * (point.y - yi)) / (yj - yi + 0.00001) + xi;

        if (intersect) inside = !inside;
    }

    return inside;
}
