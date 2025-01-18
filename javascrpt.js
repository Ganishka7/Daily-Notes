var texta = document.querySelector(".info")
var bg = document.querySelector(".overlay")
var buttonPluse = document.getElementById("pop")



    buttonPluse.addEventListener("click",function(){
        texta.style.display = "block"
        bg.style.display = "block"
    })

var cancel = document.getElementById("cancel")

cancel.addEventListener("click" , function(event){
      event.preventDefault()
      bg.style.display="none"
      texta.style.display ="none"
})


var container = document.querySelector(".container")
var title = document.getElementById("title")
var thedhi = document.getElementById("thedhi")
var add = document.getElementById("add")
var description = document.getElementById("description")
var touch = document.getElementById("touch")

add.addEventListener("click",function(event){
    event.preventDefault()

    var box = document.createElement("div")
    box.setAttribute("class","specify")
    box.innerHTML=`<h2>${title.value}</h2>
    <h3>${thedhi.value}</h3>
    <p>${description.value}</p>
    <button>Delete</button>`
    container.append(box)
    bg.style.display="none"
    texta.style.display ="none"


})

function del(event){

    event.target.parentElement.remove()

}
