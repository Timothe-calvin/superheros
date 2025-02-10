const root = document.getElementById("root");

Hero().then((data) => {

data.map((Hero) => {
const div = document.createElement("div")
div.append(Hero.name)
div.classList.add("card")
root.append(div);
  })

  console.log(data)}).catch((error) => {console.log(error)}); 

