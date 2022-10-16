const Pizzas = [
    {
        id: 1,
        nombre: "Mozzarella",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Aceitunas"],
        precio: 500
    },
    {
        id: 2,
        nombre: "Fugazzetta",
        ingredientes: ["Cebolla", "Queso mozzarella"],
        precio: 650
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Tomate", "ajo"],
        precio: 800
    },
    {
        id: 4,
        nombre: "Margarita",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Albahaca"],
        precio: 800
    },
    {
        id: 5,
        nombre: "Calabresa",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Calabresa"],
        precio: 900
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["Queso mozzarella", "Rúcula", "Tomates cherry", "Olivas negras", "Jamón crudo",],
        precio: 1100
    }
]

const input = document.getElementById('input')
const form = document.getElementById('form')
const container = document.getElementById('container')


const msgError = (msg) => {
    container.innerHTML = `<p class="error">${msg}</p>`
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const id = Number(input.value)

    const filteredPizza = Pizzas.filter(pizza => id === pizza.id)

    const renderPizzaYPrecio = (filteredPizza) => {
        return `<h2 class="pizza-name">${filteredPizza[0].nombre}</h2>
                <h3 class="pizza-value">$${filteredPizza[0].precio}</h3>
              `
    }

    if (input.value === "") {
        msgError('Este campo no puede estar vacio')
    }
    else if (!filteredPizza.length) {
        msgError('No se encontró la Pizza')
    } else {
        container.innerHTML = renderPizzaYPrecio(filteredPizza)
    }

    form.reset()
})
