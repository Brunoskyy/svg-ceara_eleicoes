/* var json = require('../data/cidades.json') */
var json = {
    "categoria": "Densidade Demográfica",
    "cidades": [{
            "id": "fortaleza",
            "value": 240,
            "nome": "Fortaleza"
        },
        {
            "id": "acarau",
            "value": 265,
            "nome": "Acaraú"
        },
        {
            "id": "marco",
            "value": 380,
            "nome": "Marco"
        },
        {
            "id": "sobral",
            "value": 325,
            "nome": "Sobral"
        },
        {
            "id": "santa-quiteria",
            "value": 200,
            "nome": "Santa quitéria"
        },
        {
            "id": "caninde",
            "value": 289,
            "nome": "Canindé"
        },
        {
            "id": "trairi",
            "value": 384,
            "nome": "Trairí"
        },
        {
            "id": "acarape",
            "value": 400,
            "nome": "Acarape"
        },
        {
            "id": "quixeramobim",
            "value": 50,
            "nome": "Quixeramobim"
        },
        {
            "id": "taua",
            "value": 400,
            "nome": "Tauá"
        },
        {
            "id": "jaguaretama",
            "value": 100,
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

    console.log('scale: ' + scale.sort())
}

function generatePopover(categoria, id, nome, value) {
    document.getElementById(`${id}`).addEventListener("mouseover", function (event) {
        var posX = event.clientX
        var posY = event.clientY
        // console.log(posX)
        // console.log(posY)
        // console.log(`${categoria}`)
        // console.log(`${value}`)

        document.querySelector('.pop').style.top = `${posY}px`
        document.querySelector('.pop').style.left = `${posX/2}px`
        document.querySelector('.pop').style.display = 'block'
        document.querySelector('.pop .city').innerHTML = `${nome}`
        document.querySelector('.pop .category').innerHTML = `${categoria}: ${value}`
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