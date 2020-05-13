document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")

    let target = document.querySelector('main > ul')
    let img = document.createElement("img")
    let cine = function(img, titre, date, real, genre, sortie){
        this.img = img;
        this.titre = titre;
        this.date = date;
        this.real = real;
        this.genre = genre;
        this.sortie = sortie;
    }
    let kingkong = new cine(
       '<img src="./asset/king-kong.jpg">',
        "King Kong",
        "1943",
        "C.Cooper,Ernest B",
        "Horreur,Fantastique",
        "22 novembre 2005"

    )
    let scarface = new cine(
        '<img src="./asset/camonte.jpg">',
        "Scarface",
        "1932",
        "Howard Hawks",
        "Policier, Action",
        "23 décembre 2005"

    )
    let autantenemportelevent = new cine(
        '<img src="./asset/autant-le-vent-little.png">',
        "Autant en emporte le vent",
        "1939",
        "Victor Fleming",
        "Dramatique, guerre",
        "19 mars 2005"
    )
    let tab_object = []

    tab_object.push(kingkong,scarface,autantenemportelevent)

    console.log(tab_object)
    
    for (let key in tab_object){
        target.innerHTML += `
                             <li> 
                             <div> ${tab_object[key].img} </div>
                             <h2> ${tab_object[key].titre}</h2>
                             <div class="texte" >
                             <p><font color="blue">Date</font> ${tab_object[key].date}</p>
                             <p><font color="blue">Réal</font>  ${tab_object[key].real}</p>
                             <p><font color="blue">Genre</font>  ${tab_object[key].genre}</p>
                             <p><font color="blue">Sortie</font>  ${tab_object[key].sortie}</p>
                             </div>
                             </li>`
    }
})
