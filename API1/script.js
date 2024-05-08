const maindiv=document.getElementById('main')
const subdiv=document.getElementsByClassName('instruction')[0]
function receipe()
{
    fetch('https://dummyjson.com/recipes')
    .then(function (res){return res.json()})
    .then(function (res2){displayData(res2.recipes)})
    .catch(function (err){console.log(err)})
}
receipe()

function displayData(res2)
{
    res2.forEach(function (re){
        const div=document.createElement('div')
        div.classList.add('recep')
        const p=document.createElement('p')
        p.textContent=re.name
        const image=document.createElement('img')
        image.src=re.image
        image.alt=re.name
        const h=document.createElement('h4')
        h.textContent="MEAL TYPE: "+ re.mealType
        const btn=document.createElement('button')
        btn.textContent="ADD"
        const btn1=document.createElement('button')
        btn1.textContent="REMOVE"
        const btn2=document.createElement('button')
        btn2.textContent="HOW TO MAKE"
        const p1=document.createElement('p')
        p1.textContent=re.instructions
        btn.addEventListener('click',incr)
        btn1.addEventListener('click',decr)
        btn2.addEventListener('click',how)
        div.append(image,p,h,btn,btn1,btn2)
        maindiv.appendChild(div)
        subdiv.appendChild(p1)
    })
}
const count=document.getElementById('count')
let c=0
function incr()
{
    count.textContent=++c;
}
function decr()
{
    if(c>0)
        {
            count.textContent=--c;
        }
}

function how()
{
   const a=document.getElementsByClassName('instruction')[0]
   a.classList.remove('hidden')
}
document.getElementById('close').addEventListener('click',close)
function close()
{
    document.getElementsByClassName('instruction')[0].classList.add('hidden')
}