let btnText= document.getElementById('btn')
function mode ()
{
    document.body.classList.toggle('dark')
    if (btnText.textContent == "🌛")
    {
        btn.textContent = "☀️"
    }
    else
    {
        btn.textContent="🌛"
        }
}

let c=0;

function incr()
{
    if(c<25)
    {
        c++
        document.getElementById("count").textContent=c
        if(c%2==0)
        {
            document.getElementById("oddeven").innerText="even";
        }
        else{
            document.getElementById("oddeven").innerText="odd"
        }
    }
}
function decr()
{
    if(c>-10)
    {
        c--
        document.getElementById("count").textContent=c
        if(c%2==0)
        {
            document.getElementById("oddeven").innerText="even";
        }
        else{
            document.getElementById("oddeven").innerText="odd"
        }
    }
}
function reset()
{
    c=0;
    document.getElementById("count").textContent=c;
    document.getElementById("oddeven").innerText="even";
}

const color = (x) =>
{
    document.body.style.backgroundColor = "#"+x;
}