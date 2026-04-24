export class TextUI {
    constructor({ text = '' }) {
        this.el = document.createElement('div');
        this.el.classList.add('text');

        this.setText(text);
    }

    setText(text) {
        this.el.textContent = text;
    }

    add(parent) {
        parent.appendChild(this.el);
    }
}
