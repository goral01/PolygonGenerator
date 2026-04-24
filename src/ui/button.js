export class ButtonUI {
    constructor({ text = '', icon = '', handler }) {
        this.el = document.createElement('button');
        this.el.classList.add('btn');

        if (icon) {
            const iconSpan = document.createElement('span');
            iconSpan.classList.add('btn__icon');
            iconSpan.innerHTML = icon;
            this.el.appendChild(iconSpan);
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = text;
        this.el.appendChild(textSpan);

        if (handler) {
            this.el.addEventListener('click', handler);
        }
    }

    add(parent) {
        parent.appendChild(this.el);
    }
}
