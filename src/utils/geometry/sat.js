function project(points, axis) {
    let min = Infinity;
    let max = -Infinity;

    for (const p of points) {
        const dot = p.x * axis.x + p.y * axis.y;
        if (dot < min) min = dot;
        if (dot > max) max = dot;
    }

    return { min, max };
}

function getAxes(points) {
    const axes = [];

    for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];

        const edge = { x: p2.x - p1.x, y: p2.y - p1.y };
        const normal = { x: -edge.y, y: edge.x };

        const len = Math.hypot(normal.x, normal.y);

        axes.push({ x: normal.x / len, y: normal.y / len });
    }

    return axes;
}

export function polygonsIntersectSAT(a, b) {
    const axes = [...getAxes(a), ...getAxes(b)];

    for (const axis of axes) {
        const p1 = project(a, axis);
        const p2 = project(b, axis);

        if (p1.max < p2.min || p2.max < p1.min) {
            return false;
        }
    }

    return true;
}
