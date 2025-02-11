const root = document.getElementById("root");

Hero().then((data) => {
  Hero().then((data) => {

    data.map((hero) => {
    const div = document.createElement("div")
    const img= document.createElement("img")
    const para = document.createElement("p")
    img.src= hero.images.sm
    div.append(para)
    div.append(" ",img," ",)
    para.append(" ",hero.name,": ")
    para.append(" ","Durability:", " ",hero.powerstats.durability, " ")
    para.append(" ","Intelligence:"," " , hero.powerstats.intelligence, " ")
    para.append(" ","Power:" ," ", hero.powerstats.power, " ")
    para.append(" ","Speed:" ," ", hero.powerstats.speed, " ")
    para.append(" ","Strength:"," " , hero.powerstats.strength," ")
    para.append(" ", "Combat:" ," ", hero.powerstats.combat, " ")
    para.classList.add("card")
    div.classList.add("card")
    root.append(div);
    })
 


} )
  console.log(data)}).catch((error) => {console.log(error)}); 

