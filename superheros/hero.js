const root = document.getElementById("root");

Hero().then((data) => {
  Hero().then((data) => {

    data.map((Hero) => {
    const div = document.createElement("div")
    div.append(Hero.name)
    div.classList.add("card")
    root.append(div);

  const img = document.createElement('img'); 
img.src ="https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2024/02/24163821/DC-Marvel-Jim-Lee.jpg"; 
document.body.append(img);

    
    })
   

data.map((Hero) => {
  const image = document.createElement('img');
  image.src = "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2024/02/24163821/DC-Marvel-Jim-Lee.jpg"; 
  div.append(img);
})


  data.map((Hero) => {
  const div = document.createElement("div")
  div.append(Hero.powerstats)
  div.classList.add("card")
  root.append(div);
  })



} )
  console.log(data)}).catch((error) => {console.log(error)}); 

