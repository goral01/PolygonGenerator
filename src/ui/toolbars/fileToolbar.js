import { ToolbarUI } from './toolbar.js';

export class FileToolbarUI extends ToolbarUI {
    constructor({ state }) {
        super([]);

        this.state = state;

        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = 'application/json';
        this.fileInput.style.display = 'none';

        this.fileInput.addEventListener('change', (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();

            reader.onload = () => {
                try {
                    const json = JSON.parse(reader.result);
                    this.state.import(json);
                } catch {
                    console.error('Invalid JSON');
                }
            };

            reader.readAsText(file);
        });

        document.body.appendChild(this.fileInput);

        this.createButtons([
            {
                text: 'Export',
                icon: '💾',
                handler: () => this.export(),
            },
            {
                text: 'Import',
                icon: '📂',
                handler: () => this.import(),
            },
        ]);
    }

    export() {
        const data = this.state.export();

        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: 'application/json',
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'scene.json';
        a.click();

        URL.revokeObjectURL(url);
    }

    import() {
        this.fileInput.click();
    }
}
