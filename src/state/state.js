export class State {
    constructor(factory) {
        this.factory = factory ?? ((p) => p);

        this.polygons = [];
        this.selected = null;
        this.changeColorBtn = null;

        this.listeners = [];

        this.history = [];
        this.future = [];

        this._colorSnapshot = null;
    }

    on(fn) {
        this.listeners.push(fn);
    }

    notify() {
        this.listeners.forEach((fn) => fn());
    }

    setColorLive(color) {
        if (!this.selected) return;

        this.selected.color = color;
        this.notify();
    }

    beginColorEdit() {
        if (!this.selected) return;

        this._colorSnapshot = this.snapshot();
    }

    commitColor(color) {
        if (!this.selected) return;

        if (!this._colorSnapshot) {
            this.pushHistory();
        } else {
            this.history.push(this._colorSnapshot);
            this.future = [];
            this._colorSnapshot = null;
        }

        this.selected.color = color;
        this.notify();
    }

    cancelColor() {
        if (!this._colorSnapshot) return;

        this.restore(this._colorSnapshot);
        this._colorSnapshot = null;
        this.notify();
    }

    serialize() {
        return {
            polygons: this.polygons.map((polygon) => ({
                id: polygon.id,
                n: polygon.n,
                points: polygon.points,
                color: polygon.color,
                name: polygon.name,
            })),
            selectedId: this.selected?.id ?? null,
        };
    }

    deserialize(data) {
        this.polygons = data.polygons.map((polygon) => this.factory(polygon));

        if (data.selectedId) {
            this.selected = this.polygons.find((polygon) => polygon.id === data.selectedId) ?? null;
        } else {
            this.selected = null;
        }
    }

    snapshot() {
        return JSON.stringify(this.serialize());
    }

    restore(snapshot) {
        const data = typeof snapshot === 'string' ? JSON.parse(snapshot) : snapshot;
        this.deserialize(data);
    }

    pushHistory() {
        this.history.push(this.snapshot());
        this.future = [];
    }

    addPolygon(poly) {
        this.pushHistory();
        this.polygons.push(poly);
        this.notify();
    }

    removeSelected() {
        if (!this.selected) return;

        this.pushHistory();
        this.polygons = this.polygons.filter((polygon) => polygon !== this.selected);
        this.selected = null;
        this.notify();
    }

    removeAll() {
        this.pushHistory();
        this.polygons = [];
        this.selected = null;
        this.notify();
    }

    select(polygon) {
        this.selected = polygon;
        this.notify();
    }

    clearSelection() {
        this.selected = null;
        this.notify();
    }

    undo() {
        if (!this.history.length) return;

        this.future.push(this.snapshot());

        const prev = this.history.pop();
        this.restore(prev);

        this.notify();
    }

    redo() {
        if (!this.future.length) return;

        this.history.push(this.snapshot());

        const next = this.future.pop();
        this.restore(next);

        this.notify();
    }

    getPolygons() {
        return this.polygons;
    }

    getSelected() {
        return this.selected;
    }

    canUndo() {
        return this.history.length > 0;
    }

    canRedo() {
        return this.future.length > 0;
    }

    canChangeColor() {
        return !!this.selected;
    }

    export() {
        return this.serialize();
    }

    import(data) {
        this.pushHistory();
        this.deserialize(data);
        this.future = [];
        this.notify();
    }
}
