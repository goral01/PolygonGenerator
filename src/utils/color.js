export function color() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.5;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function rgbaToHex(rgba) {
    const res = rgba.match(/\d+/g);
    if (!res) return '#ffffff';

    const r = parseInt(res[0]).toString(16).padStart(2, '0');
    const g = parseInt(res[1]).toString(16).padStart(2, '0');
    const b = parseInt(res[2]).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}
