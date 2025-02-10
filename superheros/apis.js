const Hero = async() => {
try {
    let response= await fetch("https://akabab.github.io/superhero-api/api/all.json");
      return  response.json();

    
 }
  catch(error) {
     console.log(error);
 }
};

