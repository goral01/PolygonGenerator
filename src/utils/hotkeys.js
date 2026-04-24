export function bindHotkeys(state) {
    window.addEventListener('keydown', (e) => {
        const isCtrl = e.ctrlKey || e.metaKey;
        if (!isCtrl) return;

        if (e.key.toLowerCase() === 'z' && !e.shiftKey) {
            e.preventDefault();
            state.undo();
        }

        if (e.key.toLowerCase() === 'y' || (e.key.toLowerCase() === 'z' && e.shiftKey)) {
            e.preventDefault();
            state.redo();
        }
    });
}
