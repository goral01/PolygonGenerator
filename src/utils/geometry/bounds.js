export function isInsideCanvas(poly, canvas) {
    const b = poly.getBounds();

    return b.minX >= 0 && b.minY >= 0 && b.maxX <= canvas.width && b.maxY <= canvas.height;
}
