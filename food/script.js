const arr=[
    {
        image:"https://res.cloudinary.com/drmwb9u0p/image/upload/v1714974083/Idli_cjhgzw.jpg",
        Title:"idli",
        Cost:5
    },
    {
        image:"https://res.cloudinary.com/drmwb9u0p/image/upload/v1715045191/dosa_qk4wzb.jpg",
        Title:"Dosa",
        Cost:25
    },
    {
        image:"https://res.cloudinary.com/drmwb9u0p/image/upload/v1715045201/vada_lpxexm.jpg",
        Title:"vada",
        Cost:6
    },
    {
        image:"https://res.cloudinary.com/drmwb9u0p/image/upload/v1715045354/sambar_idli_umiahx.jpg",
        Title:"sambar idly",
        Cost:25
    },
    {
        image:"https://res.cloudinary.com/drmwb9u0p/image/upload/v1715045359/bonda_qpqj41.jpg",
        Title:"bonda",
        Cost:5
    }
]

const maindiv = document.getElementById('tiffin')
function center()
{
    arr.forEach(
        function(tiff)
        {
            const image=document.createElement('img')
            image.src = tiff.image
            const title = document.createElement('p')
            title.textContent=tiff.Title
            const cost=document.createElement('p')
            cost.textContent= "Cost: "+tiff.Cost+"/-"
            const subDiv=document.createElement('div')
            subDiv.classList.add('tiffin1')
            const btn=document.createElement('button')
            btn.textContent="ADD"
            const btn1=document.createElement('button')
            btn1.textContent="REMOVE"
            btn.addEventListener('click',incr)
            btn1.addEventListener('click',decr)
            subDiv.append(image,title,cost,btn,btn1)
            maindiv.appendChild(subDiv)
        }
    )
}
center()
const btn=document.getElementById('count')
const btn1=document.getElementById('count')
let c=0;
function incr()
{
    btn.textContent=++c;
    document.getElementsByClassName('modal')[0].classList.remove('hidden')
}
document.getElementById('close').addEventListener('click', closeModal)
function closeModal() {
	document.getElementsByClassName("modal")[0].classList.add("hidden")
}
function decr()
{
    btn1.textContent=--c;
    document.getElementsByClassName('modal1')[0].classList.remove('hidden1')
}
document.getElementById('close').addEventListener('click',closemodal1)
function closemodal1()
{
    document.getElementsByClassName("modal1")[0].classList.add("hidden1")
}
