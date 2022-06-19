document.querySelector('#getButton').addEventListener('click', apiRequest)
document.querySelector('#search').addEventListener('keypress', apiRequest)

async function apiRequest(){
    const pokemonType = document.querySelector('input').value
    try {
        const response = await fetch(`https://webdevdevon-pokemon-types.herokuapp.com/api/${pokemonType}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('type').innerText = data.type
        document.getElementById('info').innerText = data.info
        document.getElementById('strong').innerText = data.strong
        document.getElementById('weak').innerText = data.weak
        document.getElementById('pokepic').src = data.picture
    }catch(error){
        console.log(error)
    }
}