const maindiv=document.getElementById('main')
let todos;
function api()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
        return res.json()
    })
    .then(function (res2){
        todos=res2;
        displayData()
    })
    .catch(function (err){console.log(err)})
}
api()

function displayData()
{
    todos.forEach(
        function (td){
            const div=document.createElement('div')
            div.classList.add('todo')
            const p=document.createElement('p')
            p.textContent=td.title
            div.appendChild(p)
            maindiv.appendChild(div)
        }
    )
}       