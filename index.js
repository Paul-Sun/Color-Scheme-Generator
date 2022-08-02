
const colorsPanel = [
    document.getElementById("color-0"), 
    document.getElementById("color-1"), 
    document.getElementById("color-2"), 
    document.getElementById("color-3"), 
    document.getElementById("color-4")
]
const hexPanel = [
    document.getElementById("color-0-hex"),
    document.getElementById("color-1-hex"),
    document.getElementById("color-2-hex"),
    document.getElementById("color-3-hex"),
    document.getElementById("color-4-hex")
]

function renderColor(data){
 for (let i=0; i<5; i++){
     colorsPanel[i].style.backgroundColor = data.colors[i].hex.value
     hexPanel[i].textContent = data.colors[i].hex.value
 }
}

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()
    const seedColor = document.getElementById("seedColor").value
    const mode = document.getElementById("scheme-mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.slice(1)}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => renderColor(data)
            )
})
