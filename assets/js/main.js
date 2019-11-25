/* var json = require('../data/cidades.json') */
var json = {
    "categoria": "Candidatos",
    "cidades": [{
            "id": "fortaleza",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Fortaleza"
        },
        {
            "id": "acarau",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Acaraú"
        },
        {
            "id": "marco",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Marco"
        },
        {
            "id": "sobral",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Sobral"
        },
        {
            "id": "santa-quiteria",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Santa quitéria"
        },
        {
            "id": "caninde",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Canindé"
        },
        {
            "id": "trairi",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Trairí"
        },
        {
            "id": "acarape",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Acarape"
        },
        {
            "id": "quixeramobim",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Quixeramobim"
        },
        {
            "id": "taua",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Tauá"
        },
        {
            "id": "jaguaretama",
            "value": 'bonoro(psl), kraken(pt)',
            "nome": "Jaguaretama"
        }

    ]
}

 /*
 * Author: Artur Bruno
 * Date: 21 Nov 2019
 * Description:
 *      Mapa interativo para portal O POVO Online
 **/

/* array de escalas */
var scale = []
//var intervalScale = [];

function percorrerArray() {
    json.cidades.forEach(e => {
        // gera escala
        scale.push(e.value)
        generatePopover(json.categoria, e.id, e.nome, e.value)
    });
}

function generatePopover(categoria, id, nome, value) {
    document.getElementById(`${id}`).addEventListener("mouseover", function (event) {
        var posX = event.clientX
        var posY = event.clientY

        document.querySelector('.pop').style.top = `${posY}px`
        document.querySelector('.pop').style.left = `${posX/2}px`
        document.querySelector('.pop').style.display = 'block'
        document.querySelector('.pop .city').innerHTML = `${nome}`
        document.querySelector('.pop .category').innerHTML = `${categoria}: ${value}`
    })
}

function closePopover() {
    const popOver = document.querySelector('.pop')
    const btnClose = document.querySelector('.pop .btn-close')
    btnClose.addEventListener('click', function(){
        popOver.style.display = 'none'
    })
}

function changeColor() {
    json.cidades.forEach( e => {
        let elem = document.getElementById(`${e.id}`)
        elem.style.fill = 'rgb(107,142,35,1)'
    })
}

percorrerArray()
changeColor()
closePopover()