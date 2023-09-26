export class FloralView{
        criarBotaoComTexto(text) {
            const button = document.createElement('button');
            button.innerText = text;
            return button;
        }

        criarListaDeElementos(elements) {
            const list = document.createElement('ol');
            elements.forEach(element => {
                const listItem = document.createElement('li');
                listItem.appendChild(element);
                list.appendChild(listItem);
            });
            return list;
        }
        // ... other view methods
    }
