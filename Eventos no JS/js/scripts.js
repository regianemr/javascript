// adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("Clicou aqui!")
});

// removendo eventos - removeEventListener
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.rangeOffset);
    console.log(event.target);

})

// Propagando eventos - stopPropagation
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
})

// Evento padrão - preventDefault
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página")
})

// Eventos de tecla - keyup e keydown(tecla quando é solta) (tecla pressionada)
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});


// outross eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou botão");
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})

// Movimento do mouse - mousemove
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo x: ${e.x}`)
    // console.log(`No eixo y: ${e.y}`)
})

// Eventos por scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200px")
    }
});

// Evento por foco - focus e blur
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})

// Eventos de carregamento de página - load e beforeunload (alguns não usam mais)
window.addEventListener("load", () => {
    console.log("A página carregou")
})

// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();
//     e.returnValue = "Tem certeza que quer sair?"; // antes poderia colocar a mensagem, hoje não pega mais

// })

// Tecnica de debounce  
const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments);

        }, delay);
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms");
}, 400)
)