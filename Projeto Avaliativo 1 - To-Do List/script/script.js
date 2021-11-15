const listaStorageTemp = localStorage.getItem('listaItens')
let listaStorage = listaStorageTemp ? JSON.parse(listaStorageTemp) : []

btnAdicionar.addEventListener("click", () => criarNovoItem())

const criarNovoItem = () => {
    const valorTexto = inputTexto.value;
    inputTexto.value = ''
    erro.innerHTML = "&nbsp;"
    if (!valorTexto) {
        erro.innerText = "Preencha a descrição para adicionar a tarefa."
        return;
    }
    const itemId = getNextId()
    adicionarItem(valorTexto, itemId, false)
    listaStorage.push({ itemId, valorTexto, feito: false })
    const listaJSON = JSON.stringify(listaStorage)
    localStorage.setItem("listaItens", listaJSON)
}

const RemoverItem = (li) => {
    li.remove()
    listaStorage = listaStorage.filter(it => it.itemId != li.id)
    const listaJSON = JSON.stringify(listaStorage)
    localStorage.setItem("listaItens", listaJSON)
}

const marcarTarefa = (event, itemId) => {
    const spanTexto = document.getElementById('span' + itemId)
    let feito = undefined
    if (event.target.checked) {
        spanTexto.classList.add('checked')
        feito = true
    } else {
        spanTexto.classList.remove('checked')
        feito = false
    }

    listaStorage = listaStorage.filter(it => {
        if (it.itemId == itemId) {
            it.feito = feito
        }
        return it
    })
    const listaJSON = JSON.stringify(listaStorage)
    localStorage.setItem("listaItens", listaJSON)
}

const adicionarItem = (valorTexto, itemId, feito) => {

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    checkbox.checked = feito
    checkbox.addEventListener('click', (event) => marcarTarefa(event, itemId))

    const spanTarefa = document.createElement("span")
    spanTarefa.innerHTML = valorTexto
    spanTarefa.id = 'span' + itemId
    feito && (spanTarefa.className = 'checked')

    const trasIcon = document.createElement("i")
    trasIcon.className = "fas fa-trash"
    trasIcon.addEventListener('mouseleave', (event) => event.target.style.color = "darkgray")
    trasIcon.addEventListener('mouseenter', (event) => event.target.style.color = "rgb(247, 94, 94)")

    var li = document.createElement("li")
    li.setAttribute("id", itemId)
    trasIcon.addEventListener('click', () => {
        if (window.confirm('Confirma a exclusão?')) {
            RemoverItem(li)
        }
    })

    li.appendChild(checkbox)
    li.appendChild(spanTarefa)
    li.appendChild(trasIcon)

    listaUl.appendChild(li)
}

const getNextId = () => {
    let nextId = 0
    if (listaStorage.length > 0) {
        const arrayIds = listaStorage.map(it => it.itemId);
        nextId = Math.max(...arrayIds) + 1
    }
    return nextId;
}

listaStorage.forEach(itemTarefa => {
    adicionarItem(itemTarefa.valorTexto, itemTarefa.itemId, itemTarefa.feito)
});
