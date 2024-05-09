const maindiv=document.getElementById('main')
const input=document.getElementById('txt')
const button=document.getElementById('btn')
button.addEventListener('click',fetchdata)
function fetchdata()
{
    fetch(`https://omdbapi.com/?s=${input.value}&apikey=c5b1cbfc`)
    .then(function (res){return res.json()})
    .then(function (data){displayData(data.Search)})
}

function displayData(data)
{
    maindiv.textContent=''
    data.forEach(function (m){
        const div=document.createElement('div')
        div.classList.add('movie')
        const image=document.createElement('img')
        image.src=m.Poster
        image.alt=m.Title
        const title=document.createElement('h2')
        title.textContent=m.Title
        const link=document.createElement('a')
        link.href=`https://www.imdb.com/title/${m.imdbID}`
        link.appendChild(title)
        div.append(image,link)
        maindiv.appendChild(div)
    })
}
//api key=3049cddf