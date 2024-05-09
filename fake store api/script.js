const maindiv=document.getElementById('main')
const subdiv=document.getElementById('para')
function fetchdata()
{
    fetch("https://fakestoreapi.com/products")
        .then(function (res){return res.json()})
        .then(function (data){displaydata(data)})
}
fetchdata()
function displaydata (data)
{
    data.forEach(function (pro){
        const div=document.createElement('div')
        div.classList.add('product')
        const image=document.createElement('img')
        image.src=pro.image
        image.alt=pro.title
        const title=document.createElement('h2')
        title.textContent=pro.title
        const price=document.createElement('p')
        price.textContent="COST :- "+"$"+pro.price
        const cat=document.createElement('p')
        cat.textContent="category "+pro.category
        const btn=document.createElement('button')
        btn.textContent="ADD TO CART"
        btn.addEventListener('click',cart)
        const btn1=document.createElement('button')
        btn1.textContent="About"
        btn1.addEventListener('click', () => dec(pro))
        div.append(image,title,cat,price,btn,btn1)
        maindiv.appendChild(div)        
    })
}
const count=document.getElementById('count')
let c=0;
function cart()
{
    count.textContent=++c;
}
function dec(r)
{
    const a=document.getElementsByClassName('desc')[0].classList.remove('hidden')
    const description=document.createElement('p')
    description.textContent=r.description
    subdiv.appendChild(description)
}
const c1=document.getElementById('close').addEventListener('click',closefun)
function closefun()
{
    const a=document.getElementsByClassName('desc')[0].classList.add('hidden')
    subdiv.textContent=''
}
