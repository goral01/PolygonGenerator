import './style/index.css';

import { CanvasUI } from './ui/canvas.js';
import { TextUI } from './ui/text.js';

import { ActionToolbarUI } from './ui/toolbars/actionToolbar.js';
import { TimelineToolbarUI } from './ui/toolbars/timelineToolbar.js';
import { FileToolbarUI } from './ui/toolbars/fileToolbar.js';

import { Polygon } from './ui/polygon/polygon.js';
import { State } from './state/state.js';

import { generatePolygonSafe } from './utils/geometry/polygonSafe.js';
import { pointInPolygon } from './utils/geometry/pointInPolygon.js';
import { polygonsIntersectSAT } from './utils/geometry/sat.js';
import { isInsideCanvas } from './utils/geometry/bounds.js';
import { clampDeltaToCanvas, translatePoints } from './utils/movement.js';
import { bindHotkeys } from './utils/hotkeys.js';

const app = document.getElementById('app');

const state = new State((data) => {
    const polygon = new Polygon(data.n);

    polygon.id = data.id;
    polygon.points = data.points;
    polygon.color = data.color;
    polygon.name = data.name;

    return polygon;
});

bindHotkeys(state);

const counterText = new TextUI({ text: '0 Polygons' });
const selectedPolygonText = new TextUI({ text: 'No selected polygon' });

counterText.add(app);
selectedPolygonText.add(app);

const canvasUI = new CanvasUI(500, 500);
const canvas = canvasUI.getElement();
const ctx = canvasUI.getContext();

const counter = document.createElement('div');
counter.classList.add('counter');
app.appendChild(counter);

const toolbarActions = new ActionToolbarUI({
    state,
    canvas,
});

const toolbarTimeline = new TimelineToolbarUI({
    state,
});

const toolbarFile = new FileToolbarUI({
    state,
});

toolbarTimeline.add(app);
canvasUI.add(app);
toolbarActions.add(app);
toolbarFile.add(app);

state.on(() => {
    canvasUI.clear();

    for (const p of state.getPolygons()) {
        p.selected = p === state.getSelected();
        p.draw(ctx);
    }

    counterText.setText(`Polygons: ${state.getPolygons().length}`);

    const selected = state.getSelected();
    selectedPolygonText.setText(selected ? `Selected: ${selected.name}` : 'No selected polygon');
});

function getMouse(e, canvas) {
    const rect = canvas.getBoundingClientRect();

    return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
}

canvas.addEventListener('mousedown', (e) => {
    const mouse = getMouse(e, canvas);

    const polygons = state.getPolygons();

    let found = null;

    for (let i = polygons.length - 1; i >= 0; i--) {
        if (pointInPolygon(mouse, polygons[i])) {
            found = polygons[i];
            break;
        }
    }

    if (!found) {
        state.clearSelection();
        return;
    }

    state.select(found);
    const startSnapshot = state.snapshot();

    let last = mouse;
    let moved = false;

    const onMove = (ev) => {
        const cur = getMouse(ev, canvas);

        const dx = cur.x - last.x;
        const dy = cur.y - last.y;

        const selected = state.getSelected();
        if (!selected) return;

        const clamped = clampDeltaToCanvas(selected.points, canvas, dx, dy);

        if (clamped.dx || clamped.dy) {
            selected.points = translatePoints(selected.points, clamped.dx, clamped.dy);

            moved = true;
            state.notify();
        }

        last = cur;
    };

    const onUp = () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);

        if (!moved) return;

        const selected = state.getSelected();
        if (!selected) return;

        let valid = true;
        const polys = state.getPolygons();

        for (const p of polys) {
            if (p === selected) continue;

            if (polygonsIntersectSAT(selected.points, p.points)) {
                valid = false;
                break;
            }
        }

        if (!valid || !isInsideCanvas(selected, canvas)) {
            state.restore(startSnapshot);
        } else {
            state.history.push(startSnapshot);
            state.future = [];
        }

        state.notify();
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
});
