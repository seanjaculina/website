
//const max_projects = 2;
const srcArray = [
    {src: "images/personalproj.png", title: "Personal Project", explanation: "Personal website which contains information about myself as well as personal links to linkedin and github", href: "https://github.com/seanjaculina/website"},
    {src: "images/DiceGame.png", title: "Dice Game", explanation: "personal project that allowed me practice with event listeners and building a website from scratch", href: "https://seansdice.netlify.app/"},
    {src: "images/weather.png", title: "Weather App", explanation: "personal project of weather app using API", href: "https://seansweather.netlify.app/"} ]
const section2 = document.querySelector(".section2");

for(let i = 0; i < srcArray.length; i++){
    const div = document.createElement("div")
    div.classList.add("project-container")
    const img = document.createElement("img")
    img.classList.add("img")
    img.setAttribute("src", `${srcArray[i].src}`)
    const div2 = document.createElement("div")
    div2.classList.add("project-container-info")
    const h3 = document.createElement("h3")
    h3.innerTEXT = `${srcArray[i].title}`
    const p = document.createElement("p")
    p.innerText = `${srcArray[i].explanation}`
    const p2 = document.createElement("p")
    p2.innerText = "Technologies used for this project are shown below"
    const a = document.createElement("a")
    a.classList.add("website-repo")
    a.setAttribute("target", "_blank")
    a.setAttribute("href", `${srcArray[i].href}`)
    const icon = document.createElement("i")
    icon.classList.add("fas", "fa-globe")

    div.appendChild(img)
    div.appendChild(div2)
    div2.appendChild(h3)
    div2.appendChild(p)
    div2.appendChild(p2)
    div2.appendChild(a)
    a.appendChild(icon)
    section2.appendChild(div)
}