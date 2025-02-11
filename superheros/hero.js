const root = document.getElementById("root");

Hero().then((data) => {
  Hero().then((data) => {

    data.map((hero) => {
    const div = document.createElement("div")
    const img= document.createElement("img")
    img.src= hero.images.sm
    div.append(hero.name)
    div.append(img)
    div.append(hero.powerstats.combat)
    div.append(hero.powerstats.durability)
    div.append(hero.powerstats.intelligence)
    div.append(hero.powerstats.power)
    div.append(hero.powerstats.speed)
    div.append(hero.powerstats.strength)
    div.classList.add("card")
    root.append(div);
    })
 


} )
  console.log(data)}).catch((error) => {console.log(error)}); 

